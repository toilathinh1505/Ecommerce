const Product = require('../models/Products')
const Cart = require('../models/Cart')

class SiteController {
    
    // [GET] /
    index(req, res, next) {
        Product.find({})
        .then(products => {
            products = products.map(product => product.toObject());
            res.render('home', { products });
        })

        .catch(next);

    }

    // [GET] /add-to-cart/:id
    cart(req, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Product.findById(productId, function(err, product) {
            if (err) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            console.log(req.session.cart);
            res.redirect('/');
        })
    }

    // [GET] /shopping-cart
    shopping(req, res, next) {
        if (!req.session.cart) {
            return res.render('shopping-cart', {products: null});
        }
        var cart = new Cart(req.session.cart);
        res.render('shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
    }
}

module.exports = new SiteController;