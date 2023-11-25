import React, { useState } from 'react'
import { Box, Card, CardBody, Heading, IconButton, Image, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
const Dashboard = () => {
    const [currency, setCurrency] = useState("")
    const [data, setData] = useState([])

const handleSearch = (e) => {
    console.log(e.target.value)
    setCurrency(e.target.value)
   
}

const handleSearchCurrency = () => {
    const API = `https://restcountries.com/v3.1/currency/${currency}`
    axios.get(API)
    .then(res=> {
       setData(res.data)
       console.log("capital",res.data[0].capital[0])
    })
}
console.log("data", data)
  return (
    <>
    <Box  width={"20%"}>
    <InputGroup>
      <Input placeholder="Search..." onChange={(e)=>handleSearch(e)} value={currency} width={"100%"} textAlign={"center"}/>
      <InputRightElement>
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          onClick={handleSearchCurrency}
          />
      </InputRightElement>
    </InputGroup>
  </Box>
  
  <Card width={"100%"} mt={"20px"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
  {
data &&  data.map((country, index)=> <CardBody>
<Image
  src={country.flags.png}
  alt='Green double couch with wooden legs'
  borderRadius='lg'
/>
<Stack mt='6' spacing='3'>
  <Heading size='md'>Living room Sofa</Heading>
  <Text>
  Capita: {country.capital[0]}
  </Text>
 
</Stack>
</CardBody>
    )}
  </Card>
          </>
  )
}

export default Dashboard
