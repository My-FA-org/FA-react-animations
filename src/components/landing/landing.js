import React from 'react';
import {Link} from 'react-router-dom';
import './landing-page.css'
import './pixel-stars.css'
class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dayTheame : true,
        }
    }

    componentDidMount = () =>{
        let $cont = document.querySelector('.cont');
        let $elsArr = [].slice.call(document.querySelectorAll('.el'));
        let $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

        setTimeout(function() {
            $cont.classList.remove('s--inactive');
        }, 200);

        $elsArr.forEach(function($el) {
            $el.addEventListener('click', function() {
                if (this.classList.contains('s--active')) return;
                $cont.classList.add('s--el-active');
                this.classList.add('s--active');
            });
        });

        $closeBtnsArr.forEach(function($btn) {
            $btn.addEventListener('click', function(e) {
                e.stopPropagation();
                $cont.classList.remove('s--el-active');
                document.querySelector('.el.s--active').classList.remove('s--active');
            });
        });
    }

    render(){
        return(
            <div className="landing-page">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <h2> Landing Page </h2>
                <ul>
                    <li>
                        <Link to="/forms">Fill the form </Link>
                    </li>
                    </ul>
              
                    <div className="cont s--inactive">
                    <div className="cont__inner">
                        <div className="el">
                        <div className="el__overflow">
                            <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="el__heading">Section 1</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text">Whatever</div>
                                <div className="el__close-btn"></div>
                            </div>
                            </div>
                        </div>
                        <div className="el__index">
                            <div className="el__index-back">1</div>
                            <div className="el__index-front">
                            <div className="el__index-overlay" data-index="1">1</div>
                            </div>
                        </div>
                        </div>
                        <div className="el">
                        <div className="el__overflow">
                            <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="el__heading">Section 2</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text">Whatever</div>
                                <div className="el__close-btn"></div>
                            </div>
                            </div>
                        </div>
                        <div className="el__index">
                            <div className="el__index-back">2</div>
                            <div className="el__index-front">
                            <div className="el__index-overlay" data-index="2">2</div>
                            </div>
                        </div>
                        </div>
                        <div className="el">
                        <div className="el__overflow">
                            <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="el__heading">Section 3</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text">Whatever</div>
                                <div className="el__close-btn"></div>
                            </div>
                            </div>
                        </div>
                        <div className="el__index">
                            <div className="el__index-back">3</div>
                            <div className="el__index-front">
                            <div className="el__index-overlay" data-index="3">3</div>
                            </div>
                        </div>
                        </div>
                        <div className="el">
                        <div className="el__overflow">
                            <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="el__heading">Section 4</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text shining-text">
                                    <div className="shining-text-div">
                                        <p>Shining Text Animation Effects</p>
                                    </div>  
                                </div>
                                <div className="el__close-btn"></div>
                            </div>
                            </div>
                        </div>
                        <div className="el__index">
                            <div className="el__index-back">4</div>
                            <div className="el__index-front">
                            <div className="el__index-overlay" data-index="4">4</div>
                            </div>
                        </div>
                        </div>
                        <div className="el">
                        <div className="el__overflow">
                            <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="el__heading">Section 5</h2>
                            </div>
                            <div className="el__content content-white-back">
                                <div className="el__text dancing-text">
                                <h1>
                                    <span className="red-text-bounce">f</span>
                                    <span className="red-text-bounce">o</span>
                                    <span className="red-text-bounce">r</span>
                                    <span className="red-text-bounce">g</span>
                                    <span className="red-text-bounce">e</span>
                                    {/* <span>a</span> */}
                                    <br />
                                    <span className="black-text-bounce">a</span>
                                    <span className="black-text-bounce">h</span>
                                    <span className="black-text-bounce">e</span>
                                    <span className="black-text-bounce">a</span>
                                    <span className="black-text-bounce">d</span>
                                    {/* <span>n</span> */}
                                    </h1>
                                </div>
                                <div className="el__close-btn close-black"></div>
                            </div>
                            </div>
                        </div>
                        <div className="el__index">
                            <div className="el__index-back">5</div>
                            <div className="el__index-front">
                            <div className="el__index-overlay" data-index="5">5</div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>

                    

               



            </div>
            )
    }
}
export default LandingPage;