const express = require('express')
const db=require('../models');

 
module.exports = {
    create : async(req, res) =>{

        console.log(req.body.name)
        console.log(req.body.email)
        console.log(req.body.contact_nunber)
        console.log(req.body.role)
        
        const data = {
            email: req.body.email, 
            password: req.body.password,
            name: req.body.name,
            role: req.body.role,
            contact_nunber: req.body.contact_nunber
        }
       await db.User.create(data)
        res.send({message:"success from controller", status:200,data:data})
    },

    edit:(req,res) =>{
        console.log(req.body)
        res.send({message:"success from controller edit" })
    },
    getallUser:async(req,res) =>{
        const allUser = await db.User.findAll()
        res.send({message:"success from controller", status:200,data:allUser})
    },
    delete:(req,res) =>{
        console.log(req.body)
        res.send({message:"success from controller edit" })
    }
}