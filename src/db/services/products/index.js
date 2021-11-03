import express from "express";

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
    .post(() => {

    })

router
    .route("/:id")
    .get(() => {

    }) 
    .put(() => {

    }) 
    .delete(() => {

    }) 

export default router;