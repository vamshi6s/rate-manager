import React from 'react';

import Table from './Table';
import { data } from '../data/Mockdata';
import { tableConstants } from './TableConstant';


const Data = () => {

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item))
  }


  return (

      <div>
        <Table className={"commontable"} cols={tableConstants(handleEdit)} data={data} />
      </div>


      // {/* <div className='col-small-6'>

      //   <h4>Dark Table</h4>
      //   <Table cols={tableConstants(handleEdit)} data={data} isDark />
      // </div>

      // <div className='col-small-6'>
      //   <h4>Borderless Table</h4>
      //   <Table cols={tableConstants(handleEdit)} data={data} bordered={false} />
      // </div>

      // <div className='col-small-6'>
      //   <h4>Striped Table</h4>
      //   <Table cols={tableConstants(handleEdit)} data={data} striped />
      // </div>

      // <div className='col-small-6'>
      //   <h4>Hoverable Table</h4>
      //   <Table cols={tableConstants(handleEdit)} data={data} hoverable />
      // </div> */}


  );
}

export default Data;