import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class AddSensor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sensorName: '',
            macAddress: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log(JSON.stringify({
            name: 'test'
        }))

        fetch('/api/remove_sensor', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sensorName: this.state.sensorName,
                macAddress: this.state.macAddress
            }),
        }).then(res => res.json())
            .catch(err => {
                console.log(err);
                console.log(JSON.stringify({
                    sensorName: this.state.sensorName,
                    macAddress: this.state.macAddress
                }));
            }
            );
        // .then(response => {
        //   console.log(response)
        // });

    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    render() {
        return (
            <div className="modal-container">
                <div>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Remove a Sensor</p>
                            <Link to={'/config'}
                                className="delete"
                                aria-label="close"
                            ></Link>
                        </header>
                        <section className="modal-card-body">
                            {/* <h1 className="title">Add a new sensor</h1> */}
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input
                                        name="sensorName" className="input" type="text" placeholder="Enter Sensor Name"
                                        value={this.state.sensorName}
                                        onChange={this.handleChange}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check" />
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input
                                        name="macAddress" className="input" type="text" placeholder="Enter mac address"
                                        value={this.state.macAddress}
                                        onChange={this.handleChange}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-address-card" aria-hidden="true" />
                                    </span>
                                </p>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-danger" onClick={this.handleSubmit}>
                                Remove
                            </button>
                            <Link className="button" to={"/config"}>
                                Cancel
                            </Link>
                        </footer>
                    </div>
                </div>
            </div >
        );
    }
}
