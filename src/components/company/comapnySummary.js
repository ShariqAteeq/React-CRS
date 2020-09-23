import React from 'react';
import { Link } from 'react-router-dom';

function ComapnySummary( {logo , title , jobTitle , vacancies , id} ) {

    return (
        <div className = "company">
            <div className = "company-head">
                <img className = "company-logo" src = {logo} />
                <h2 className = "company-title">{title}</h2>
            </div>
            <div className = "company-loc">
                <p className = "company-text"><b>Job Title</b> - {jobTitle}</p>
                <p className = "company-text"><b>No of Vacancies</b> : {vacancies}</p>
            </div>
            <Link to = {`/company/${id}`} className = "company-link">See Detail</Link>
        </div>
    )
}

export default ComapnySummary;
