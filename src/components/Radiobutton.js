import React from "react";

const CMRadioGroup = (props, context) => {
    return (
        <RadioGroup
            name={props.name}
            style={{flexDirection: "row"}}
            className={props.className}
            value={props.value}
            onChange={props.onChange}>
            {props.radios.map(radio => 
                <FormControlLabel
                    key={radio.value}
                    value={radio.value}
                    style={{marginRight: 40, height:30}}
                    control={<Radio />}
                    label={context.t(radio.label)} />,
            )}
        </RadioGroup>
    );
};
export default  CMRadioGroup;