import './Team.css'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Detail from './Detail';

const Team = () => {
    return (
        // <div className='team'>
        //     <div className='memberHeading'>TEAM MEMBERS</div>
        //     <div className="teamsection">
        //     {
        //         Detail.map((item, index) => (
        //             <div className="member-card" key={index}>
        //                 <div className="card-content">
        //                     <img src={item.img} alt="Profile Picture" className="profile-picture" />
        //                     <div className='member-detail'>
        //                         <div className="member-name">{item.name}</div>
        //                         <h3 className='member-role'>{item.role}</h3>
        //                         <div className="social-icons">
        //                             <div><a href={item.social[0]}><FaGithub /></a></div>
        //                             <div><a href={item.social[1]}><FaDiscord /></a></div>
        //                             <div><a href={item.social[2]}><FaLinkedin /></a></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))
        //     }
        //     </div>
        // </div>
        <>
         <div className='codeofconduct'>
            <div className="codheading">&lt;guidelines&gt;</div>
            <div className="codcontent">
            <div className="brochurebutton">
            {/* <button className="brochureButtonDownload"><a href="https://drive.google.com/file/d/1HYrVH3nXDyVtFgqvpyAC2GZOdzx8-CgP/view?usp=sharing">&lt;download brochure&gt;</a></button> */}
            </div>
                <div>
                RIDE (Research, Innovation, Development and Entrepreneurship) at JIIT Noida presents RIDE-Hack’24. This hackathon is open for students of all four universities of Jaypee Higher Education Systems (JIIT Noida, JUIT Waknaghat, JUET Guna, and JU Anoopsahar). Students in a team of maximum 6 members will participate in RIDE-Hack’24.
                </div>
                <div>
                <span className='phases'>Theme of RIDE-Hack’24 is</span> “Build your own Startup”
                </div>
                <div>
                <span className='phases'>Team Size:</span> Maximum 6 Students
                </div>
                <div>
                <span className='phases'>Problem Statement:</span> Students need to propose their own ideas for their startups from any domain
                </div>
                <div className="phases">
                RIDEHack’24 will be organised in following phases:
                </div>
                <div>
                <span className='phases'>Phase 1:</span> All four universities will conduct the Hackathon at their respective campuses.
                </div>
                <div>
                <span className='phases'>Phase 2:</span> Shortlisted teams from different universities in Phase 1 will participate in Phase 2 at Sector 62 campus of JIIT Noida. Accommodation for the selected teams from JUIT, JUET, and JUA will be provided at JIIT Sec 62 hostels. Tentatively, the Phase 2 will be organised at the beginning of Academic Year 2024-25.
                </div>
                <div>
                <span className='phases'>Phase 3:</span> Selected 50 teams from Phase 2 will participate in Phase 3. It is a 2 months long phase where shortlisted teams will develop/design the prototype and firm up the technical and business plan. If needed, teams may also be supervised by faculty/alumni/industry mentors.
                </div>
                <div>
                <span className='phases'>Phase 4:</span> Selected 30 teams will present technical and business plan for their Startup. Teams will be evaluated. There will be provision of upto Rs. 20 Lakhs funding for each team selected for funding.
                </div>

                
               


            </div>
        
        </div>
        </>
    )
}

export default Team;