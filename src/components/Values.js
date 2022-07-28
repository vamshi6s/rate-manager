import {React,Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "./dropdown";


export default class Values extends Component {
    state={
        country:'',
        Price:''
    };
    handleDropdown = (country) => {
        this.setState({country});
    };
    handleDropdown = (Price) => {
        this.setState({Price});
    };
    handleDropdown = (Days) => {
        this.setState({Days});
    };
    handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    render(){
    const {country,Price,Days}=this.state;
    return(
        <div className="table ml-15"><table >
        <tbody>
            <tr>
                <td>
                <Dropdown
      data={[
          {value: 1, label: 'India'},
          {value: 2, label: 'USA'},
          {value: 3, label: 'UK'},
          {value: 4, label: 'Germany'},
          {value: 5, label: 'Russia'},
          {value: 5, label: 'Italy'},
      ]}
      styleClass='mt-3'
      value={country}
      placeholder='Select Country'
      onChange={this.handleDropdown}
  />
                </td>
                <td>Rental price by</td>
                <td>
                <Dropdown
      data={[
          {value: 1, label: '$10'},
          {value: 2, label: '$20'},
          {value: 3, label: '$30'},
          
      ]}
      styleClass='mt-3'
      value={Price}
      placeholder='Select Price'
      onChange={this.handleDropdown}
  />
                
                </td>
                <td>
                    When price has not changed in 
                </td>
                <td>
                
                <Dropdown
      data={[
          {value: 1, label: '10'},
          {value: 2, label: '20'},
          {value: 3, label: '30'},
          
      ]}
      styleClass='mt-3'
      value={Days}
      placeholder='Select Days'
      onChange={this.handleDropdown}
  />
                </td>
                <td>Days</td>
                <td>
                    <a href="https://github.com/" onClick={this.handleClick}><FontAwesomeIcon icon={faTrash} /></a></td>
                    <td>
                    <a href="https://github.com/" onClick={this.handleClick}><FontAwesomeIcon icon= {faSquarePlus}/></a>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    )
    }
}
