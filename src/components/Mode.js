import React from "react";


const Mode =() =>{
    return(
        <div>
            <form action=''>
                    <span className=" ml-15 pr-10px side-font">Mode of Changes:</span>
                    <input className="mr-6px" type="radio" id='fixedamount' name="radio"/>
                   <label className="mr-6px" for="fixedamount">Fixed Amount</label>
                  <input className="mr-6px" type="radio" id='percentage' name="radio"/>
                  <label for="percentage">Percentage</label>
                </form>
        </div>
    )
}
export default Mode;