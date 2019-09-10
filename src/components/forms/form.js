import React from 'react';
import './forms.css'
import Speech from 'react-speech';
import './bubble-background.css'
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.myInput = React.createRef();
        this.myPhone = React.createRef();
    }
    
    onFormSubmitHandler = (event) =>{
        event.preventDefault();
    }

    render(){
        return(
            <div className="forms-page">
               <h2> Form page</h2>
               <form onSubmit={(event)=>this.onFormSubmitHandler(event)} className="main-form">
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
               </form>
               <div id="bubble-background-wrap">
                    <div class="bubble x1"></div>
                    <div class="bubble x2"></div>
                    <div class="bubble x3"></div>
                    <div class="bubble x4"></div>
                    <div class="bubble x5"></div>
                    <div class="bubble x6"></div>
                    <div class="bubble x7"></div>
                    <div class="bubble x8"></div>
                    <div class="bubble x9"></div>
                    <div class="bubble x10"></div>
                </div>
            </div>
            );
    }
}
export default MyForm;