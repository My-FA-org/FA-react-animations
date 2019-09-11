import React from 'react';
import './forms.css'
import Speech from 'react-speech';
import '../landing/pixel-stars.css'
import './show-success.css'
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.myInput = React.createRef();
        this.myPhone = React.createRef();
    }
    
    onFormSubmitHandler = (event) =>{
        console.log("SUBMITTED");
        event.preventDefault();
    }

    componentDidMount(){
        this.createDynamicForm();
        document.addEventListener("keydown", this.keyDown, false);
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
    if (key == 13 || key == 9) {
        t.next(target);
    }
  }
  

  
    render(){
        return(
            <div className="forms-page">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
               {/* <h2> Form page</h2> */}
               {/* <form onSubmit={(event)=>this.onFormSubmitHandler(event)} className="main-form">
                   <input type="text" className="main-input" placeholder="Enter your name"
                   onFocus={()=>{ console.log(this.myInput.current.play()) }}/>
                   <Speech 
                    autostart={false} 
                    ref={this.myInput}
                    voice="Google UK English Female"
                    text="Please enter your name" >
                   </Speech>
                   <input type="text" className="main-input" placeholder="Enter your phone number"
                   onFocus={()=>{ console.log(this.myPhone.current.play()) }}/>
                   <Speech 
                    autostart={false} 
                    ref={this.myPhone}
                    voice="Google UK English Female"
                    text="Please enter your phone number" >
                   </Speech>
                   <input type="submit" className="main-form-submit" />
               </form> */}
                {/* <h1>Step by step form</h1> */}
                <form onSubmit={(event)=>this.onFormSubmitHandler(event)}>
                    <ul className="items"></ul>
                    <fieldset className="username enable">
                        <div className="forms-icon left"><i className="user"></i></div>
                        <input type="text" name="username" placeholder="Username"/>
                        <div className="forms-icon right button"><i className="arrow"></i></div>
                    </fieldset>
                    <fieldset className="email">
                        <div className="forms-icon left"><i className="letter"></i></div>
                        <input type="mail" name="email" placeholder="Email"/>
                        <div className="forms-icon right button"><i className="arrow"></i></div>
                    </fieldset>
                    <fieldset className="password">
                        <div className="forms-icon left"><i className="lock"></i></div>
                        <input type="password" name="password" placeholder="Password"/>
                        <div className="forms-icon right button"><i className="arrow"></i></div>
                    </fieldset>
                    <fieldset className="thanks">
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
                    </fieldset>
                </form>


            </div>
            );
    }
}
export default MyForm;