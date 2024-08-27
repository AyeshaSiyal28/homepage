import { useState } from 'react'
import './App.css'
import Card from './component/card'
// import {motion} from 'framer-motion'
// import  {useGSAP} from '@gsap/react'
// import gsap from 'gsap'
import icon from '../src/images/icon.svg'
import github from '../src/images/github.png'
import linkedin from '../src/images/linkedin.png'
import twitter from '../src/images/twitter.png'
import html from '../src/images/html.png'
import js from '../src/images/js.png'
import react from '../src/images/atom.png'
import about from '../src/images/about.svg'
import first from '../src/images/1st.jpeg'
import second from '../src/images/2nd.jpeg'
import third from '../src/images/3rd.jpeg'
import www from '../src/images/www.png'
import {motion} from 'framer-motion'
import { FaFacebook,FaInstagramSquare } from "react-icons/fa";
function App() {
  const [count, setCount] = useState(0)
    
  //  useGSAP(()=>{
  //     gsap.to(".logo",{

  //     })
  //  })
  return (
    <>
       <div id="root">
        <nav>
          <motion.div
          initial={{opacity:0,y:-100}}
          animate={{opacity:1,y:0}}
          transition={{duration:1,delay:0.5}}
          className="nav-bar">
              <div className="logo">
                  <h1>Web<span>Dev</span></h1>
              </div>
              <div className="menu">
                  <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                  </ul>
              </div>
              </motion.div>
       
       <div className="container">
            <div className="info">
                <h1>I'm John</h1>
                <h4>Front-End Developer</h4>
                 <p>Turning Ideas Into Interactive Reality</p>
                 <div className="icons">
                  <img src={github} alt="" />
                  <img src={linkedin} alt="" />
                  <img src={twitter} alt="" />
                  <FaFacebook />
                  <FaInstagramSquare />
                 </div>
            </div>
            <div className="image">
              <img src={icon} alt="" />
            </div>
       </div>
       </nav>
       <section id='Skills'> 
              <div className="heading">
                <h1>Tech Stack</h1>
                <hr />
              </div>
            <div className="skilled">
                  <motion.div 
                  initial={{scale:0,x:'-300px'}}
                  whileInView={{scale:1,x:'0px'}}
                  transition={{duration:1}}
                  className="lang">
                    <div className="web">
                    <img src={html} alt="" />
                    </div>
                       <h4>HTML&CSS</h4>
                      <p>Highly skilled in HTML & CSS, adeptly crafting visually <br /> appealing and responsive websites for optimal user <br /> experiences.</p>
                  </motion.div>


                  <motion.div
                  initial={{scale:0,y:'-100px'}}
                  whileInView={{scale:1,y:'0px'}}
                  transition={{duration:1}}
                  className="lang">
                    <div className="web">
                    <img src={js} alt="" />
                    </div>
                    <h4>Javascript</h4>
                   <p>Expertise in JavaScript, building interactive and <br /> dynamic web applications with a focus on seamless  <br />user interactions and functionality</p>
                  </motion.div>


                  <motion.div
                  initial={{scale:0,x:'50px'}}
                  whileInView={{scale:1,x:'0px'}}
                  transition={{duration:1}}
                  className="lang">
                    <div className="web">
                    <img src={react} alt="" />
                    </div>
                    <h4>React</h4>
                   <p>Advanced proficiency in React, developing efficient <br /> and interactive front-end applications with a strong <br />emphasis on component-based architecture.</p>
                  </motion.div>
              </div>   
       </section>
       <section id='About'>
            <div className="about">
              <img src={about} alt="" />
            </div>
            <div className="code">
              <h1>Code And Coffee</h1>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores itaque doloribus asperiores dolorum quas voluptates distinctio, porro beatae quam provident libero animi totam, praesentium voluptatem corrupti dignissimos ipsum accusantium!</p>
            </div>
       </section>
       <section id='Projects'>
       <div className="heading">
                <h1>Web Creations</h1>
                <hr />
              </div>
            <div className="projects">
            <Card title="Fisrt Project"  imgSrc={first}  imgsrc={www} Imgsrc={github}/>
            <Card title='Second Project' imgSrc={second} imgsrc={www} Imgsrc={github}/>
            <Card title='Third Project' imgSrc={third} imgsrc={www} Imgsrc={github}/>
            </div>
       </section>
       </div>
    </>
  )
}

export default App
