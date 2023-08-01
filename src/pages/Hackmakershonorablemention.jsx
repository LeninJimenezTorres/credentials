import React from 'react'
import {cert_mention} from '../certificates/index'

function Hackmakershonorablemention() {
  return (
    <div style={{width:'100%', height:'100vh', overflow:'hidden'}}>
      <object
        data={cert_mention}
        type="application/pdf"
        width='100%'
        height='100%'
      ></object>
    </div>
  )
}

export default Hackmakershonorablemention