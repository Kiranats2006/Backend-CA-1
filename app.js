const express=require('express')
const app=express();
app.post('/signup',(req,res)=>{
   const userName=req.body;
   const email=req.body;
   const password=req.body;
   const DateOfBirth=req.body;
   
if(userName){
    if(userName===String){
        return res.json(userName)
    }
    else{
        return res.send("Invalid username format")
    }
}
if(email){
    if(email.includes('@' && '.com')){
        return res.send(email)
    }
    else{
        return res.send("Invalid email format")
    }
}
if(password){
    if(password.includes('A-Z' &&'a-z'&& '1-9')){
        return res.send(password)
    }
    else{
        return res.send("Password should contain atleast one uppercase letter one lowercase letter one special character and one number")
    }
}
if(DateOfBirth){
    if(DateOfBirth>=18){
        return res.send(DateOfBirth)
    }
    else{
        return res.send("User must be 18 or older")
    }
}

})

app.listen(3000,()=>{
console.log(`app is running in localHost 3000`)
})