import React from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="landing-page">
                <h2> Landing Page </h2>
                <ul>
                    <li>
                        <Link to="/forms">Fill the form </Link>
                    </li>
                    </ul>
            </div>
            )
    }
}
export default LandingPage;