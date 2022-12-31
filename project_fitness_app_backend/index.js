
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import http from 'http';
// const { Server } = require("socket.io");
import {Server} from "socket.io";

//import {update,deletetodo, signup, login, workout} from './Controllers/controller.js'
import {signup, login, workout, patchWorkout, deleteW, allWorkouts, allMeals, patchMeal, deleteM, meal} from './Controllers/controller.js'

import express from 'express';
import cors from 'cors';

const app= express();


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

const server = http.createServer(app);


const io = new Server(server, {
   cors: {
     origin: "http://localhost:3000",
     methods: ["GET", "POST"],
   },
 });

 io.on("connection", (socket) => {
   socket.removeAllListeners();
   console.log(`User Connected: ${socket.id}`);
 
   socket.on("join_room", (data) => {
     socket.join(data);
     console.log(`User with ID: ${socket.id} joined room: ${data}`);
   });
 
   socket.on("send_message", (data) => {
     socket.to(data.room).emit("receive_message", data);
   });
 
   socket.on("disconnect", () => {
     console.log("User Disconnected", socket.id);
   });
 });
 
 server.listen(5002, () => {
   console.log("SERVER RUNNING");
 });
 







const PORT= 5001;


//Connecting to database
mongoose.connect('mongodb://localhost:27017/Workoutdb');


app.use(bodyParser.json());
app.post('/signup',signup);
app.post('/login',login);
app.get('/getWorkout',allWorkouts)

app.post('/workout',workout);
app.patch('/updateWorkout/:id',patchWorkout)
app.delete('/deleteWorkout/:id',deleteW)
// app.patch('/update-todo/:id',update)
// app.delete('/delete/:id',deletetodo)

app.get('/getMeal',allMeals)

app.post('/meal', meal);
app.patch('/updateMeal/:id',patchMeal)
app.delete('/deleteMeal/:id',deleteM)




app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`) );

