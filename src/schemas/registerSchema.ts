import * as yup from "yup"

export const registerSchema = yup.object().shape({
    email: yup
    .string()
    .email("Informe um email válido!")
    .required("Email obrigatório!"),
    password: yup
    .string()
    .min(6, "Insira uma senha com pelo menos 6 dígitos!")
    .required("Senha obrigatória!"),
    firstName: yup.string().required("Nome obrigatório!"),
    lastName: yup.string().required("Sobrenome obrigatório!")
})