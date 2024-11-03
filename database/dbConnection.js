import mysql from "mysql2"

export const dbconnection = ()=>{
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "linkedposts"
    })
    connection.connect((err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Database connected")
        }
    })
    return connection
}