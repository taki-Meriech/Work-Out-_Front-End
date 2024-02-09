import React, { useState } from "react";
import axios from "axios";
import "./AddWorkout.css";

function AddWorkOut() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(0); // Initialize load and reps with numeric values
  const [reps, setReps] = useState(0);

  const addWorkout = async () => {
    if (title.trim() === "" || load <= 0 || reps <= 0) {
      alert("Fill in all the inputs with valid values");
      return;
    }


    try {
      const response = await axios.post("https://workoutbackend-wtr9.onrender.com", {
        Title:title,
        Load:load,
        Reps:reps,
      });

      console.log("Workout added successfully!", response);
      console.log('hello');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="TotaleAdd">
      <h2>Add a New workout</h2>
      <div className="form">
        <label htmlFor="">Exercise Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Load (in kg)</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(parseInt(e.target.value, 10))}
        />
        <label htmlFor="">Num of Reps</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(parseInt(e.target.value, 10))}
        />
        <button onClick={addWorkout} style={{ cursor: "pointer" }}>
          Add Work-Out
        </button>
      </div>
    </div>
  );
}

export default AddWorkOut;
