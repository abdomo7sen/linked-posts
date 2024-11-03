import { dbconnection } from "../../database/dbConnection.js"

const conn=dbconnection()

const addPost=(req,res)=>{
    conn.query("INSERT INTO posts set?" ,req.body)
    res.status(201).json({message:"success"})

}
const getAllPosts=(req,res)=>{
    conn.query("select users.id as userId,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.user_id ",(err,data)=>{
    res.status(201).json({message:"success",allPosts:data});

    })

}

const getSinglePosts=(req,res)=>{
    
    conn.query("select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.user_id  where posts.id=?",req.params.id,(err,data)=>{
        console.log(data);
    res.status(200).json({message:"success",posts:data});

    })

}
const getUserPosts=(req,res)=>{
    
    conn.query("select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.user_id  where users.id=?",req.params.id,(err,data)=>{
        console.log(data);
    res.status(200).json({message:"success",posts:data});

    })

}
const updatePost=(req,res)=>{
    
    conn.query("update posts set ? where id=?",[req.body,req.params.id],(err,data)=>{
        console.log(data);
    res.status(200).json({message:"success"});

    })

}

const deletePost=(req,res)=>{
    
    conn.query("delete  from posts where id=?",[req.params.id],(err,data)=>{
        
    res.status(200).json({message:"delete post"});

    })

}



export{
    addPost,getAllPosts,getSinglePosts,getUserPosts,updatePost,deletePost
}