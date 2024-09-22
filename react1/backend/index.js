const express = require("express");
require('./db/db');
const User = require("./db/user");
const chats = require("./db/chats");
const cors  = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/users', async( req, res )=>{
    let chats_result = await chats.find().select(['question','answer']);
    let data={};
    if(chats_result){
      data = {
        status:true,
        msg:'Data Found',
        data:chats_result
      }
      res.send(JSON.stringify(data))
    }else{
      data={
        status:true,
        msg:'Data Not Found',
        data:[]
      }
      res.send(data);
    }
});
app.listen(5001);