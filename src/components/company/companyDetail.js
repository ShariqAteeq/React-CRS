import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Navbar from '../layout/navbar';

function CompanyDetail() {

    let comp = useSelector(state => state.cam.companies);
    let auth = useSelector(state => state.auth.auth);
    let { id } = useParams();

    let company = comp.find(c => c.id == id);
    if(auth == false) return <Redirect to = '/' />;
    const navbar = auth ? <Navbar /> : null;

    return (
        <div>
            {navbar}
             <div className="companyDetail">
            <div className="companyDetail-head">
                <img src={company.logo} className="companyDetail-logo" />
                <h1 className="companyDetail-title">{company.name}</h1>
            </div>
            <h3 className="companyDetail-headings">Description</h3>
            <p className="companyDetail-des">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classical Latin literature from 45 BC, making it over 2000 years
                old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical literature, discovered
                the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                The standardchunk of Lorem Ipsum used since the 1500s is reproduced below for those
                interested. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.
            </p>
            <div className="companyDetail-footer">
                <div className="companyDetail-loc">
                    <h3 className="companyDetail-headings">Basic Detail</h3>
                    <p><b>Job Title</b> - {company.jt}</p>
                    <p><b>Location</b>  - {company.location}</p>
                    <p><b>Number of Vacancies</b>  - {company.vac}</p>
                </div>
                <div className="companyDetail-skills">
                    <h3 className="companyDetail-headings">Required Skills</h3>
                    {company.skills.map(sk => {
                        return (
                            <ul className="companyDetail-list">
                                <li>{sk}</li>
                            </ul>
                        );
                    })}
                </div>
            </div>
            <button className="login-btn mt-small">Apply Now</button>

        </div>
        </div>
       
    )
}

export default CompanyDetail;
