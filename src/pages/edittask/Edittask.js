
import './Edittask.css'
import arrow from "../../images/arrow.svg"
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Edittask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const { id } = useParams()
  const url = `https://taskdd.onrender.com/tasks/${id}`;
  const redirect = useNavigate()
  const getData = () => {
    fetch(url).then((res) => res.json()).then((result) => {
      const { data } = result;
      setTitle(data.title)
      setDescription(data.description)
      setTag(data.tag)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    const data = { title, description ,tag}
    console.log(data);
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),

    }).then(() => {
      redirect('/tasks')
    })} 

  return (
    <div>
      <Navbar text2={'All tasks'} />
        <div className='parent'>
        <div className='child1'>
            <img src={arrow} alt="" />
            <h1 className='h111'>  Edit Task </h1>
        </div>
        <form onSubmit={handleUpdate}>
       <fieldset className='inp_legend1' >
          <textarea name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} cols="30" rows="10" className="inp"></textarea>
            <legend><span>Task Title</span> </legend>
        </fieldset>
        <fieldset className='inp_legend2' >
          <textarea name="" id="" value={description}onChange={(e) => setDescription(e.target.value)} cols="30" rows="10" className="inp2"></textarea>
            <legend><span>Description</span></legend>
        </fieldset>
        <fieldset className='inp_legend1' >
          <textarea name="" id="" value={tag} onChange={(e) => setTag(e.target.value)} cols="30" rows="10" className="inp"></textarea>
            <legend><span>Tags</span> </legend>
        </fieldset>
       </form>
        <button className='done_btn'onClick={handleUpdate} >DONE</button>
        <h3><a href="">Back To Top</a></h3>
        
    </div>
    </div>
  )
}

export default Edittask