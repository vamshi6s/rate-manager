import React from 'react';
import Delete from '../../images/delete.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import User from '../../images/User.png';

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit) => {
  return [
    {
      title: 'Date',
      render: rowData => {
        return <span>{rowData.Date}</span>;
      },
    },
    {
      title: 'Rule Setby',
      render: rowData => {
        return (<div className='flex ml-15px'><div  ><img src={User}/></div><div className='ml-5px text-left'><span>{rowData.rulesetby.User}</span><br/><span>{rowData.rulesetby.Email}</span></div></div>);
      },
    },
    {
      title: 'Rule Name',
      render: rowData => {
        return <span className='ml-7px mr-5px'>{rowData.rulename}</span>;
      },
    },
    {
      title: 'Rule Condition',
      render: rowData => {
        return (<div className='ml-15px'><span className='w-10 text-left  '>{rowData.rulecondition}</span></div>);
      },
    },
    {
      title: 'Number of Impacting leases',
      render: rowData => {
        return (<span className='text-center ml-5rem '><a href=''>{rowData.numberofimpactingleases}</a></span>);
      },
    },
    {
      title: 'Action',
      render: rowData => {
        return (<div className='flex'><a className='button-icon font-size-15 pt-5px button-edit text-white ' href='' onClick={handleEdit(rowData)}><FontAwesomeIcon icon={faPencilAlt} /></a>
        <a href='' className='button-icon font-size-15 pt-5px button-danger text-white ' onClick={handleEdit(rowData)}><img className='mt-5px' src={Delete}/></a></div>
        )
      },
    },
  ];
};