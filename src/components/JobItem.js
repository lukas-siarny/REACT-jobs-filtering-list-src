import React from "react";
import JobItemButton from "./JobItemButton";

export const JobItem = ({job, onTabletClick}) => {
    const { company, date, newItem, featured, title, type, place, role, level, languages, tools, logo } = job;

    const languagesButtons = languages.length !== 0 ? languages.map(lang => <JobItemButton text={lang} onTabletClick={onTabletClick} key={lang} />) : "";

    const toolsButtons = tools.length !== 0 ? tools.map(tool => <JobItemButton text={tool} onTabletClick={onTabletClick} key={tool} /> ) : "";
    const levelButton = level ? <JobItemButton text={level} onTabletClick={onTabletClick} /> : "";
    const roleButton = role ? <JobItemButton text={role} onTabletClick={onTabletClick} /> : "";

    const jobCardClassNames = `job-card ${featured ? "job-card--featured" : ""}`;

    return(
        <div className={jobCardClassNames}>            
            <div className="job-card__logo" dangerouslySetInnerHTML={{__html: logo}} />
            <div className="job-card__text-content-wrapper">
                <div className="job-card__info">
                    <div className="job-card__info-primary">
                        <span className="job-card__company-name">{company}</span>
                        {newItem ? <span className="job-card__new-item">New!</span> : ""}
                        {featured ? <span className="job-card__featured">Featured</span> : ""}
                    </div>
                    <h2 className="job-card__title">
                        <a href="">{title}</a>
                    </h2>    
                    <div className="job-card__info-secondary">
                        <span className="job-card__date">{date}</span>
                        <span className="job-card__type">{type}</span>
                        <span className="job-card__place">{place}</span>
                    </div>                    
                </div>    
                <div className="job-card__tablets">
                    {languagesButtons}
                    {toolsButtons}
                    {levelButton}
                    {roleButton}
                </div>    
            </div>            
        </div>
    )
}

export default JobItem;