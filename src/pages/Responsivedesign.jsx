import React from 'react'
import {cert_responsive} from '../certificates/index'

function Responsivedesign() {
  return (
    <div style={{width:'100%', height:'100vh', overflow:'hidden'}}>
      <object
        data={cert_responsive}
        type="application/pdf"
        width='100%'
        height='100%'
      ></object>
    </div>
  )
}

export default Responsivedesign