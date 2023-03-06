const mongoose = require('mongoose')

async function connect() {
    
    const URI = 'mongodb+srv://toilathinh150503:15052003@cluster0.7hyrgeq.mongodb.net/?retryWrites=true&w=majority';

    try {
        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`DB connected successfully`)
    } catch (error) {
        console.log(`Connect failed !!! `)
    }
    

}

module.exports = { connect };