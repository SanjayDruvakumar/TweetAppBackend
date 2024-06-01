import http from "http"
import app from "./app.js"

let PORT=4000
let server=http.createServer(app)

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})