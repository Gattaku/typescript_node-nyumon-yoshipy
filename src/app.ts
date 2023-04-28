import { nextTick } from "process";
import express, { Request, Response, NextFunction } from "express"; //expressの補完が聞くように、typescriptのimport文で書く
// import *as  express from "express"; //外部のPKGを使うときはこれ、もしくは下の下記かk多
// import express = require("express")
// const express = require("express"); <--Nodeのimportの仕方だが、これだと、typescriptがexpressの中身がわからない"any型"
interface Reqtype extends Request {
    body: {
        message: string;
    }
}

const app = express();

app.use(express.json());
app.use("/", (req, res, next) => {
    console.log("hello");
    // throw new Error();
    next();
})
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.use("/", (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("hello");
    next();
})
app.post("/", (req: Reqtype, res) => {
    console.log(req.body);
    res.send(`<h1>I got ${req.body.message}</h1>`)
})

app.listen(3000);


// console.log("hi");