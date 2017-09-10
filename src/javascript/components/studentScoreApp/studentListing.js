import React from 'react';
import { getClassSet } from '../../utils/dashboardUtil.js';
import { Link } from 'react-router-dom';
var underscore = require('underscore');

const StudentListing = (props) => {

    return (
        <div>
            {props.studentData && props.studentData.length
                ? <ul className="customDataTable">
                    <li className="clearfix">
                        <div className="dataCell">FirstName</div>
                        <div className="dataCell">LastName</div>
                        <div className="dataCell">Percentage</div>
                    </li>
                    {underscore.map(props.studentData, (student, key) => {
                        let total = (student.marks.english + student.marks.hindi + student.marks.mathematics);
                        let percentage = parseInt(total / 3);
                        let listClass = getClassSet({
                            'clearfix tableBody': true,
                            'redBg': percentage < 35
                        });
                        return(
                            <li key={key} className={listClass}>
                                <div className="dataCell cursorPointer"><Link to={{pathname: '/studentDetails', state: student }}>
                                    {student.firstName}
                                </Link></div>
                                <div className="dataCell">{student.lastName}</div>
                                <div className="dataCell">{`${percentage}%` }</div>
                            </li>
                        );
                    })}
                  </ul>
                : <p>no data</p>
            }
        </div>
    );
};
export default StudentListing;
