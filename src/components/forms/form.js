import React from 'react';
import './forms.css'
import Speech from 'react-speech';
import '../landing/pixel-stars.css'
import './show-success.css'
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
                <form>
                    <ul className="items"></ul>
                    <fieldset className="name enable">
                        <div className="forms-icon left"><i className="user"></i></div>
                        <input type="text" name="name" placeholder="Enter your name"
                         onFocus={()=>{ if(!this.state.name){this.myInput.current.play()} }}
                         value={this.state.name}
                         onChange={this.changeNameHandler}
                         />
                        <div className="forms-icon right button"><i className="arrow"></i></div>
                    </fieldset>
                    <fieldset className="email">
                        <div className="forms-icon left"><i className="letter"></i></div>
                        <input type="mail" name="email" placeholder="Email"
                        onFocus={()=>{ if(!this.state.email && this.state.name){this.myEmail.current.play()} }}
                        value={this.state.email}
                        onChange={this.changeMailHandler}/>
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
                            <div className="message"><h1 className="alert">Success!</h1><p>yay, everything looks good.</p></div>
                            <button className="button-box" onClick={(event)=>this.onFormSubmitHandler(event)}><h1 className="green">continue</h1></button>
                        </div>
                    </fieldset>
                </form>


            </div>
            );
    }
}
export default MyForm;