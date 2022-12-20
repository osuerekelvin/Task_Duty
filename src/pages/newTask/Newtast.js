
import "./Newtask.css"
import arrow from "../../images/arrow.svg"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";


const Newtask = () => {
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const url = "https://taskmanagerapi.onrender.com/tasks"
  const redirect = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { tag, title, description }
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      redirect("/")
    })

  };
  return (
   <div>
    <Navbar  text2={'All tasks'}/>
     <div className='parent'>
        <div className='child1'>
            <img src={arrow} alt="" />
            <h1 className='h111'>New Task</h1>
        </div>
       <form onSubmit={handleSubmit}>
       <fieldset className='inp_legend1' >
          <textarea name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} cols="30" rows="10" className="inp"placeholder="E.g Project Defense, Assignment" ></textarea>
            <legend><span>Task Title</span> </legend>
        </fieldset>
        <fieldset className='inp_legend2' >
          <textarea name="" id="" value={description}onChange={(e) => setDescription(e.target.value)} cols="30" rows="10" className="inp2" placeholder="Briefly describe your task..."></textarea>
            <legend><span>Description</span></legend>
        </fieldset>
        <fieldset className='inp_legend1' >
          <textarea name="" id="" value={tag} onChange={(e) => setTag(e.target.value)} cols="30" rows="10" className="inp"></textarea>
            <legend><span>Tags</span> </legend>
        </fieldset>
       </form>
        
        <button className="done_btn" onClick={handleSubmit} type="submit">DONE</button>
        <h3><a href="">Back To Top</a></h3>
      
        
    </div>
   </div>
  )
}

export default Newtask