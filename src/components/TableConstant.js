import React from 'react';

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
        return <span>{rowData.numberofimpactingleases}</span>;
      },
    },
    {
      title: 'Action',
      render: rowData => {
        return <button className='btn btn-warning' onClick={handleEdit(rowData)}>Edit</button>
      },
    },
  ];
};