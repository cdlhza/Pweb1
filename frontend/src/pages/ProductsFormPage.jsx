import { Controller, useForm } from "react-hook-form";
import { useProducts } from "../context/ProductContext";
import uploadIcon from "../assets/addphoto.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoBagAdd } from "react-icons/io5";

function ProductsFormPage() {
  const server = "http://localhost:4000/img/";
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: 0.0,
      quantity: 1,
      color: "Azul", // Color predeterminado
      sizes: ["S", "M", "L"], // Tamaños predeterminados
      info: "",
      image: uploadIcon,
    },
  });
  const {
    products,
    createProduct,
    getProduct,
    updateProduct,
    updateProductNoUpdateImage,
  } = useProducts();
  const [selectedImage, setSelectedImage] = useState(uploadIcon);
  const inputImage = useRef(null);
  const navigate = useNavigate();
  const params = useParams();
  const [updateImage, setUpateImage] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const product = await getProduct(params.id);
        setValue("name", product.name);
        setValue("price", product.price);
        setValue("quantity", product.quantity);
        setValue("color", product.color);
        setValue("sizes", product.sizes);
        setValue("image", product.image);
        setValue("info", product.info);
        setSelectedImage(server + product.image);
      }
    }
    loadProduct();
  }, [params.id, getProduct, setValue]);

  console.log(products);
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name); // Nombre del producto
    formData.append("price", data.price); // Precio del producto
    formData.append("quantity", data.quantity); // Cantidad del producto
    formData.append("color", data.color); // Color del producto
    formData.append("sizes", data.sizes); // Tamaños seleccionados
    formData.append("info", data.info); // Información adicional del producto
    formData.append("image", data.image); // Imagen del producto
    try {
      if (params.id) {
        // Si hay un parámetro en la URL actualiza
        if (!updateImage) {
          // Si no se cambió la imagen, actualiza sin imagen
          const updateData = {
            name: data.name,
            price: data.price.toString(),
            quantity: data.quantity.toString(),
            color: data.color,
            image: data.image,
            info: data.info,
            sizes: data.sizes.toString([]),
          };
          await updateProductNoUpdateImage(params.id, updateData); // Espera la actualización
        } else {
          await updateProduct(params.id, formData); // Espera la actualización
        }
      } else {
        // Se va a crear un nuevo producto
        await createProduct(formData); // Espera la creación
      }
      navigate("/products"); // Navega solo después de completar la operación
    } catch (error) {
      console.error("Error al procesar el producto:", error);
    }
  });

  const handleImageClick = () => {
    inputImage.current.click();
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    setSelectedImage(file ? URL.createObjectURL(file) : uploadIcon);
    field.onChange(file);
    setUpateImage(true);
  };

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <h1 className="text-3xl font-bold my-2">Productos</h1>

        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre del producto"
          {...register("name", { required: "El nombre es requerido" })}
          autoFocus
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}

        <label htmlFor="price">Precio</label>
        <input
          type="number"
          step="0.10"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Precio del producto"
          {...register("price", {
            required: "El precio es requerido",
            min: { value: 0, message: "El precio mínimo es 0" },
            valueAsNumber: true,
          })}
        />
        {errors.price && (
          <div className="text-red-500">{errors.price.message}</div>
        )}

        <label htmlFor="quantity">Cantidad</label>
        <input
          type="number"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Cantidad"
          {...register("quantity", {
            required: "La cantidad es requerida",
            valueAsNumber: true,
          })}
        />
        {errors.quantity && (
          <div className="text-red-500">{errors.quantity.message}</div>
        )}

        <label htmlFor="color">Color</label>
        <select
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("color", { required: "El color es requerido" })}
        >
          <option value="Azul">Azul</option>
          <option value="Rojo">Rojo</option>
          <option value="Verde">Verde</option>
          <option value="Negro">Negro</option>
        </select>
        {errors.color && (
          <div className="text-red-500">{errors.color.message}</div>
        )}

        <label htmlFor="sizes">Tamaños</label>
        <div className="flex gap-2">
          {["S", "M", "L"].map((size) => (
            <div key={size}>
              <label>
                <input type="checkbox" value={size} {...register("sizes")} />
                {size}
              </label>
            </div>
          ))}
        </div>
        <label htmlFor="info">Informacion</label>
        <input
          type="text"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Infrmacion del producto"
          {...register("info", { required: "La informacion es requerida" })}
          autoFocus
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
        {errors.sizes && (
          <div className="text-red-500">{errors.sizes.message}</div>
        )}
        {errors.info && (
          <div className="text-red-500">{errors.info.message}</div>
        )}

        <div className="py-2 my-2">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagen seleccionada"
              width={200}
              height={200}
              className="max-h-[200px] object-contain"
              onClick={handleImageClick}
            />
          )}
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                ref={inputImage}
                onChange={(e) => handleImageChange(e, field)}
                className="hidden"
              />
            )}
          />
        </div>

        <button
          className="bg-transparent hover:bg-zinc-500 text-zinc-500 font-semibold hover:text-white py-2 px-4 border-zinc-500 hover:border-transparent rounded"
          type="submit"
        >
          <IoBagAdd size={30} />
        </button>
      </form>
    </div>
  );
}

export default ProductsFormPage;
