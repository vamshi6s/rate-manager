import React from "react";


const Mode =() =>{
    return(
        <div>
            <form action=''>
                    <span className=" ml-15 p-10 side-font">Mode of Changes:</span>
                    <input type="radio" id='fixedamount' name="radio"/>
                   <label for="fixedamount" className="ml-10">Fixed Amount</label>
                  <input type="radio" id='percentage' name="radio"/>
                  <label for="percentage">Percentage</label>
                </form>
        </div>
    )
}
export default Mode;