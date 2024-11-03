import { dbconnection } from "../../database/dbConnection.js";
const conn=dbconnection()


const signUp=(req,res)=>{

    conn.query('insert into users set ?',req.body)
    res.status(201).json({message:"success"})
}
const signIn=(req,res)=>{
  
}

export {
    signUp,signIn
}