// creating a get method route
import express, { json } from 'express';
import dotenv from 'dotenv';
import {initialRouteHandler, getAllUsersHandler, handleCalculate} from './handlers.js';
//loading dotenv
dotenv.config();
let app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Sandip!');
}); 
//getting port from env file
let PORT = process.env.PORT;

app.get('/users', (req, res) => {
    console.log('Users route accessed');
    res.send('Users called with get method');
}); 

app.get(
    "/multiply",
    (req,res)=>{
        let data=req.body
        let a= data.a
        let b=data.b 
        let ress = a*b
        let resDAta ={
            "message": "Multiplied successfully",
            data: ress
        }
        res.status(200).json(resDAta)
        
    }
)

app.post('/user/create', (req, res) => {
    let reqData = req.body;

    let data = {
        message: "I have received the data",
        data: reqData
    };

    res.json(data);
});

app.post('/calculate', (req, res) => {
    handleCalculate(req, res);
});

//starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});