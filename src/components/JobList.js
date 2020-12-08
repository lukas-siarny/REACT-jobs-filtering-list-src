import React from "react";
import JobItem from "./JobItem";

export const JobList = ({jobs, onTabletClick}) => {
    
    return(
        <div className="container">
            <section className="joblist">
                {jobs.map(job => (
                    <JobItem 
                        job={job} 
                        key={job.id} 
                        onTabletClick={onTabletClick} 
                    />
                ))}
            </section>   
        </div>     
    )
}

export default JobList;