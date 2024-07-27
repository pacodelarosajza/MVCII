import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import { test } from "./backend/controllers/user.controller.js";
dontenv.config();

mongoose.connect(process.env.url_bd)
.then(() => {
    console.log('si funciona')
})
.catch((err) => {
    console.log('no funciona', err)
})
const app=express();
app.use(cors())
app.listen(4000, () => {
    console.log('Esta funcionando el servidor local')
})
test()
