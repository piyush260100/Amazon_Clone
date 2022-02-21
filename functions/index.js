const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors');
const { request } = require("express");
const stripe=require('stripe')('sk_test_51KU5sGSHr2R7TX3aRAyKM7WfxgsElw19jrBlJ1wuWA2YwRQnV9StwUgema41XUxEcAcFoH0uFBy3oXbz04hI6C6r00Te2xMGhF');

//API

// - App config

const app =express();

// - Middlewares
app.use(cors({origin:true, credentials:true}));
app.use(express.json());


// - API routes
app.get('/',(request, response)=>response.status(200).send('hello world'))


app.post('/payment/create', async (request,response)=>{
    const total=request.query.total;

    console.log('Payment request received BOOM !! for this amount',total);

    const paymentIntent=await stripe.paymentIntents.create({
        amount: total,
        currency:"INR",
    });

    //Ok-Created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

// - listen commnad
exports.api=functions.https.onRequest(app);


//endpoint
// http://localhost:5001/clone-f3de1/us-central1/api














// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
