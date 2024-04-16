import './About.css';
import { Link } from 'react-router-dom';
import image from '../../assets/exploreProgramme1.png'

const About = () => {
    return (
        <>
            <div className='aboutsection' id="about">
                <div className="aboutheading">&lt;what is ridehack?&gt;</div>
                <div className="aboutcontent">
                    <div className="para">
                        <div className="phasediv">
                        <div className="phase">PHASE1</div>
                        </div>
                    <div>Hackathon at respective campuses of jaypee Higher Education System.</div> 
                    </div>

                    <div className="para">
                        <div className="phasediv">
                        <div className="phase">PHASE2</div>
                        </div>
                    <div>Selected teams from pase 1 will participate at jiit 62. Special cash prizes for best teams from JIIT, JUIT, JUET, and JUA.</div> 
                    </div>

                    <div className="para">
                        <div className="phasediv">
                        <div className="phase">PHASE3</div>
                        </div>
                    <div>Top 50 teams from phase 2 will advance to phase 3 for probable funding</div> 
                    </div>

                    <div className="para">
                        <div className="phasediv">
                        <div className="phase">PHASE4</div>
                        </div>
                    <div>Selected 30 teams will present their plan to get funding of upto Rs 20 Lakhs if selected for funding.</div> 
                    </div>

                    <div className="register">
                        <a target="_blank" href="https://forms.gle/JTDosdQ1dwoCRcgu5" className='registertext'>Register Now</a>
                    </div>
                </div>
                {/* <div className="aboutimages">
                    <div className="image">
                        <img src={image} alt="image" />
                    </div>
                    <div className="image rightanimation">
                        <img src={image} alt="image" />
                    </div>
                    <div className="image">
                        <img src={image} alt="image" />
                    </div>
                    <div className="image rightanimation">
                        <img src={image} alt="image" />
                    </div>
                </div> */}
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}

export default About;
