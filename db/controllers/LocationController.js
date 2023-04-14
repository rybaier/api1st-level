const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

//Get all the weapons
router.get("/", async (req, res, next) => {
    try{
        const myLocation = await Location.find({});
        res.json(myLocation); 
    } catch (err) {
        next(err);
    }
});

//Get one weapon by id
router.get("/:id", async (req, res, next) => {
    try {
        const oneLocation = await Location.findById(req.params.id);
        res.json(oneLocation);
    } catch (err){
        next(err);
    }
});

//Add a new weapon based on the body of the request
router.post("/", async (req, res, next) => {
    try {
        const newLocation = await Location.create(req.body);
        res.status(201).json(newLocation);
    } catch (err) {
        next(err);
    }
});

//Update a weapon, specify which one by ID
router.put("/:id", async (req, res, next) => {
    try {
        const locationToUpdate = await Location.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(locationToUpdate);
    } catch (err) {
        next(err);
    }
});

//Delete a weapon, specify which one by ID
router.delete("/:id", async (req, res, next) => {
    try {
        const locationToDelete = await Location.findByIdAndDelete(
            req.params.id
        );
        if(locationToDelete) {
            res.sendStatus(204); 
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;