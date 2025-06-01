import React from "react";


function Education() {
    return (
        <div class="container py-5">
            <div class="main-timeline">
                <div class="timeline left">
                    <div class="education-card">
                        <div class="card-body p-4">
                            <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '1rem'}}>
                                <span>2024 - 2026</span>
                                <div>
                                    <span style={{textTransform: 'uppercase'}}>Master of Technology in Information Security</span><br />
                                    <span>VIT Vellore</span>
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="timeline right">
                    <div class="education-card">
                    <div class="card-body p-4">
                            <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '1rem'}}>
                                <span>2018 - 2022</span>
                                <div>
                                    <span style={{textTransform: 'uppercase'}}>Bachelor Of Technology in Computer Science and Engineering</span><br />
                                    <span>MIT Arts, Design and Technology University</span>
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;