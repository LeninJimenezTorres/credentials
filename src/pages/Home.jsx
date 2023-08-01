import logo from '../logo.svg';
import pic from '../pic.jpg'
import '../App.css';
import {cisco,hackmakers,espe,oracle,frecodecamp} from '../Galery/index'

import React from 'react'

function Home() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={pic} className="App-logo" alt="logo" />
      <p className='name'>
        Lenin Eduardo Jiménez Torres
      </p>
    </header>
    <div className='body'>
      <p className='sub'>
        My professional training credentials
      </p>
      <ul>
        <li>
          <a href='https://leninjimeneztorres.github.io/credentials/#/engineering' target='_blank'>
            <div className='a-in'>Mechatronic Engineer - Universidad de las Fuerzas Armadas</div>
            <div className='a-ima'> <img src={espe}/></div>
          </a>
        </li>
        <li>
          <a href='https://www.freecodecamp.org/certification/lenin_jimenez/javascript-algorithms-and-data-structures' target='_blank'>
            <div className='a-in'> JavaScript Algorithms and Data Structures - freeCodeCamp</div>
            <div className='a-ima'> <img src={frecodecamp}/></div>
          </a>
        </li>
        <li>
          <a href='https://au.badgr.com/public/assertions/tbLk44dBQ_GTwRo1KRsNBQ' target='_blank'>
            <div className='a-in'>Hackmakers #FormulaAI Hack 2022: Honorable Mentions Certificate</div>
            <div className='a-ima'> <img src={hackmakers}/></div>
          </a>
        </li>
        <li>
          <a href='https://au.badgr.com/public/assertions/GdlyHo6MT0aKNYi_XLGHIg' target='_blank'>
            <div className='a-in'>Hackmakers #FormulaAI Hack 2022: Participant Certificate</div>
            <div className='a-ima'> <img src={hackmakers}/></div>
          </a>
        </li>
        <li>
          <a href='https://catalog-education.oracle.com/pls/certview/sharebadge?id=57DA537F51BFDC25313319B550020AE6EB1690C8598101BCDB9411E030DE686A' target='_blank'>
            <div className='a-in'>OCI Foundations 2021 Associate `[1Z0-1085-21]` - Oracle</div>
            <div className='a-ima'> <img src={oracle}/></div>
          </a>
        </li>
        <li>
          <a href='https://www.freecodecamp.org/certification/lenin_jimenez/responsive-web-design' target='_blank'>
            <div className='a-in'>Responsive Web Design - freeCodeCamp</div>
            <div className='a-ima'> <img src={frecodecamp}/></div>
          </a>
        </li>
        <li>
          <a href='https://www.credly.com/badges/3853b4bc-3d93-4daf-aa81-fafe6e164b44' target='_blank'>
            <div className='a-in'>Cisco Certified Network Associate - CCNA - Cisco</div>
            <div className='a-ima'> <img src={cisco}/></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Home