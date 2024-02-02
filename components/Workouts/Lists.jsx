import "./list.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";

function Lists() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getWorkout = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log("error to get data", error);
      }
    };
    getWorkout();
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        width: "100%",
      }}
    >
      {data.map((item, index) => (
        <div key={index} className="Listes">
          <strong>{item.Title}</strong>
          <p>Load(kg): {item.Load}</p>
          <p>Number Of Reps: {item.Reps}</p>
          <p>{formatDistanceToNow(new Date(item.createdAt),{addSuffix:true})}</p>
          <button className="Delete" onClick={()=>{HandelDelete(item._id)}}> <MdOutlineDelete /> </button>
        </div>
      ))}
    </div>
  );
}
 const HandelDelete =(id)=>{
  axios.delete(`http://localhost:4000/api/${id}`)
 }

export default Lists;
