import express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"
import { testConnection, connectDB } from "./db/index.js"
import productsRouter from "./services/products/index.js"
import {
    badRequestHandler,
    unauthorizedHandler,
    notFoundHandler,
    genericErrorHandler
} from "./errorHanders.js"

//GLOBAL MIDDLEWARES

const server = express()

server.use(cors)

server.use(express.json()) // If I do NOT specify this line BEFORE the endpoints, all the requests' bodies will be UNDEFINED

//ENDPOINTS

server.use("/products", productsRouter)

//ERROR MIDDLEWARES

server.use(badRequestHandler)
server.use(unauthorizedHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

const port = process.env.PORT //always remember to check if dotenv package is installed and USED ( -r dotenv/config)

console.table(listEndpoints(server))

server.listen(port, async () => {
    console.log(`Server is listening on port ${port}`);
  await testConnection();
  await connectDB();
})