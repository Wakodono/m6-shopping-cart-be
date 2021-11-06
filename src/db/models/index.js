import Product from "./Products.js"
import Review from "./Reviews.js"

Product.hasMany(Review, {onDelete: "CASCADE" }) // creates productId in Review. Get Products including reviews
Review.belongsTo(Product, {onDelete: "CASCADE" }) // creates productId in Review. Get Reviews including products

export default { Product, Review }