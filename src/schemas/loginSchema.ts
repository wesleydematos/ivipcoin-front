import * as yup from "yup"

export const loginSchema = yup.object({
  email: yup.string().required("Email é obrigatório!"),
  password: yup.string().required("Senha é obrigatória!")
})