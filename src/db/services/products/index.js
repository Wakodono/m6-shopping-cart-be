import express from "express";
import models from "../../../db/models/index.js"

const { Product, Review } = models
const router = express.Router()

router
    .route("/")
    .get(async (req, res, next) => {
        try {
            const products = await Product.findAll({ include: Product })
            res.send(products)
        } catch (error) {
            next(error)
        }
    })
    .post(async (req,res, next) => {
        try {
            const data = await Product.create(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    })

router
    .route("/:id")
    .get(async (req, res, next) => {
        try {
           const product = await Product.findByPk(req.params.id)
           res.send(product) 
        } catch (error) {
            next(error)
        }
    }) 
    .put(async (req, res, next) => {
        try {
            const updatedProduct = await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
                returning: true,
            })
            res.send(updatedProduct[1][0])
        } catch (error) {
            next(error)
        }
    }) 
    .delete(() => {}) 

export default router;