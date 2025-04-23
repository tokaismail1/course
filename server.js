const express = require('express');
const mongoose = require('mongoose');   
const courseRoutes = require('./routes/courseRoutes.js');
const bodyParser = require('body-parser');
// password = "cAEJAPByHXqIcWz1"
DataBaseURL= "mongodb+srv://course:cAEJAPByHXqIcWz1@cluster0.63qlwyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express();
app.use(express.json());
const connectDB = () => {
    try{
        mongoose.set('strictQuery' , false)
        mongoose.connect(DataBaseURL)
        console.log("connected to database")

    }catch(error){
        console.log(error)
        process.exit
    }
    
}

connectDB();

app.use('/api/courses', courseRoutes);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('everything is ok');
  });
const PORT =5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});