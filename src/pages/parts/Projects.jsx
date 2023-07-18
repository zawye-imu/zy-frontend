import React from 'react'



export default function Projects() {

  const mock_data = [
    {
      projectName:"Hello"
    },
    {
      projectName:"One or Two"
    },
    {
      projectName: "The third One"
    }
    
  ]

  return (
    <div>
      <h1 className='font-boola text-2xl my-4'>Projects</h1>
      <div className="mt-16 w-10/12 m-auto h-fit flex flex-col items-center space-y-8 md:flex-row md:space-x-32 md:space-y-0">
              {mock_data.map(d => 
              <div className='border-solid border-black border-2 w-[250px] h-[280px] rounded-lg'>
              {d.projectName}
              </div>)}
      </div>
    </div>
  )
}
