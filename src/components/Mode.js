import React from "react";


const Mode =() =>{
    return(
        <div>
            <form action=''>
                    <p>Mode of Changes:
                    <input type="radio" id='fixedamount'/>
                   <label for="fixedamount">Fixed Amount</label>
                  <input type="radio" id='percentage'/>
                  <label for="percentage">Percentage</label></p>
                </form>
        </div>
    )
}
export default Mode;