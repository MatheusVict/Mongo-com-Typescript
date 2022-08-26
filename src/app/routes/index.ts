import { Router } from "express";
const route = Router();

const user = ["Matheus", "Tú"]

route.get('/rotas', (req, res) => {
    res.send('Rotas')
})

route.get('/user', (req, res) => {
    return res.json({user})
})

export default route;