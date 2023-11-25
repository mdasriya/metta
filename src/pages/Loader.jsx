import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Spinner } from '@chakra-ui/react'
const Loader = () => {
  return (
    <Box w={"90%"} height={"80vh"}  position={"absolute"} top={"40vh"} left={"50%"}>
      <Spinner
    
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
<Text>Please Wait ...</Text>
    </Box>
  )
}

export default Loader
