const express=require('express');
const router=express.Router();
const authController=require('../controllers/formcontrol');

router.post('/addmessage',authController.addcontent);

module.exports=router; 