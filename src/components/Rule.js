import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Rule = () => {
    const options = [
        { label: 'Rule 1', value: 'Rule 1' },
        { label: 'Rule 2', value: 'Rule 2' },
        { label: 'Rule 3', value: 'Rule 3' },
      ];
    
      const [value, setValue] = React.useState('Rule');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    

    return (
        <div style={{margin:"100px"}} className="Container">
            <div>
            <h1>Add Rule</h1>
            </div>
            <div>
                
                <span>
                    <p>Rule Name
                    <input type="text"/></p>
                </span>
                <form action=''>
                    <p>Mode of Changes:
                    <input type="radio" id='fixedamount'/>
                   <label for="fixedamount">Fixed Amount</label>
                  <input type="radio" id='percentage'/>
                  <label for="percentage">Percentage</label></p>
                </form>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                        <select>
                        <option value="1"> Increase</option>
                        
                    </select>
                        </td>
                        <td>Rental price by</td>
                        <td>
                        <select>
                        <option value="1">$ 10</option>
                        <option value={2}>$ 20</option>
                        
                    </select>
                        </td>
                        <td>
                            When price has not changed in 
                        </td>
                        <td>
                        <p>
                        <select>
                        <option value="1">10</option>
                        <option value={2}>20</option>
                    </select>
                    Days</p>
                        </td>
                        <td>
                            <span><FontAwesomeIcon icon={faCoffee} /></span>
                            <span>Add</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>Cancel</button>
                <button>Next</button>
            </div>
        </div>
        
        
        )



        
};

export default Rule;