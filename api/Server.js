
import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv';
import studentRouter from './Router/StudentRouter.js';
import userRouter from './Router/UserRouter.js';
import productRouter from './Router/ProductRouter.js';
import connectmongoDB from './Config/db.js';
import errorHandle from './Middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';



// enviorment setup
const app = express();
dotenv.config();




// port create
let PORT = process.env.SERVER_PORT || 1150

// middleware init
app.use(express.json());
app.use(express.urlencoded({ extended : false }))
app.use(cookieParser())
app.use(cors())



// router initalised
app.use('/api/v1/products' , productRouter);
app.use('/api/students' , studentRouter)
app.use('/api/User' , userRouter);


// error handler
app.use( errorHandle );

// statick folder
app.use(express.static('api/public'));
// listning port


app.listen(PORT, () => {
    connectmongoDB();
    console.log(`Server running on port http://localhost:${PORT}/api/students`.bgMagenta.black)
})


