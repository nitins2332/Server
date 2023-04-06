import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const PORT = process.env.PORT || 8000;

const UserName = process.env.Db_username;
const PassWord = process.env.Db_password;

const URL = `mongodb://${UserName}:${PassWord}@ac-9ifmkng-shard-00-00.sgelfb1.mongodb.net:27017,ac-9ifmkng-shard-00-01.sgelfb1.mongodb.net:27017,ac-9ifmkng-shard-00-02.sgelfb1.mongodb.net:27017/?ssl=true&replicaSet=atlas-u7g0ms-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

DefaultData();
