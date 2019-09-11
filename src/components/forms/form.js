import React from 'react';
import './forms.css'
import Speech from 'react-speech';
import '../landing/pixel-stars.css'
import './show-success.css';
import './pen-form.css'
import logo from '../../asset/logo.png'
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            comments:''
        }
        this.myInput = React.createRef();
        this.myEmail = React.createRef();
    }
    
    onFormSubmitHandler = (event) =>{
        console.log("SUBMITTED");
        event.preventDefault();
    }

    componentDidMount(){
        document.querySelector('.toggle').addEventListener('click', function() {
            document.querySelector('.container').classList.add('active');
          });
          
          document.querySelector('.close').addEventListener('click', function() {
            document.querySelector('.container').classList.remove('active');
          });
        // this.createDynamicForm();
        // document.addEventListener("keydown", this.keyDown, false);
    }

    createDynamicForm = () =>{    
        this.init();
        document.body.onmouseup = (event) => {
            var target = event.target || event.toElement;
            if (target.classList.contains("button")) this.next(target);
        };
    }


 init = () => {
     // Generate li foreach fieldset
    let form = document.querySelector('form'),
        count = form.querySelectorAll('fieldset').length;
    for (var i = 0; i < count; i++) {
      var ul = document.querySelector('ul.items'),
          li = document.createElement("li");  

          ul.appendChild(li);
    }
    // Add class active on first li
    ul.firstChild.classList.add('active');
  }
  
  next = (target) => {
    if(!target){
        return false
    }
    let body = document.querySelector('body');
    let input = target.previousElementSibling;
    
    // Check if input is empty
    if (input.value === '') {
      body.classList.add('error');
    } else {
      body.classList.remove('error');
      
      var enable = document.querySelector('form fieldset.enable'),
          nextEnable = enable.nextElementSibling;
          enable.classList.remove('enable');
          enable.classList.add('disable');
          nextEnable.classList.add('enable');
      
      // Switch active class on left list
      var active = document.querySelector('ul.items li.active'),
          nextActive = active.nextElementSibling;
          active.classList.remove('active');
          nextActive.classList.add('active');
    }
  }
  
  keyDown = (event) => {
      let t = this;
    var key = event.keyCode,
        target = document.querySelector('fieldset.enable .button');
    if (key === 13 || key === 9) {
        t.next(target);
    }
  }
  
  changeNameHandler = (event) =>{
    this.setState({name:event.target.value})
  }

  changeMailHandler = (event) =>{
    this.setState({email:event.target.value})
  }

  
    render(){
        return(
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
                </div>
                

            <div className="pen-form">
            <div className="container">
                <div className="card"></div>
                <div className="card main-card">
                    <div className="card-logo-div">
                        <img src={logo}></img>
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
                        <input type="text" id="name" required="required"/>
                        <label for="name">Username</label>
                        <div className="bar"></div>
                    </div>
                    <div className="input-container">
                        <input type="email" id="email" required="required"/>
                        <label for="email">Email</label>
                        <div className="bar"></div>
                    </div>
                    <div className="input-container">
                        <input type="text" id="phone" required="required"/>
                        <label for="phone">Phone</label>
                        <div className="bar"></div>
                    </div>
                    <div className="input-container">
                        <input type="text" id="comments" required="required"/>
                        <label for="comments">Comments</label>
                        <div className="bar"></div>
                    </div>
                    <div className="button-container">
                        <button><span>Next</span></button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            
            </div>
            );
    }
}
export default MyForm;