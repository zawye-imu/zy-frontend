import React from 'react'
import { FormControl,FormLabel,Input,Textarea } from '@chakra-ui/react'


export default function ContactMe() {

  return (
    <div className="w-8/12 m-auto mt-20 mb-20">
        <h1 className='font-boola text-2xl'>Contact Me</h1>
        <FormControl>
        <FormLabel>Your Contact Address</FormLabel>
        <Input type='email' />
        </FormControl>
        <FormControl>
        <FormLabel>Message </FormLabel>
        <Textarea></Textarea>
        </FormControl>
    </div>
  )
}
