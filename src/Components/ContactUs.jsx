import React, { Component } from "react";

class ContactUs extends Component {
    constructor() {
        super();
    }
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        firstNameErr: "",
        lastNameErr: "",
        emailErr: "",
        phoneNumberErr: "",
    };
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value }) //[e.target.id] = "email"
    }
    handleSubmit = (e) => {
        e.preventDefault()

        let firstNameErr = ""
        let lastNameErr = ""
        let emailErr = ""
        let phoneNumberErr = ""

        if (this.state.firstName.trim().length < 3) {
            firstNameErr = "First name must be at least 3 characters"
        }

        if (this.state.lastName.trim().length < 1) {
            lastNameErr = "Last name must be at least 1 character"
        }

        if (!this.state.email.includes("@")) {
            emailErr = "Email should contain @"
        }

        if (this.state.phoneNumber.length !== 10) {
            phoneNumberErr = "Phone number should be exactly 10 digits"
        }

        if (firstNameErr || lastNameErr || emailErr || phoneNumberErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneNumberErr })
        } else {
            console.log("Form submitted:", {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber
            });

            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                firstNameErr: "",
                lastNameErr: "",
                emailErr: "",
                phoneNumberErr: "",
            })
        }
    }

    render() {
        return (
            <div className="container  text-white p-4 rounded">
                <h2 className='text-warning text-center mb-4 mt-3'>ContactUs</h2>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form action="" onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                id="firstName"
                                className="form-control mb-2"
                                placeholder="Enter your firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                            {
                                this.state.firstNameErr && <p className="text-danger">{this.state.firstNameErr}</p>
                            }

                            <input
                                type="text"
                                id="lastName"
                                className="form-control mb-2"
                                placeholder="Enter your lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                            {
                                this.state.lastNameErr && <p className="text-danger">{this.state.lastNameErr}</p>
                            }

                            <input
                                type="text"
                                id="email"
                                className="form-control mb-2"
                                placeholder="Enter your email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            {
                                this.state.emailErr && <p className="text-danger">{this.state.emailErr}</p>
                            }
        
                            {
                                this.sr && <p className="text-danger">{this.sr}</p>
                            }
                            <input
                                type="text"
                                id="phoneNumber"
                                className="form-control mb-2"
                                placeholder="Enter your phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                            {
                                this.state.phoneNumberErr && <p className="text-danger">{this.state.phoneNumberErr}</p>
                            }
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        );
    }
}

export default ContactUs;