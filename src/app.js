require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chalk = require("chalk");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const notFoundMiddleware = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(morgan("dev"));
app.use(
    rateLimit({
        windowMs: 1000 * 60 * 15,
        max: 1,
        message: { message: "Too many request, please try again later " },
    })
);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

//  PORT อยู่ใน .env //
const port = process.env.PORT || 8000;
app.listen(port, () =>
    console.log(chalk.blueBright.bold.italic`server running on port: ${port}`)
);

// เอาไว้ (sync) เพิ่มข้อมูล DATA ใน Workbench //
// const { sequelize } = require("./models");
// sequelize.sync({ force: true });
