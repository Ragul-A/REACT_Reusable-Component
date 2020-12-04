import React from 'react'

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit) => {
  return [
    {
      title: 'ID',
      render: rowData => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      title: 'Name',
      render: rowData => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: 'Email',
      render: rowData => {
        return <span>{rowData.email}</span>;
      },
    },
    {
      title: 'Phone',
      render: rowData => {
        return <span>{rowData.phone}</span>;
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