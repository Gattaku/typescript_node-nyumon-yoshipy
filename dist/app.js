"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //expressの補完が聞くように、typescriptのimport文で書く
// const express = require("express"); <--Nodeのimportの仕方だが、これだと、typescriptがexpressの中身がわからない"any型"
const app = (0, express_1.default)();
app.listen(3000);
console.log("hi");
