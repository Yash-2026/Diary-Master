const handleLogin= async(req,res)=>{
    // const {username,password}=req.body;
    // if(!username || !password) return res.status(400).json({'message':'Please enter username and password'});
    //verification
    console.log(req)
    res.send(true)

} 

module.exports={handleLogin};