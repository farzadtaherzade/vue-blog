const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require('path');

const authRouter = require("./router/auth");
const postRouter = require("./router/posts");
const categoryRoute = require("./router/categories");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("swagger-jsdoc");

mongoose.connect("mongodb://localhost:27017/blog");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
//? Load Config
dotEnv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

let options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node js api project for blog",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./router/*.js"],
};

const swaggerSpec = swaggerDocument(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, 'image1.jpg');
  },
});

const upload = multer({storage:storage})
app.post('/api/upload', upload.single("file"), (req, res)=> {
  res.status(200).json('file has uplaoded')
})

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}/api`);
});
