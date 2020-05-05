import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


class ActivityForm extends Component {
    state = {
        activity: '',
        date: '',
        duration: '',
        efficacy: '',
        notes: '',
        
    }

    submitForm = input => e => {
        this.setState({[input]: e.target.value});
        console.log('click works');

        e.preventDefault();
    }

    render() {

        const { activity, date, duration, efficacy, notes } = this.state;
        const values = { activity, date, duration, efficacy, notes }

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card" id="main">
                                <div className="card-content">
                                <span className="card-title">Activity Tracker</span>
                                <div className="row">
                                    <form action="" id="activity-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="activity-txt" placeholder="Enter Activity" value={activity} onChange={this.activity}></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="date-txt" placeholder="Date"></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="time-txt" placeholder="Length of time spent"></input>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="efficacy-txt" placeholder="Was it constructive?"></input>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="notes-txt" placeholder="Enter Notes"></input>
                                        </div>
                                        <input type="submit" id="submitBtn" value="Submit" className="btn black" onClick={this.submitForm}></input>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card" id="main">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Activity</td>
                                        <td>Date</td>
                                        <td>Duration</td>
                                        <td>Efficacy</td>
                                        <td>Notes</td>
                                    </tr>
                                </thead>
                                <tbody id="activity-list">
                                    <tr>
                                        <td>{activity.value}</td>
                                        <td>{date.value}</td>
                                        <td>{duration.value}</td>
                                        <td>{efficacy.value}</td>
                                        <td>{notes.value}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default ActivityForm
