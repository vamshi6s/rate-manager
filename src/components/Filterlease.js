import React from "react";




// const Filterlease = () =>{
//     const options = [
//         { label: 'Rule 1', value: 'Rule 1' },
//         { label: 'Rule 2', value: 'Rule 2' },
//         { label: 'Rule 3', value: 'Rule 3' },
//       ];
    
//       const [value, setValue] =useState('Rule');
    
//       const handleChange = (event) => {
//         setValue(event.target.value);
//       };
//     return(
//         <div>
//             <label>
//                     <h6>Storage</h6>
//                         <select value={value} onChange={handleChange}>
//                             {options.map((option) => (
//                                 <option value={option.value}>{option.label}</option>
//                             ))}
//                         </select>
//                     </label>
                    
//                 </div>
//     )
// };
// export default Filterlease;


 const Filterlease =()=>{
    // const filterItems=[
    //     {
    //         title:StorageType,
    //         Option:SelectStorageType
    //     },
    //     {
    //         title:Location,
    //         Option:SelectStorageType
    //     },
    //     {
    //         title:Building,
    //         Option:SelectStorageType
    //     },
    //     {
    //         title:Aminity,
    //         Option:SelectStorageType
    //     },
    // ]
  return (
    <>
      {['StorageType', 'Location', 'Building', 'UnitType', 'Aminity'].map(
        (variant) => (
          <select
            
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          > <option>Select</option>
            <option value={1}>Action</option>
            <option value={2}>Another action</option>
            <option value={3}>
              Active Item
            </option>
            
            <option value={4}>Separated link</option>
          </select>
        ),
      )}
    </>
  );
}

export default Filterlease;