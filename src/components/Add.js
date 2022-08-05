import * as React from 'react';
import "../Styles/style.scss";


const Add = () => {
    const options = [
        { label: 'Rule 1', value: 'Rule 1' },
        { label: 'Rule 2', value: 'Rule 2' },
        { label: 'Rule 3', value: 'Rule 3' },       
      ];
    
      const [value, setValue] = React.useState('Rule');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
      return(
        <div className='Col mb ml-10'>
            <label>
                    <span className='pr-25px side-font'>Add Rule</span>
                        <select className='form-select' value={value} onChange={handleChange}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                    
                </div>
      )
};

export default Add;