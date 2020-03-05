import React, {Component} from 'react';
import '../styles/scrollButtonCSS.css';
import arrowUp from '../assets/icons/arrow-up.png';

export default class ScrollButton extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render () {
        return <img src={arrowUp} alt={"Scroll to top"} title='Scroll to top' className='scroll'
                       onClick={ () => { this.scrollToTop(); }} />;
    }
}
