import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const FrequentNumbers = ({ frequenseNumber }) => {
    return (
        <div className="frequentNumbers">
            <div>
                <h1>Frequent Numbers</h1>
            </div>
            <div>
                <ul>
                    {frequenseNumber.map(num => <li key={num} className="footerNumbers">{num}</li>)}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    frequenseNumber: state.playground.frequenseNumber,
    count: state.playground.count,
});

export default connect(mapStateToProps, null)(FrequentNumbers);
