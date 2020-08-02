const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   day: {
       type: Date,
       default: Date.now()
   },
   exercises: [
       {
           type: {
            type: String,
            required: "Choose a workout type"
           },
           name: {
               type: String,
               trim: true,
               required: "Enter exercise name"
           },
           duration: {
                type: Number,
                required: "Enter duration in minutes"
           },
           weight: {
               type: Number
           },
           sets: {
               type: Number
           },
           distance: {
               type: Number
           }
       }
   ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
