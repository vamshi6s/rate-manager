import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPencilAlt} from '@fortawesome/free-solid-svg-icons';

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
        return (<span>{rowData.numberofimpactingleases}<br/>{rowData.gmail}</span>);
      },
    },
    {
      title: 'Action',
      render: rowData => {
        return (<div><a className='button-icon font-size-15 buttn-edit text-white ' href='' onClick={handleEdit(rowData)}><FontAwesomeIcon icon={faPencilAlt} /></a>
        <a href='' className='button-icon font-size-15 buttn-danger text-white ' onClick={handleEdit(rowData)}><FontAwesomeIcon icon={faTrash} /></a></div>
        )
      },
    },
  ];
};