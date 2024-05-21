import React from "react";
import { useState } from "react";
import './about.css'
function About(){
    const [show, setShow] = useState(false);

    const handleClick = () =>{
        setShow(!show)
    }
    return (
            <div className="container">
                <div className="sidebar">
                    <nav>
                        <a href="#">Exp. /<span> Edu.</span></a>
                        <ul>
                            <li onClick={handleClick} className={show === false ? "active" :""}><a href="#">Experience</a></li>
                            <li onClick={handleClick}  className={show === true ? "active" :""} ><a href="#">Education</a></li>
                        </ul>
                    </nav>
                </div>
                {show === false ?
                (<div className="main-content">
                    <h1>Work Experience</h1>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                        WEIL, GOTSHAL & MANGES - NEW YORK, NY
                        <span style={{fontSize:'small', marginLeft:'770px'}}>Jan. 2023 - Jan. 2024</span>
                            <br/>
                            <p style={{fontSize:'small'}}>Legal Billing Coordinator</p>
                        </div>
                        <div className="panel-body">
                        <ul>
                            <li>•	Tracked billable hours and expenses accurately.</li>
                            <li>•	Resolved billing discrepancies with attorneys and clients.</li>
                            <li>•	Reviewed contracts for financial compliance.</li>
                            <li>•	Provided timely client invoices.</li>
                        </ul>                   
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head" style={{fontSize:'smaller'}}>
                            BESAY AND ASSOCIATES PROFESSIONAL SERVICES, LLC - ATLANTA, GA
                            <span style={{fontSize:'small', marginLeft:'645px'}}>Aug. 2020 – Dec. 2022</span>
                            <br/>
                            <p style={{fontSize:'small'}}>Accounting Associate</p>
                        </div>
                        <div className="panel-body">
                        <ul>
                            <li>•	Coordinated the request for the relevant supporting materials from the client to support the stated financial records for each selection made.</li>
                            <li>•	Communicated with financial institutions and limited partners for confirmations to verify account balances.</li>
                            <li>•	Performed substantive testing, analytical procedures, audit walkthroughs, and employee interviews.</li>
                            <li>•	Maintained compliance with regulatory requirements, to assure financial statements are fairly presented in alignment with GAAP and free from material misstatements.</li>

                        </ul>
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            GREEN KEY RESOURCES - NEW YORK, NY
                            <span style={{fontSize:'small', marginLeft:'792px'}}>Dec. 2019 – Jul. 2020</span>
                            <br/>
                            <p style={{fontSize:'small'}}>Accounts Payable Specialist</p>
                        </div>
                        <div className="panel-body">
                            <ul>
                                <li>•	Prepared and posted journal entries for monthly payroll activity..</li>
                                <li>•	Created monthly Aging reports for management identifying delinquent accounts and insufficient payments in a timely manner.</li>
                                <li>•	Maintained accounting ledgers by posting account transactions.</li>
                                <li>•	Verified accounts by reconciling statements and transactions.</li>
                                <li>•	Prepared and E-File required 1099 Forms.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            SELFHELP COMMUNITY SERVICES - NEW YORK, NY
                            <span style={{fontSize:'small', marginLeft:'710px'}}>Jul. 2015 – Mar. 2019</span>
                            <br/>
                            <p style={{fontSize:'small'}}>Financial Database Administrator</p>
                        </div>
                        <div className="panel-body">
                            <ul>
                                <li>•	Managed data entry/record-keeping and billing systems as mandated by funding sources.</li>
                                <li>•	Responsible for Audits, Monthly Bank Reconciliations, and assisted Vice President with Budgets and Proposals. </li>
                                <li>•	Reviewed financial information to identify potential budget variances, compiled statistical information and conformed to established financial practices and regulatory requirements.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            JASA - New York, NY 
                            <span style={{fontSize:'small', marginLeft:'955px'}}>Jun. 2014 – Sept. 2015</span>
                            <br/>
                            <p style={{fontSize:'small'}}>Accounts Receivable Specialist</p>
                        </div>
                        <div className="panel-body">
                            <ul>
                                <li>•	Identified delinquent accounts and insufficient payments in a timely manner.</li>
                                <li>•	Prepared financial reports by collecting, analyzing, and summarizing account information for the Financial Controller.</li>
                                <li>•	Maintained accounting ledgers by posting account transactions.</li>
                                <li>•	Verified accounts by reconciling statements and transactions.</li>
                            </ul>
                        </div>
                    </div>
                </div>) : (<div className="main-content">
                    <h1>Education</h1>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                        Flatiron School, New York, NY 
                        <span style={{fontSize:'small', marginLeft:'912px'}}>Jan. 2024 – May 2024</span>
                            <br/>
                            <p style={{fontSize:'small'}}>Software Engineering Program</p>
                        </div>
                        <div className="panel-body">
                     
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head" >
                            Berkeley College, New York, NY 
                            <span style={{fontSize:'small', marginLeft:'900px'}}>Sept. 2021 – Dec. 2022</span>
                            <br/>
                            <p style={{fontSize:'small'}}>Associate of Applied Arts, Business Administration: Accounting</p>
                        </div>
                        <div className="panel-body">
                        </div>
                    </div>
                </div>) }
            </div>
    )
}

export default About;