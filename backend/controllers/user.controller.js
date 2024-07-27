import {modelo} from '../models/user.model.js'

export const test = () => {
    console.log("Llamando a la funcion desde el controlador")
}
modelo.create({
    name: "Paco"
})
