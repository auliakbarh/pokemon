import React, {Component} from 'react';
import logo from '../assets/icons/pokeball.png';
import '../styles/App.css';
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import { withRouter } from "react-router";

import {FETCH_LIST_OF_POKEMONS} from '../store/actions/defaultActions';

import ScrollButton from "../components/scrollButton";

function Item({value, width}) {
    const listOfPokemons = {
        display: 'block',
        border: '0 solid whitesmoke',
        padding: '2px',
        textAlign: 'center',
        textTransform: 'capitalize',
        cursor: 'pointer',
        width: width * 0.5
    };
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div style={listOfPokemons} >
        <Link to={`/detail/${value.name}`} style={{textDecoration: 'none'}}>
            <div className={"button-to-detail"}>
                {value.name}
            </div>
        </Link>
        </div>
    );
}

function MyList({items, width, height}) {
    return (
        <>
            {items.map((item, index) => <Item key={item.name} value={item} index={index+1} width={width} height={height} />)}
        </>
    );
}

class ListPokemons extends Component {
    constructor(props) {
        super(props);
        this.state = { height: 512, width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        const {listOfPokemons} = this.props.default;

        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));

        document.addEventListener('scroll', this.trackScrolling);
        this.props.fetchListOfPokemons(listOfPokemons.length);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
        document.removeEventListener('scroll', this.trackScrolling);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    trackScrolling = () => {
        const {listOfPokemons, countOfPokemons} = this.props.default;
        const wrappedElement = document.getElementById('root');

        if (this.isBottom(wrappedElement)) {
            if(listOfPokemons.length === countOfPokemons){
                document.removeEventListener('scroll', this.trackScrolling);
            }else{
                console.log('bottom reached');
                this.props.fetchListOfPokemons(listOfPokemons.length);
            }

        }
    };

    render(){
        const {listOfPokemons, countOfPokemons} = this.props.default;
        const {width, height} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <div className="pokeball"><img src={logo} className="App-logo" alt="logo" /></div>
                    <p>
                        Showing {listOfPokemons.length} of {countOfPokemons} Pokemons
                    </p>
                    <MyList items={listOfPokemons} width={width} height={height} />
                    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    default: state.default
});

const mapDispatchToProps = dispatch => ({
    fetchListOfPokemons: (offset) => dispatch(FETCH_LIST_OF_POKEMONS(offset))
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPokemons));
