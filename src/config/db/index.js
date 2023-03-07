const mongoose = require('mongoose')

async function connect() {
    
    const URI = 'mongodb+srv://admin:XMnuIU05kyjV2x7r@e-commerce.asumm.mongodb.net/e_commerce?retryWrites=true&w=majority';

    try {
        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`DB connected successfully`)
    } catch (error) {
        console.log(`Connect failed !!! `)
    }
    

}

module.exports = { connect };