import Table from 'react-bootstrap/Table';
import React from 'react'

const Page5 = () => {
  return (
    <div>
        <h1>view speaker</h1>
      <Table striped="columns" style={{justifyContent:'flex'}}>
        
      <thead>
      <tr style={{ backgroundColor: '#007afe' }}>
         <th style={{backgroundColor:'#007afe'}}>Title</th>
          <th style={{backgroundColor:'#007afe'}}>Date</th>
          <th style={{backgroundColor:'#007afe'}}>Location</th>
          <th style={{backgroundColor:'#007afe'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>hello</td>
        </tr>
        <tr>
         
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>hello</td>
        </tr>

        
        
      </tbody>
    </Table>
    </div>
  )
}

export default Page5
