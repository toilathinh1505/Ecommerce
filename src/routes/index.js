const productsRouter = require('./products')
const siteRouter = require('./site')

function route(app) {

    app.use('/', siteRouter)
    
    app.use('/products', productsRouter)

}
module.exports = route;