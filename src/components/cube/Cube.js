import React, { Component } from 'react';

import './cube.css';

export default class Cube extends Component {

    constructor(){
        super();

        this.totalItems = 3;
        this.currentItemIndex = 1;

    }


    componentDidMount(){

        let xAngle = 0, yAngle = 0;

        let props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
            prop,
            el = document.createElement('div');

        for(let i = 0, l = props.length; i < l; i++) {
            if(typeof el.style[props[i]] !== "undefined") {
                prop = props[i];
                break;
            }
        }


        document.addEventListener('keydown', (e) => {
        
            switch(e.keyCode) {

                case 37: // left
                

                if(this.currentItemIndex < this.totalItems - 1){
                    e.preventDefault();
                    yAngle += 90;
                    this.currentItemIndex++;
                }

                break;


                case 39: // right
                

                if(this.currentItemIndex > 0){
                    e.preventDefault();
                    yAngle -= 90;
                    this.currentItemIndex--;

                }
                
                break;       
            };

            document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
        
        }, false);
        
        document.getElementById('cube').addEventListener('mousedown touchstart', (e) => {

            console.log('arrastou viado', e);


        }, false);
        


    }

    render(){
        return (
            <div id="experiment">
                <div id="cube"  >
                

                    <div className="face previous">
                        Hihihi anterior
                    </div>
                    <div className="face one">
                        Hihihi atual
                    </div>
                    <div className="face next">
                        proximo Hihihi 
                    </div>
                    
                </div>
          </div>
        );
    }


}