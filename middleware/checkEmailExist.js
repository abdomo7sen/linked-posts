import bcrypt from "bcrypt"
import { dbconnection } from "../database/dbConnection.js"

const conn=dbconnection()

const checkSignUpEmail=(req,res,next)=>{
    const {email}=req.body
    conn.query("SELECT email FROM users WHERE email=?",[email],(err,data)=>{
        if(err) return console.log(err);
        console.log(data);
        if(data.length>0){
            return res.status(409).json({msg:"Email Must be unique"})
        }
        else{
            req.body.password=bcrypt.hashSync(req.body.password,8)
            next()
        } 
    })
}   



const checkSignInEmail=(req,res,next)=>{
    const {email,password}=req.body
    conn.query(`select id,email,password from users where email='${email}' `,(err,data)=>{
        // if(err) return console.log(err);
        if(data.length==0){
            res.status(404).json({msg:"email Not Found"})
        }
        else{
            let match=bcrypt.compareSync(password,data[0].password)
            if (match) {
                res.status(200).json({message:"login... token",userId:data[0].id})

                return next()
            }else{
                res.status(401).json({msg:"Wrong Password"})
            }
        }
        
    })
}

export {
    checkSignInEmail,checkSignUpEmail
}