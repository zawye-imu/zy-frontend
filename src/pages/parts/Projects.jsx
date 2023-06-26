import React from 'react'



export default function Projects() {

  const mock_data = [
    {
      projectName:"Hello"
    },
    {
      projectName:"One or Two"
    }
  ]

  return (
    <div className="h-fit flex flex-col items-center space-y-8 md:flex-row md:space-x-32">
            <a href='https://chimerical-cendol-b65002.netlify.app/'>Sample Here....</a>
            {mock_data.map(d => <div className='border-solid border-black border-2 w-[250px] h-[280px] rounded-lg '>
            {d.projectName}
            </div>)}
    </div>
  )
}
