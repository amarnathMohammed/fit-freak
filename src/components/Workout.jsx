import React from 'react'
import SectionWrapper from './SectionWrapper'
import Exercisecard from './Exercisecard'

export default function Workout(props) {
    const {workout} = props
  return (
    <SectionWrapper id={"workout"}
      header={"THE WAY TO GET BIG"}
      title={["AND", "HERE", "YOU GO"]}
       
    >
        <div className='flex flex-col gap-4'>
            {workout.map((exercise,i)=>
                    <Exercisecard i={i} exercise={exercise} key = {i}/>
            )}
        </div>
    </SectionWrapper>
  )
}
