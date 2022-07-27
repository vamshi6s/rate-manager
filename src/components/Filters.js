
import{React, useState} from "react";

const Filters = () =>{
    const options = [
        { label: 'Rule 1', value: 'Rule 1' },
        { label: 'Rule 2', value: 'Rule 2' },
        { label: 'Rule 3', value: 'Rule 3' },
      ];
    
      const [value, setValue] =useState('Rule');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    return(
        <div>
            <label>
                    Add Rule
                        <select value={value} onChange={handleChange}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                    
                </div>
    )
};
export default Filters;