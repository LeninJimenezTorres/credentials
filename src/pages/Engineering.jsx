import React from 'react'
import {cert_title} from '../certificates/index'
function Engineering() {

  return (
    <div style={{width:'100%', height:'100vh', overflow:'hidden'}}>
      <object
        data={cert_title}
        type="application/pdf"
        width='100%'
        height='100%'
      ></object>
    </div>
  )
}

export default Engineering