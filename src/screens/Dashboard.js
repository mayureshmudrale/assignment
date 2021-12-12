import React from 'react'
import './Dashboard.css'
import flag from '../Assets/IMG/Screen Shot 2020-09-24 at 3.34.23 PM@2x.png'
import bgpanel2 from '../Assets/IMG/Headers/header-4.png'
import overlayimage from '../Assets/IMG/Group 9@2x.png'
import thumnail from '../Assets/IMG/thumbnail.png'
import follower from '../Assets/IMG/ic-followers@2x.png';
import arrow_right from '../Assets/IMG/Arrow---Down-2 - Iconly---Bold.png';
import icevents from '../Assets/IMG/ic-events.png';
import assignment from '../Assets/IMG/ic-assignments.png';
import Avatar from 'react-avatar';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

function Dashboard() {
    const  items=['Item 1','Item 2'];
    const percentage = 40;
    return (
        <div className="dashboard">
            <div className="dashboard_panel1">
                <div className="dashboard_header">
                    Dashboard
                </div>
                <div className="dashboard_Subject">
            
                
                    <text className="dashboard__subjectLineOne">
                        Currently Learning
                    </text>
                    <div>
                        <div className="dashboard__subjectLineTwo">
                            <img  src={flag} alt="flag" />
                            <text>English</text>
                        </div> 
                    </div>
               
            
                </div>
            </div>
            <div className="dashboard_panel2">
                <div className="head_image" >
                
                    <img  src={overlayimage} alt="bgpanel2" />
                    <div className="bgpanel2_">
                        <span className="bgpanel_lineone">
                            Welcome back, Clarance
                        </span>
                        <span className="bgpanel_linetwo">
                            Ta-da!! your are up to date .
                        </span>

                    </div>
                
                     
                </div>
                
                
            </div>
            <div className="dashboard_panel3">
                <div className="header_events">
                           <text>Events</text>  
                </div>
                <div className="panel_2_events">
                    <div className="calender">
                        <div className="prev">
                            <div className="prev_arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span className="prev_">
                                Youth Talent & Education
                            </span>
                        </div>
                        
                        <div className="next">
                        <span className="prev_">
                                May , 20 
                        </span>
                        <div className="next_arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        </div>

                        </div>
                        
                    </div>

                    <div className="Today_events">
                        <div className="header_today_event">
                            <span className="Events_today">
                                EVENTS TODAY
                            </span>
                            <div className="separator"></div>
                        </div>
                        <div className="Events">
                        {   
                                items.map((d)=>{
                                    return(
                                        <div className="event_1">
                                            <img src={thumnail} alt='event'/>
                                            <div className="event_time_name">
                                                <span className="lineone_event">
                                                10:30 AM
                                                </span>
                                                <span className="linetwo_event">
                                                Webinar:the basics of ...

                                                </span>


                                            </div>
                                        </div>
                                    )

                                    
                                })
                        }
                        </div>
                        
                    </div>
                    
                   


                </div>
                
                <div className="dashboard_panel3">
                    <div className="activity">
                        <div className="activity_1">
                            <span className="activity_header">
                                Activity
                            </span>
                            <div className="activity_1_separator"></div>
                            <div className="activity_arrow_next">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>

                            </div>
                        </div>
                        <div className="activity_01">
                            <img src={follower} alt="follower"/>
                            <div className="follower_msg">
                            <span className="follower_text">
                                You have 5 new followers including 
                            </span>
                            <span className="follower_name">
                                Kathryn Crawford 
                            </span>
                            <span className="follower_text">
                                and 
                            </span>
                            <span className="follower_name">
                                Piper Shaw 
                            </span>
                            </div>
                            <div className="arrow_right">
                                <img src={arrow_right} alt="arrow_right"/>
                            </div>
                            


                        </div>
                        <div className="activity_02">
                            <img src={icevents} alt="icevents"/>
                            <div className="follower_msg">
                            <span className="follower_text">
                                 3 new events were added to your calendar.
                            </span>
                            
                            
                            </div>
                            <div className="arrow_right">
                                <img src={arrow_right} alt="arrow__right"/>
                            </div>
                            


                        </div>
                        <div className="activity_02">
                            <img src={assignment} alt="assignment"/>
                            <div className="follower_msg">
                            <span className="follower_text">
                               you have 3 pending readings to complete. 
                            </span>
                            
                            </div>
                            <div className="arrow_right">
                                <img src={arrow_right} alt="arrow_right"/>
                            </div>
                            


                        </div>

                        

                    </div>
                </div>
                <div className="progress">
                   <div className="progress_bar_container">
                       <div className="progress_title">
                            <text>Progress Overview</text>
                       </div>
                       <div className="circular_progress_bar">
                            <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                            textColor: "white",
                            pathColor: "orange",
                            trailColor: "gold",
                            textSize:20,
                            })}
                        />
                       </div>
                       <div className="progress_left_tobe_completed">
                            <div className="completed">
                                <div className="lineone_">
                                    <div className="completed_circle"></div>
                                    <text>completed</text>
                                </div>
                                <div className="linetwo_">
                                    <span className="numberof_hr">
                                        20
                                    </span>
                                    <span className="hours">
                                        hours
                                    </span>

                                </div>
                            </div>
                            <div className="progress_separator"></div>
                            <div className="left">
                            <div className="lineone_">
                                    <div className="left_circle"></div>
                                    <text>Left to go</text>
                                </div>
                                <div className="linetwo_">
                                <span className="numberof_hr">
                                    30
                                </span>
                                <span className="hours">
                                    hours
                                </span>
                                </div>
                            </div>
                       </div>



                   </div>
                   <div className="progress_container ">
                        <div className='progress_container_level_1'>
                            <span className="progress_container_level_1_title">Progress</span>
                            <div className="progress_container_level_1_separator"></div>
                        </div>
                        <div className="progress_container_level_2">
                            <div className="subjects">
                                <div className="subjects_div1" >
                                    <div className="subjects_div1_lineone">
                                        Total
                                    </div>
                                    <div className="subjects_div1_linetwo">
                                        Webinars
                                    </div>

                                </div>
                                <div className="subjects_div2">
                                    9
                                </div>
                            </div>
                            <div className="subjects">
                                <div className="subjects_div1" >
                                    <div className="subjects_div1_lineone">
                                        Pending 
                                    </div>
                                    <div className="subjects_div1_linetwo">
                                        Assignments
                                    </div>

                                </div>
                                <div className="subjects_div2">
                                    0
                                </div>
                            </div>
                            <div className="subjects">
                                <div className="subjects_div1" >
                                    <div className="subjects_div1_lineone">
                                        Total
                                    </div>
                                    <div className="subjects_div1_linetwo">
                                        Units
                                    </div>

                                </div>
                                <div className="subjects_div2">
                                    5
                                </div>
                            </div>
                            <div className="subjects">
                                <div className="subjects_div1" >
                                    <div className="subjects_div1_lineone">
                                        Total
                                    </div>
                                    <div className="subjects_div1_linetwo">
                                        Readings
                                    </div>

                                </div>
                                <div className="subjects_div2">
                                    14
                                </div>
                            </div>
                            <div className="subject_video" >
                                <div className="subjects_div1" >
                                    <div className="subjects_div1_lineone_video">
                                        Total
                                    </div>
                                    <div className="subjects_div1_linetwo_video">
                                        Videos
                                    </div>

                                </div>
                                <div className="subjects_div2_video">
                                    5
                                </div>
                            </div>
                            
                        </div>
                        <div className="confirm_account">
                            <span className="confirm_account_text_1">
                                confirm your account details.
                            </span>
                            <span className="confirm_account_text_2">
                                Please Confirm your email and phone number.
                            </span>

                        </div>

                   </div>
                

                </div>
                



            </div>
        </div>
    )
}

export default Dashboard
