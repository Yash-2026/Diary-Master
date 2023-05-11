const express=require('express');
const app=express();
const oracledb = require('oracledb');
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/',require('./routes/login'));
app.use('/mydiary',require('./routes/form'));
app.use('/mydiary',require('./routes/report')); 



app.listen(5000,()=>{console.log("Server listening on port 5000");});
