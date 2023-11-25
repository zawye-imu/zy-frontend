import {React, useState} from 'react'
import { FormControl,FormLabel,Input,Textarea, Button } from '@chakra-ui/react'
import { BsSend } from "react-icons/bs"

import { useTranslation } from 'react-i18next'

export default function ContactMe() {

  const [address,setAddress] = useState("")
  const [message,setMessage] = useState("")
  const [isLoading,setIsLoading] = useState(false);

  const {t, i18n} = useTranslation();

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
    setTimeout(()=> {
      setIsLoading(false)
    },3000)
    
  }

  return (
    <div className="w-8/12 m-auto mt-20 mb-20">
        <h1 className='font-boola text-2xl my-4'>Contact Me</h1>
        <FormControl>
        <FormLabel>{t("contactAddress")}</FormLabel>
        <Input type='text' value={address} name="address" onChange={handleOnChange}/>
        </FormControl>
        <FormControl>
        <FormLabel>{t("message")}</FormLabel>
        <Textarea name="message" value={message} onChange={handleOnChange}></Textarea>
        </FormControl>
        <div className="flex flex-row-reverse mt-6">
          <Button isLoading={isLoading} rightIcon={<BsSend style={{color: "blue"}}/>} colorScheme='blue' variant='outline' onClick={handleSend}>
          Send
          </Button>
        </div>
        
    </div>
  )
}
