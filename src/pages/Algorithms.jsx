import React from 'react'
import {cert_algorithms} from '../certificates/index'

function Algorithms() {
  return (
    <div style={{width:'100%', height:'100vh', overflow:'hidden'}}>
      <object
        data={cert_algorithms}
        type="application/pdf"
        width='100%'
        height='100%'
      ></object>
    </div>
  )
}

export default Algorithms
