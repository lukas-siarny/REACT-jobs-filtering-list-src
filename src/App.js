import './css/style.css';
import React, { useState } from "react";
import { jobs } from "./jobs";
import Header from "./components/Header";
import JobList from "./components/JobList";

const initalState = {
    jobs,
    filters: []
}

function App() {
    const [state, setState] = useState(initalState);

    const filteredJobs = state.jobs.filter(job => {
        const languagesFilter = job.languages.filter(lang => state.filters.includes(lang)).length !== 0;
        const toolsFilter = job.tools.filter(tool => state.filters.includes(tool)).length !== 0;
        const roleFilter = state.filters.includes(job.role);
        const levelFilter = state.filters.includes(job.level);

        return languagesFilter || toolsFilter || roleFilter || levelFilter;
    })
    
    const showAll = state.filters.length === 0;
    const jobs = showAll ? state.jobs : filteredJobs;

    const onRemoveFilter = filterValue => {
        setState(state => ({
            ...state,
            filters: state.filters.filter(filter => filter !== filterValue)
        }))
    }

    const onRemoveAllFilters = () => {
        setState(state => ({...state, filters: []}))
    }

    const onTabletClick = tabletValue => {
        if(!state.filters.includes(tabletValue)){
            setState(state => ({
                ...state,
                filters: state.filters.concat(tabletValue)
            }))
        }
    }

    return (
        <>
            <Header 
                filters={state.filters} 
                onRemoveFilter={onRemoveFilter} 
                onRemoveAllFilters={onRemoveAllFilters} 
            />
            <JobList 
                jobs={jobs} 
                onTabletClick={onTabletClick} 
            />
        </>
    );
}

export default App;
