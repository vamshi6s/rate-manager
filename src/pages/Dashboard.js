import {React,Component} from 'react';
import "../Styles/style.scss";


export default class Dashboard extends Component{
    handleCl = (event) => {
        event.preventDefault();
        window.location.href="/modal";
    }
    
    render() {
    return (
        <div >
        </div>
        
    );}
};