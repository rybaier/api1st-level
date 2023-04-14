const express = require("express");
const router = express.Router();
const Weapon = require("../models/Weapons");

//Get all the weapons
router.get("/", async (req, res, next) => {
    try{
        const weapons = await Weapon.find({});
        res.json(weapons); 
    } catch (err) {
        next(err);
    }
});

//Get one weapon by id
router.get("/:id", async (req, res, next) => {
    try {
        const oneWeapon = await Weapon.findById(req.params.id);
        res.json(oneWeapon);
    } catch (err){
        next(err);
    }
});

//Add a new weapon based on the body of the request
router.post("/", async (req, res, next) => {
    try {
        const newWeapon = await Weapon.create(req.body);
        res.status(201).json(newWeapon);
    } catch (err) {
        next(err);
    }
});

//Update a weapon, specify which one by ID
router.put("/:id", async (req, res, next) => {
    try {
        const weaponToUpdate = await Weapon.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(weaponToUpdate);
    } catch (err) {
        next(err);
    }
});

//Delete a weapon, specify which one by ID
router.delete("/:id", async (req, res, next) => {
    try {
        const weaponToDelete = await Weapon.findByIdAndDelete(
            req.params.id
        );
        if(weaponToDelete) {
            res.sendStatus(204); 
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;