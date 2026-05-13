let initialRouteHandler = (req, res) => {
    res.send('Hello Sandip!');
}
let getAllUsersHandler = (req, res) => {
    console.log('Users route accessed');
    res.send('Users called with get method');
} 
let handleCalculate = (req, res) => {
    let reqData = req.body;
    let data = {  
        message: "I have received the data",
        data: reqData,
    }
    res.json(data);
}   

export {initialRouteHandler, getAllUsersHandler, handleCalculate};