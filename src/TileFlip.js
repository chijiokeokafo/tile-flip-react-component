import React, { Component } from 'react';
import './TileFlip.css';
import $ from 'jquery';

class TileFlip extends Component {
  render() {
    $( document ).ready(function() {
      $('.tile-flip').each(function(){
        var flipContainer = $(this);
        $('.flip-container', flipContainer).each(function(){
          $(this).click(function(){
            var wasOpen = $('.flipper', this).hasClass('flip');
            $('.flipper', flipContainer).removeClass('flip');
            if(!wasOpen) $('.flipper', this).addClass('flip');
          });
        });
      });
    });  

    return (
      <div className="TileFlip">
        <div className="tile-flip desktop">
          <div className="flip-container one" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="front">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="back">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
              </div>
            </div>
          </div>
          <div className="flip-container two" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="front">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="back">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
              </div>
            </div>
          </div>
          <div className="flip-container three" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="front">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="back">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
              </div>
            </div>
          </div>
          <div className="flip-container four" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="front">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="back">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TileFlip;
