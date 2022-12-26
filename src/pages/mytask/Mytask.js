import "./Mytask.css";
import Icon from "../../images/icon.svg";
import Delete from "../../images/Delete.svg";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Mytask = () => {
  const [tasks, setTasks] = useState([]);
  const url = "https://taskdd.onrender.com/tasks";

  const redirect = useNavigate();



  const handleDelete = (id) => {
    fetch(`https://taskdd.onrender.com/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      redirect("/tasks")
    })
  }

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const { data } = result;
        console.log(data);
        setTasks(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar text1={'New Task'} />

      <div className="flexdiv">
        <div>
          <h1>My Tasks</h1>
        </div>
        <div>
          <p>+ Add New Task</p>
        </div>
      </div>
      {tasks.map((task) => {
        const { _id, title, description, tag } = task;
        return (
          <div className="whole" key={_id}>

            <div className="wrapper_div">
              <div className="flexdiv1">
                <div>
                  <h5>{tag}</h5>
                </div>
                <div className="flex_div2">
                  <button className="flex_btn">
                    <img className="vec" src={Icon} alt="" />
                    <Link className="link4" to={`/edit/${_id}`}>Edit</Link>
                  </button>
                  <button onClick={() => handleDelete(_id)} className="flex_btn1">
                    <img className="vec" src={Delete} alt="" />
                    Delete
                  </button>
                </div>
              </div>
              <hr />
              <div className="last_div">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <div className="less">

              </div>

            </div>
          </div>
        );
      })}
      <h3>
        <a href="">Back To Top</a>
      </h3>
    </div>
  );
};

export default Mytask;
