import React from 'react'

import Table from '../TableComponent/TableComponent';
import {data } from './TableData';
import { tableConstants } from './Page1tableConstant';
export default function Page1dashboard() {

    const handleEdit = (item) => () => {
        // write your logic
        alert(JSON.stringify(item))
      };
    return (
        <div className='row'>
      <div className='col-sm-6'>
        <h4>Data Table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} bordered/>
      </div>
      </div>
    )
}

