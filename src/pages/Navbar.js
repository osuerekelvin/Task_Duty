// import React from "react"
import React, { useRef } from 'react'
import './Narbar.css';
import { Link } from "react-router-dom";
import Logo from '../images/Logo.svg'
import Kelvin from '../images/Kelvin.jpeg'
import Ellipse from '../images/Ellipse.svg'

const Navbar = ({text1, text2}) => {
    const dropdownRef = useRef()
    const div2Rf = useRef()
    const div1Rf = useRef() 
    const div3Rf = useRef()

    const handleDrop = ()=>{
        if(dropdownRef.current.style.display === 'block'){
            dropdownRef.current.style.display = 'none'
            
            div2Rf.current.style.opacity = 1
            console.log('First')
        }else{
            dropdownRef.current.style.display = 'block'
            div2Rf.current.style.opacity = 0
            div2Rf.current.style.transform.translate = 100


            console.log('Second')
        }
      

    }

  return (
    <div className='wrapper1'>
        <div className='firstdiv'>
        <Link to='/'>
        <img src={Logo} alt="" />
        </Link>
        
        <div className='secondiv'>
            <h3>
                <Link className='link1' to="/create">
                    {text1}
                </Link>
            </h3>
            <h3>
                <Link className='link22' to='/tasks'>
                    {text2}
                </Link>
            </h3>
            <img className='Naseer' src={Kelvin} alt="" />
           
        <img className='Ellipse' src={Ellipse} alt="" />
        </div>
            <div ref={dropdownRef} className='dropdown'> 
                <h3>
                <Link className='link1' to="/create">
                    {text1}
                </Link>
                </h3>
                <h3>
                <Link className='link22' to='/tasks'>
                    {text2}
                </Link>
                </h3>
            </div>
        <div onClick={handleDrop} className='hamburger'>
                <div ref={div1Rf}></div>
                <div ref={div2Rf}></div>
                <div ref={div3Rf}></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar