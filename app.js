import express from 'express'
import { dbconnection } from './database/dbConnection.js'
import userRouter from './modules/users/userRouter.js'
import { postRouter } from './modules/posts/postRouters.js'
const app = express()
const port = 3000


dbconnection()
app.use(express.json())
app.use("/auth",userRouter)
app.use("/posts",postRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))