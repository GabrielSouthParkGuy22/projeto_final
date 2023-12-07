import Router from "express";

import { inserirDados } from "../repository/usuario.js";


const server = Router()

server.post("/usuario", async (req,resp) => {
    try {
        const data = req.body
        const chamarQuery = await inserirDados(data)
        resp.status(200).send({
            msg : "usuario cadastrado!",
            data
        })

    } catch (error) {
        resp.send(error)
    }

})


export default server