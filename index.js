const { urlencoded } = require('express');
const express = require ('express');
const app = express()
const port = 8080;
const db = require('./Config/db');
const ShortUrl = require('./models/shortUrl');

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.get('/', async(req, res)=>{
    const shortUrls = await ShortUrl.findOne({})
    res.render('index',{shortUrls:shortUrls})
})
app.listen(port, function(err){
    if(err){
        console.log(`Error in running this server: ${err}`)
        return;
    }
    console.log(`Server is up and running on port: ${port}`)
})