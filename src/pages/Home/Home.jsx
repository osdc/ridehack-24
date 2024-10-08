import React from 'react'
import './Home.css'
import Spline from '@splinetool/react-spline';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  function onMouseDown(e) {
    navigate('/team');
    const name = e.target.name;
  }
  return (
    <div className='homepage'>
      {/* <div className="event">OSDHack'24</div>
      <div className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia voluptates aliquam est nobis, sequi perferendis illum odio dolorum sunt?</div>
      <div className="button">
        <button className="register">
          <Link to='/register'>Register Now</Link>
        </button>
        <button className='cod'>
          <Link to='/cod'>Learn More</Link>
        </button>
      </div> */}

      <Spline className='spline' scene="https://prod.spline.design/B4gEdCxzZMigeDFK/scene.splinecode" onMouseDown={onMouseDown} />
      
      <div className="text-behind">
        <img className='osdhacklogo' src="/images/ridehack24_logo.png" alt="" />
      </div>

      <div className="jiitlogo">
        <img className='jiit' src="/images/jiit.png" alt="" />
      </div>
      <div className="hbutton">
        <Link to='/brochure'>&lt;guidelines&gt;</Link>
        {/* <a target="_blank" href="https://forms.gle/JTDosdQ1dwoCRcgu5">&lt;register-now&gt;</a> */}
      </div>
    </div>
  )
}

export default Home
