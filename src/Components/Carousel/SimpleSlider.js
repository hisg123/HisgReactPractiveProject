import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>hello, my name is inki</h3>
                    </div>
                    <div>
                        <h3>hello, my name is inki2</h3>
                    </div>
                    <div>
                        <h3>hello, my name is inki3</h3>
                    </div>
                    <div>
                        <h3>hello, my name is inki4</h3>
                    </div>
                    <div>
                        <h3>hello, my name is inki5</h3>
                    </div>
                    <div>
                        <h3>hello, my name is inki6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}