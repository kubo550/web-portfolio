import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(3, "Name must be longer than 3 char."),
  email: yup.string().email("Enter valid adress email"),
  message: yup
    .string()
    .required("Text is required")
    .min(10, "Text must be longer than 10 chars"),
});
