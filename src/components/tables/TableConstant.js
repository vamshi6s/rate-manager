import React from 'react';
import Delete from '../../images/delete.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons';

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
        return <span>{rowData.rulesetby}</span>;
      },
    },
    {
      title: 'Rule Name',
      render: rowData => {
        return <span>{rowData.rulename}</span>;
      },
    },
    {
      title: 'Rule Condition',
      render: rowData => {
        return <span>{rowData.rulecondition}</span>;
      },
    },
    {
      title: 'Number of Impacting leases',
      render: rowData => {
        return (<span><a href=''>{rowData.numberofimpactingleases}</a></span>);
      },
    },
    {
      title: 'Action',
      render: rowData => {
        return (<div><a className='button-icon font-size-15 pt-5px button-edit text-white ' href='' onClick={handleEdit(rowData)}><FontAwesomeIcon icon={faPencilAlt} /></a>
        <a href='' className='button-icon font-size-15 pt-5px button-danger text-white ' onClick={handleEdit(rowData)}><img className='mt-5px' src={Delete}/></a></div>
        )
      },
    },
  ];
};