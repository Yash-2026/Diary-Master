const express=require('express');
const router=express.Router();
const authController=require('../controllers/reportController');

router.get('/getmessage',authController.getcontent);

module.exports=router; 