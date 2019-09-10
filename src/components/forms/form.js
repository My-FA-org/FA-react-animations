import React from 'react';
import './forms.css'
import Speech from 'react-speech';

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
            </div>
            );
    }
}
export default MyForm;