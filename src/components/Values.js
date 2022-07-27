import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const Values = () =>{
    return(
        <div><table>
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
                    <span><FontAwesomeIcon icon={faTrash} /></span>
                    <span><FontAwesomeIcon icon= {faSquarePlus}/></span>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    )
};
export default Values;