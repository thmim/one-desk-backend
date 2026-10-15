import express, { Application, Request, Response } from "express";

const app:Application = express();

// test route
app.get("/",(req:Request,res:Response)=>{
    res.send('OneDesk start...')

})

export default app;