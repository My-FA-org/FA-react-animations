import React from 'react';
import './forms.css'
import Speech from 'react-speech';
import '../landing/pixel-stars.css'
import './show-success.css';
import './pen-form.css'
import logo from '../../asset/logo.png'
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            comments: '',
            errorMsg: ''
        }
        this.myInput = React.createRef();
        this.myEmail = React.createRef();
        this.myPhone = React.createRef();
        this.myComments = React.createRef();
    }

    onFormSubmitHandler = (event) => {
        console.log("SUBMITTED");
        event.preventDefault();
        let t = this;
        let isValid = t.checkForFormValidation();
        console.log("Valid", isValid);
        let $body = document.querySelector('body');
        if (isValid) {
            t.setState({ errorMsg: '' });
            $body.classList.remove("error")
            t.postGhostRequest()
        } else {
            $body.classList.add("error")
            setTimeout(() => {
                $body.classList.remove("error");
            }, 5000);
        }
    }

    checkForFormValidation = () => {
        let t = this;
        let valid = true;
        if (!t.state.name) {
            valid = false;
            t.setState({ errorMsg: 'Name is missing' }, () => {
                valid = false;
            });
        } else if (!t.state.email || !t.isValidEmail(t.state.email)) {
            valid = false;
            t.setState({ errorMsg: 'Email is not valid' }, () => {
                valid = false;
            });
        } else if (!t.state.phone && t.state.phone.length < 10) {
            valid = false;
            t.setState({ errorMsg: 'Phone number is not valid' }, () => {
                valid = false;
            });
        } else if (!t.state.comments) {
            valid = false;
            t.setState({ errorMsg: 'Comments are missing' }, () => {
                valid = false;
            });
        }
        return valid;
    }

    isValidEmail = (email) => {
        let mailformat = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.trim().match(mailformat)) {
            return false;
        } else {
            return true;
        }
    }

    postGhostRequest = () => {
        let param = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            comments: this.state.comments
        }

        console.log("Param", param);

    }

    componentDidMount() {
        document.querySelector('.toggle').addEventListener('click', function () {
            document.querySelector('.container').classList.add('active');
        });

        document.querySelector('.close').addEventListener('click', function () {
            document.querySelector('.container').classList.remove('active');
        });
    }

    onNameChangeHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChangeHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    onPhoneChangeHandler = (event) => {
        this.setState({ phone: event.target.value.replace(/[^\d]/g, '') })
    }

    onCommentsChangeHandler = (event) => {
        this.setState({ comments: event.target.value })
    }


    render() {
        return (
            <div className="forms-page">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className="hidden-div">
                    <Speech
                        autostart={false}
                        ref={this.myInput}
                        voice="Google UK English Female"
                        text="Please enter your name" >
                    </Speech>

                    <Speech
                        autostart={false}
                        ref={this.myEmail}
                        voice="Google UK English Female"
                        text="Please enter your Email" >
                    </Speech>

                    <Speech
                        autostart={false}
                        ref={this.myPhone}
                        voice="Google UK English Female"
                        text="Please enter your phone number" >
                    </Speech>

                    <Speech
                        autostart={false}
                        ref={this.myComments}
                        voice="Google UK English Female"
                        text="Please enter your comments here" >
                    </Speech>
                </div>


                <div className="pen-form">
                    <div className="container">
                        <div className="card"></div>
                        <div className="card main-card">
                            <div className="card-logo-div">
                                <img src={logo} alt="logo.png"></img>
                            </div>
                            <h1 className="title">Click + to Register yourself</h1>

                        </div>
                        <div className="card alt">
                            <div className="toggle"></div>
                            <h1 className="title">Register
                    <div className="close"></div>
                            </h1>
                            <form>
                                <div className="input-container">
                                    <input type="text" id="name" required="required"
                                        value={this.state.name}
                                        onChange={this.onNameChangeHandler}
                                        onFocus={() => { if (!this.state.name) { this.myInput.current.play() } }} />
                                    <label htmlFor="name">Name</label>
                                    <div className="bar"></div>
                                </div>
                                <div className="input-container">
                                    <input type="text" id="emailid" required="required"
                                        value={this.state.email}
                                        onChange={this.onEmailChangeHandler}
                                        onFocus={() => { if (!this.state.email) { this.myEmail.current.play() } }} />
                                    <label htmlFor="emailid">Email</label>
                                    <div className="bar"></div>
                                </div>
                                <div className="input-container">
                                    <input type="text" id="phone" required="required"
                                        maxLength="10"
                                        value={this.state.phone}
                                        onChange={this.onPhoneChangeHandler}
                                        onFocus={() => { if (!this.state.phone) { this.myPhone.current.play() } }} />
                                    <label htmlFor="phone">Phone</label>
                                    <div className="bar"></div>
                                </div>
                                <div className="input-container">
                                    <input type="text" id="comments" required="required"
                                        value={this.state.comments}
                                        onChange={this.onCommentsChangeHandler}
                                        onFocus={() => { if (!this.state.comments) { this.myComments.current.play() } }} />
                                    <label htmlFor="comments">Comments</label>
                                    <div className="bar"></div>
                                </div>
                                <div className="button-container">
                                    <button onClick={this.onFormSubmitHandler}><span>Submit</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="success-msg">
                    <div id="success-box">
                        <div className="dot"></div>
                        <div className="dot two"></div>
                        <div className="face">
                            <div className="eye"></div>
                            <div className="eye right"></div>
                            <div className="mouth happy"></div>
                        </div>
                        <div className="shadow scale"></div>
                        <div className="message"><h1 className="alert">Success!</h1><p>yay, everything is working.</p></div>
                        <button className="button-box"><h1 className="green">continue</h1></button>
                    </div>
                </div>

                <div id="error-box">
                    <div className="dot"></div>
                    <div className="dot two"></div>
                    <div className="face2">
                        <div className="eye"></div>
                        <div className="eye right"></div>
                        <div className="mouth sad"></div>
                    </div>
                    <div className="shadow move"></div>
                    <div className="message"><h1 className="alert">Error!</h1><p>oh no, something went wrong.</p></div>
                    <button className="button-box"><h1 className="red">try again</h1></button>
                </div>

                <div className="brand-logo">
                    <img src={logo}></img>
                </div>
            </div>
        );
    }
}
export default MyForm;