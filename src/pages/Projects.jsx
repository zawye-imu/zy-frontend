import { Card, CardHeader,Flex, Box, IconButton, Avatar, Heading, CardBody, CardFooter, Button, Image, Text } from '@chakra-ui/react'
import { AiOutlineLike, AiOutlineDislike  } from "react-icons/ai"


// Must do better with a history kind of like table
export const Projects = () => {

      // the data should really come from the backend
    
      return (
        <div className="w-10/12 m-auto px-2 py-16 sm:px-0">
          {/* For loop */}
            <Card maxW='md'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                    <Box>
                      <Heading size='sm'>Zaw Ye Htet Naing</Heading>
                      <Text>2000-2001 ,1 year</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
                <Text>
                  With Chakra UI
                </Text>
                <Text>Hello</Text>
              </CardBody>
              <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
                style={{width:'98%', margin:"auto"}}
              />

              <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Button flex='1' variant='ghost' leftIcon={<AiOutlineLike/>}>
                  Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<AiOutlineDislike/>}>
                  Dislike
                </Button>
              </CardFooter>
            </Card>
        </div>
      )
}