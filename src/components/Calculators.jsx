import React from 'react'

import RD from '../assets/RD.png'
import MFImage from '../assets/MF.png'
import SipImage from '../assets/SIP.png'
import FDImage from '../assets/FD.png'
import NPSImage from '../assets/NPS.png'
import Cart from './Cart'
const calsis = [
  {
    title: "FD",
    path: '/Fd',
    image: FDImage
  },

  {
    title: "MF",
    path: '/Mf',
    image:MFImage
  },
  {
    title: "RD",
    path: '/Rd',
    image:RD
  },
  {
    title: "NPS",
    path: '/Nps',
    image:NPSImage

  },
  {
    title: " SIP",
    path: '/sip',
    image:SipImage
  },
]
function Calculators() {
  return (
    <>
      <h2 className='calculators  text-blue-700 px-16 md:flex items-center justify-center md:py-3 relative text-4xl font-bold '>Calculators</h2>

      <section className='mx-auto md:px-16 px-2 pt-10 py-4 space-y-1 px-auto flex-wrap flex  items-center justify-center  md:space-x-6 flex-auto2'>
        {
          calsis.map((item, i) => {
            return (<Cart key={i} title={item.title} image={item.image} path={item.path} />)
          })
        }
      </section>
      <hr className='my-10' />
    </>

  )
}

export default Calculators