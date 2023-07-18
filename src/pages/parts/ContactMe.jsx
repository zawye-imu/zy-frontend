import {React, useState} from 'react'
import { FormControl,FormLabel,Input,Textarea, Button } from '@chakra-ui/react'
import { GrSend } from "react-icons/gr"

export default function ContactMe() {

  const [address,setAddress] = useState("")
  const [message,setMessage] = useState("")
  const [isLoading,setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    switch(e.target.name){
      case "address":
        setAddress(e.target.value)
        break;
      case "message":
        setMessage(e.target.value)
        break;
    }
  }

  const handleSend = (e) => {
    setIsLoading(true)
  }

  return (
    <div className="w-8/12 m-auto mt-20 mb-20">
        <h1 className='font-boola text-2xl my-4'>Contact Me</h1>
        <FormControl>
        <FormLabel>Contact Address</FormLabel>
        <Input type='text' value={address} name="address" onChange={handleOnChange}/>
        </FormControl>
        <FormControl>
        <FormLabel>Message </FormLabel>
        <Textarea name="message" value={message} onChange={handleOnChange}></Textarea>
        </FormControl>
        <div className="flex flex-row-reverse mt-6">
          <Button isLoading={isLoading} rightIcon={<GrSend color='blue'/>} colorScheme='blue' variant='outline' onClick={handleSend}>
          Send
          </Button>
        </div>
        
    </div>
  )
}
