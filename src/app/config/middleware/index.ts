import  express, { Express } from "express";
import cors from 'cors'
import route from "../../routes";


export default function midllewareApp(app: Express): void {
    app.use(express.json());
    app.use(cors());
    app.use(route);
}