import * as yup from "yup"

const taskSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório!"),
  description: yup.string().required("Descrição obrigatória!")
})

export {taskSchema}