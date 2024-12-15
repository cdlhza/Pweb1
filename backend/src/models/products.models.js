import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      default: 0.0,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1, // Nueva propiedad
      required: true,
    },
    color: {
      type: String,
      required: true, // Nueva propiedad
    },
    info: {
      type: String,
      required: true, // Nueva propiedad
    },
    sizes: {
      type: [String], // Nueva propiedad: Arreglo de tallas (Ejemplo: ["S", "M", "L"])
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // Esto mantiene automáticamente "createdAt" y "updatedAt".
  }
);

export default mongoose.model("Products", productsSchema);
