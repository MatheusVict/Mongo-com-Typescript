import  { Express } from "express";
import connectData from "../database";
import midllewareApp from "./middleware";

export default function configApp(app: Express): void {
    connectData()
    midllewareApp(app)
}