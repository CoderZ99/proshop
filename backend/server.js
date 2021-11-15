import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import productRouters from "./routes/productRouter.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
// define environment variables
dotenv.config()

// start connection
connectDb()

// create api server

const app = express()

app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/api/products", productRouters)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
