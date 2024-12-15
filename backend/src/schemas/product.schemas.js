import { z } from "zod";

export const productSchema = z.object({
  name: z.string({
    required_error: "Nombre del producto requerido",
  }),
  price: z
    .string({
      required_error: "Precio debe ser un número",
    })
    .optional(),
  quantity: z
    .string({
      required_error: "Cantidad debe ser un número",
    })
    .optional(),
  color: z
    .string({
      required_error: "Selecciona un color valido",
    })
    .optional(),
  info: z
    .string({
      required_error: "Ingresa la informacion del producto",
    })
    .optional(),
  sizes: z
    .string({
      required_error: "Selecciona una talla valida",
    })
    .optional(),
});
// Fin de productSchema
