import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Puzzler from '../components/Puzzler.jsx'

export default function Home() {
  const [showPuzzler, setPuzzler] = useState(false)

  const puzzlerClick = () => {
      setPuzzler(!showPuzzler)

  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Louisa Johnston</title>
        <link rel="icon" href="/portfolio_favicon_squareheavy.png" />
      </Head>
      <div id="main">
        <h1 className="hide">Louisa Johnston</h1>

        <div className="top-anchor" id="about">
          <div>
            <p><span id="hello">Hello!</span> I am a full-stack developer with 
            particular interest in ventures oriented towards social equity 
            and the arts.</p>   
          </div>
          <div>
            <p>I am passionate about breaking problems down into their 
            smallest parts in order to build successful interventions. 
            My background in nonprofit marketing has taught me the 
            value of metrics-driven work, creative workarounds, and 
            constructing projects from the user’s perspective.</p>
          </div>
          <div>
            <p>In my spare time, I enjoy caring for my brood of houseplants, 
            employing the phone-a-friend approach to crossword solving, and 
            Vincent Price movies.</p>
          </div>
        </div>

        <div className="anchor" id="languages">
          <h2>Skills</h2>
          
          <h3 className="less-flush web-edge">Tech Stack</h3>
          <p className="flush">Python, JavaScript, CSS, HTML, SQL, Express.js, 
            Next.js, EJS, node.js, PostgreSQL, React, Axios, Mongoose, and MongoDB</p>
      
          <h3 className="even-less-flush">Misc. Know-How</h3>
          <p className="flush">Heroku, Pygame, Adobe Photoshop, Adobe InDesign, 
            Adobe Premiere, Wordpress, Squarespace, NationBuilder, Google Analytics, 
            Cargo.site, and Canva</p>
        </div>

        <div className="anchor" id="projects">
          <h2>Projects</h2>

          <div>
            <a href="https://louisajohnston.github.io/" target="_blank"><h3 className="even-less-flush">Word-cross’d Puzzler</h3></a>
            <h4 className="italic flush">JavaScript, CSS, and HTML</h4>
            <div>
              <div className= "details" id="puzzle-button" onClick={ puzzlerClick }>{ showPuzzler ? <a>Hide Details</a> : <a>Show Details</a> }</div>
              { showPuzzler ? <Puzzler /> : null }
            </div>
          </div>

          <div>
            <a href="https://flickpicks-project2.herokuapp.com/" target="_blank"><h3 className="even-less-flush">Flick Picks</h3></a>
            <h4 className="italic flush">EJS, Express.js, node.js, Axios, and PostgreSQL</h4>
            <div>
              <ul className="less-flush">
                <li>Created a web app using node.js and Express.js with the ability for users to create an account or login with encrypted cookie storage and password hashing</li>
                <li>Applied EJS templates and Axios to render information from a third-party film API and allow users to save movies to personal lists</li>
                <li>Stored multiple user inputs (login information and movie comments/reviews) as database information fields through PostgreSQL with the ability for users to update them directly</li>
              </ul>
              <a href="https://github.com/LouisaJohnston/Flick_Picks" target="_blank" className="repo less-flush offset">Flick Picks Repo</a>
            </div>
          </div>
        </div>

          <div>
            <h3 className="less-flush">Bot Noggle</h3>                                                                                                                                                        
            <h4 className="italic flush">Python, Pygame</h4>
            <div>
                <ul className="less-flush">
                  <li>Built a version of Boggle using Python and Pygame to render a 4x4 grid from a two-dimensional array of randomized letters corresponding to real Boggle dice</li>
                  <li>Allowed users to check whether a given word exists in adjacent grid tiles (up, down, diagonally, forwards, and backwards)</li>
                  <li>Inserted dictionary information into a trie data structure to check against user input and optimize the project's time complexity</li>
                </ul>
                <a href="https://www.youtube.com/watch?v=MCWT7-8a7iE&ab_channel=LouisaJohnston" target="_blank" className="repo less-flush offset block">See Bot Noggle in Action</a>
                <a href="https://github.com/LouisaJohnston/botNoggle" target="_blank" className="repo flush offset">Bot Noggle Repo</a>
              </div>
          </div>

          <div>
            <a href= "https://pawtel-application.herokuapp.com/" target="_blank"><h3 className="even-less-flush">Paw-Tel (Group Project)</h3></a>
            <h4 className="italic flush">React, Mongoose, MongoDB, and MERN auth</h4>
            <div>
              <ul className="less-flush">
                <li>Designed a full-stack MERN app using complex authorization routes allowing users to register as either a pet owner or a pet hotel owner to help pet owners connect with pet hotels</li>
                <li>Employed React components to render information from a local API pertaining to user-specific pets or hotels, depending on the authorization route, with the ability to update and delete data fields</li>
                <li>Saved user input through server-side Mongoose database using MongoDB</li>
              </ul>
              <a href="https://github.com/LouisaJohnston/Paw-tel" target="_blank" className="repo less-flush offset block">Paw-Tel Server-Side Repo</a>
              <a href="https://github.com/LouisaJohnston/pawtel-client" target="_blank" className="repo flush offset">Paw-Tel Client-Side Repo</a>
            </div>
          </div>
      </div>
    </div>  
  )
}
