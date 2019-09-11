import React from 'react';
import {Link} from 'react-router-dom';
import './landing-page.css'
import './pixel-stars.css'
import './ring.css'
import './vanish-image.css'
import vanish1 from '../../asset/image1.jpg';
import vanish2 from '../../asset/noise.png'
import '../forms/bubble-background.css'
import './word-game.css'
class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dayTheame : true,
        }
    }

    componentDidMount = () =>{
        let t = this;
        let $body = document.querySelector("body");           
        if(t.state.dayTheame){
            $body.classList.remove('night-theame');
            $body.classList.add('day-theame');                
        }else{
            $body.classList.remove('day-theame');
            $body.classList.add('night-theame');                
        }


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

        let spans = document.querySelectorAll('.word span');
            spans.forEach((span, idx) => {
                span.addEventListener('click', (e) => {
                    e.target.classList.add('active');
                });
                span.addEventListener('animationend', (e) => {
                    e.target.classList.remove('active');
                });
                
                // Initial animation
                setTimeout(() => {
                    span.classList.add('active');
                }, 750 * (idx+1))
            });
    }

    hasClassName = (inElement, inClassName) =>
    {
        var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
        return regExp.test(inElement.className);
    }

 addClassName = (inElement, inClassName) =>
    {
        if (!this.hasClassName(inElement, inClassName))
            inElement.className = [inElement.className, inClassName].join(' ');
    }

    removeClassName = (inElement, inClassName) =>
    {
        if (this.hasClassName(inElement, inClassName)) {
            var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
            var curClasses = inElement.className;
            inElement.className = curClasses.replace(regExp, ' ');
        }
    }

 toggleClassName = (inElement, inClassName) =>
    {
        if (this.hasClassName(inElement, inClassName))
        this.removeClassName(inElement, inClassName);
        else
        this.addClassName(inElement, inClassName);
    }

    toggleShape = () =>{
      var shape = document.getElementById('shape');
      if (this.hasClassName(shape, 'ring')) {
        this.removeClassName(shape, 'ring');
        this.addClassName(shape, 'cube');
      } else {
        this.removeClassName(shape, 'cube');
        this.addClassName(shape, 'ring');
      }
      
      // Move the ring back in Z so it's not so in-your-face.
      var stage = document.getElementById('stage');
      if (this.hasClassName(shape, 'ring'))
        stage.style.webkitTransform = 'translateZ(-200px)';
      else
        stage.style.webkitTransform = '';
    }

    changeTheame = () =>{
        console.log("changed");
        let t = this;
        let isDayTheame = t.state.dayTheame;
        let $body = document.querySelector("body");     
        t.setState({dayTheame:!isDayTheame},()=>{            
            if(t.state.dayTheame){
                $body.classList.remove('night-theame');
                $body.classList.add('day-theame');                
            }else{
                $body.classList.remove('day-theame');
                $body.classList.add('night-theame');                
            }
        })
    }

    render(){
        return(
            <div className="landing-page">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className="landing-controls">
                <div className="fLeft">
                    <input title="Day / Night" className="theam-checkbox" onChange={()=>{ this.changeTheame()}} type="checkbox" name="" />
                </div>
                <div className="fRight">
                    <Link to="/forms">Fill the form </Link>    
                </div>               
                </div>
              
                    <div className="cont s--inactive">
                    <div className="cont__inner">
                        <div className="el">
                        <div className="el__overflow">
                            <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="el__heading">Demo 1</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text ring-div">

                                <div className="box"><a href="#" className="btn btn-white btn-animation-1" onClick={this.toggleShape}>Toggle Shape</a></div>
                                    <div id="container">
                                        <div id="stage">
                                            <div id="shape" className="cube backfaces">
                                                <div className="plane one">1</div>
                                                <div className="plane two">2</div>
                                                <div className="plane three">3</div>
                                                <div className="plane four">4</div>
                                                <div className="plane five">5</div>
                                                <div className="plane six">6</div>
                                                <div className="plane seven">7</div>
                                                <div className="plane eight">8</div>
                                                <div className="plane nine">9</div>
                                                <div className="plane ten">10</div>
                                                <div className="plane eleven">11</div>
                                                <div className="plane twelve">12</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                <h2 className="el__heading">Demo 2</h2>
                            </div>
                            <div className="el__content word-game">
                                <div className="el__text">
                                <h4 className="fixed">Click the letters!</h4>
                                <div className="word">
                                    <span>H</span>
                                    <span>E</span>
                                    <span>L</span>
                                    <span>L</span>
                                    <span>O</span>
                                </div>
                                </div>
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
                                <h2 className="el__heading">Demo 3</h2>
                            </div>
                            <div className="el__content content-white-back">
                                <div className="el__text image-box-div">
                                <div className="imgBx">
                                    <img src={vanish1} alt="" />
                                    <img src={vanish2} alt="" />
                                </div>                      
                                </div>
                                <div className="el__close-btn close-black"></div>
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
                                <h2 className="el__heading">Demo 4</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text shining-text">
                                    <div className="shining-text-div">
                                        <p>Shining Text Animation Effects</p>
                                    </div>  
                                </div>
                                <div id="bubble-background-wrap">
                                    <div className="bubble x1"></div>
                                    <div className="bubble x2"></div>
                                    <div className="bubble x3"></div>
                                    <div className="bubble x4"></div>
                                    <div className="bubble x5"></div>
                                    <div className="bubble x6"></div>
                                    <div className="bubble x7"></div>
                                    <div className="bubble x8"></div>
                                    <div className="bubble x9"></div>
                                    <div className="bubble x10"></div>
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
                                <h2 className="el__heading">Demo 5</h2>
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