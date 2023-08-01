import React from 'react'
import {cert_hackmakers} from '../certificates/index'

function Hackmakers2022() {
  return (
    <div style={{width:'100%', height:'100vh', overflow:'hidden'}}>
      <object
        data={cert_hackmakers}
        type="application/pdf"
        width='100%'
        height='100%'
      ></object>
    </div>
  )
}

export default Hackmakers2022