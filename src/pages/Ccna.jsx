import React from 'react'
import {cert_ccna} from '../certificates/index'

function Ccna() {
  return (
    <div style={{width:'100%', height:'100vh', overflow:'hidden'}}>
      <object
        data={cert_ccna}
        type="application/pdf"
        width='100%'
        height='100%'
      ></object>
    </div>
  )
}

export default Ccna