import './Timeline.css'
import logo from '../../assets/osdhack24.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Timeline = () => {
    useEffect(() => {
        AOS.init({ offset: 140 });
    }, [])
    return (
      <>
        <div className="timelinesection grid-bg ba-grid anim">
          <div className="inner"></div>
          <div className="timeline-heading">&lt;timeline&gt;</div>
          <div className="timeline">
            <div className="container left-container" data-aos="fade-in">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-left">
                <h2>28th September 2024</h2>
                <p>10AM onwards</p>
                <p>Welcome and inaugration ceremony (attendance mandatory)</p>
                <p>Auditorium</p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
            <div className="container right-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-right">
                <h2>28th September 2024</h2>
                <p>11:30 AM to 1:30 PM</p>
                <p>First round of evaluation</p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
            <div className="container left-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-left">
                <h2>28th September 2024</h2>
                <p>1:30 PM to 2:30 PM</p>
                <p>Lunch</p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
            <div className="container right-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-right">
                <h2>28th September 2024</h2>
                <p>2:30 PM to 5:00 PM</p>
                <p>Discussion sessions for further improvement</p>
                <p>Auditorium</p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
            <div className="container left-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-left">
                <h2>28th September 2024</h2>
                <p>5:15 PM to 6:15 PM</p>
                <p>Tech talk from the experts</p>
                <p>Auditorium</p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
            <div className="container right-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-right">
                <h2>29th September 2024</h2>
                <p>9:30 AM</p>
                <p>Gathering of all participating teams</p>
                <p>Auditorium</p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
            <div className="container left-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-left">
                <h2>29th September 2024</h2>
                <p>10 AM to 11 AM</p>
                <p>Tech talk from the experts</p>
                <p>Auditorium</p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
            <div className="container right-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-right">
                <h2>29th September 2024</h2>
                <p>11:15 AM to 1:30 PM</p>
                <p>Startup Workshop</p>
                <p>Auditorium</p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
            <div className="container left-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-left">
                <h2>29th September 2024</h2>
                <p>1:30 PM to 2:00 PM</p>
                <p>Closing ceremony</p>
                <p>Auditorium</p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
            <div className="container right-container">
              {/* <img src={logo} alt="" /> */}
              <div className="text-box" data-aos="fade-right">
                <h2>29th September 2024</h2>
                <p>2:30 PM to 3:00 PM</p>
                <p>Lunch</p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Timeline;