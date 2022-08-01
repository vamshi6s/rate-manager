import {React,Component} from 'react';
import "../Styles/style.scss";

export default class Dashboard extends Component{
    handleClick = (event) => {
        event.preventDefault();
        window.location.pathname='/occupied';
    };
    render() {
    return (
        <div >
            <h4>
                hiii
                
            </h4>
        </div>
        
    );}
};