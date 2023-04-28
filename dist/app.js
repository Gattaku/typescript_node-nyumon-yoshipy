"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //expressの補完が聞くように、typescriptのimport文で書く
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", (req, res, next) => {
    console.log("hello");
    // throw new Error();
    next();
});
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});
app.use("/", (err, req, res, next) => {
    console.log("hello");
    next();
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send(`<h1>I got ${req.body.message}</h1>`);
});
app.listen(3000);
// console.log("hi");
