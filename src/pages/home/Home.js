import React from "react"
import "../home/Home.css";
import bro from "../../images/bro.svg"
import { Link } from "react-router-dom"
import Navbar from "../Navbar";


const Home = () => {
  return (
    <div>
      <Navbar text1={'New task'} text2={'All task'} />
      <div className="div01">
        <div className="div02">
        <h1 className="h11">Manage your Tasks on</h1>
      <h1 className="h12">TaskDuty</h1>
      <p className="p11">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nulla
        voluptate corrupti velit facilis, omnis accusantium libero totam, aut
        cupiditate, ipsa deleniti neque sapiente ipsam pariatur asperiores
        placeat quae facere!
      </p>
      <button className="btn1"><Link className="link3" to='/tasks'>Go to My Tasks</Link></button>
        </div>
        <div className="div03">
            <img className="image_first" src={bro} alt="" />
        </div>
    </div>
    </div>
  );
};

export default Home;
