import express from "express"; //expressの補完が聞くように、typescriptのimport文で書く
// const express = require("express"); <--Nodeのimportの仕方だが、これだと、typescriptがexpressの中身がわからない"any型"
const app = express();
app.listen(3000);


console.log("hi");