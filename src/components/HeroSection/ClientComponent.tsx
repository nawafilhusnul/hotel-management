'use client'

import React, { FC } from 'react'
import CountUpNumber from '../CountUpNumber/CountUpNumber';

type Props = {
  heading1: React.ReactNode
  section2: React.ReactNode
}

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props;
  return (
    <section className='flex px-4 items-center gap-12 container mx-auto'>
    <div className="py-10 h-full">
      {heading1}

      <div className="flex justify-between mt-12">
        <div className="flex gap-3 flex-col items-center justify-center">
          <p className="text-xs lg:text-lg text-center">Basic Room</p>
          <CountUpNumber duration={700} endValue={54}/>
        </div>
        <div className="flex gap-3 flex-col items-center justify-center">
          <p className="text-xs lg:text-lg text-center">Luxury Room</p>
          <CountUpNumber duration={1000} endValue={27}/>
        </div>
        <div className="flex gap-3 flex-col items-center justify-center">
          <p className="text-xs lg:text-lg text-center">Suite Room</p>
          <CountUpNumber duration={1300} endValue={11}/>
        </div>
      </div>
    </div>

    {section2}
  </section>
  )
}

export default ClientComponent