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
                    <div>All four universities will conduct the Hackathon at their respective campuses.</div> 
                    </div>

                    <div className="para">
                        <div className="phasediv">
                        <div className="phase">PHASE2</div>
                        </div>
                    <div>Shortlisted teams from different universities in Phase 1 will participate in Phase 2 at Sector 62 campus of JIIT Noida. Accommodation for the selected teams from JUIT, JUET, and JUA will be provided at JIIT Sec 62 hostels. Tentatively, the Phase 2 will be organised at the beginning of Academic Year 2024-25.</div> 
                    </div>

                    <div className="para">
                        <div className="phasediv">
                        <div className="phase">PHASE3</div>
                        </div>
                    <div>Selected 50 teams from Phase 2 will participate in Phase 3. It is a 2 months long phase where shortlisted teams will develop/design the prototype and firm up the technical and business plan. If needed, teams may also be supervised by faculty/alumni/industry mentors.</div> 
                    </div>

                    <div className="para">
                        <div className="phasediv">
                        <div className="phase">PHASE4</div>
                        </div>
                    <div>Selected 30 teams will present technical and business plan for their Startup. Teams will be evaluated. There will be provision of upto Rs. 20 Lakhs funding for each team selected for funding.</div> 
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
