var db = require("../models");

module.exports = {

    api: function(app) {
        // Used by api.js to get last workout
        app.get("/api/workouts", (req, res) => {
            db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
        });
        
        // Used by api.js to add an exercise to a workout
        app.put("/api/workouts/:id", ({body}, res) => {
            const workoutId = body.params.id;
            
            db.Workout.update({body})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
        });
    }
};