import * as Yup from "yup";

const productSchema = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .trim()
    .max(55, "Name must be at max 55 characters."),
  price: Yup.number()
    .min(0, "Price cannot be negative.")
    .required("Price is required."),
  brand: Yup.string()
    .required("Brand is required.")
    .trim()
    .max(30, "Brand must be at max 30 characters."),
  quantity: Yup.number()
    .min(1, "Quantity must be at least 1.")
    .required("Quantity is required."),
  description: Yup.string()
    .min(200, "Description must be at least 200 characters.")
    .max(1000, "Description must be at max 1000 characters.")
    .required("Description is required.")
    .trim(),
});

export default productSchema;
