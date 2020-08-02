const router = require("express").Router();
const db = require("../models");


// const { Workout } = require("../models");

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(allWorkouts => {
            res.json(allWorkouts);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort( {_id: -1} )
    .then(lastWorkout => {
        res.json(lastWorkout);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    const myId = req.params.id;
    const data = req.body;
    db.Workout.findOneAndUpdate(
        {_id: myId},
        {
            $push: {exercises: data},
            $set: {day: new Date()},
            $inc: {totalDuration: data.duration}
        },
        {new: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });
})

module.exports = router;