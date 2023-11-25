import React, { useState } from 'react'
import { Box, Card, CardBody, Heading, IconButton, Image, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
import Loader from './Loader';
const Dashboard = () => {
    const [currency, setCurrency] = useState("")
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const handleSearch = (e) => {
        setCurrency(e.target.value)
    }

    const handleSearchCurrency = () => {
        setData([])
        setLoader(true)
        const API = `https://restcountries.com/v3.1/currency/${currency}`
        axios.get(API)
            .then(res => {
                setData(res.data)
                setError(true)
                setLoader(false)

            })
            .catch((error)=> {
               
                setError(true)
                setLoader(false)
            })
    }
    return (
        <>
            <Box width={"20%"}>
                <InputGroup>
                    <Input placeholder="Search..." onChange={(e) => handleSearch(e)} value={currency} width={"100%"} textAlign={"center"} />
                    <InputRightElement>
                        <IconButton
                            aria-label="Search"
                            icon={<SearchIcon />}
                            onClick={handleSearchCurrency}
                        />
                    </InputRightElement>
                </InputGroup>
            </Box>

            <Card mt={"20px"} boxShadow={"none"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={"10px"}>
                {
                    data.length > 0 ? data.map((country, index) => <CardBody key={index} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} >
                        <Image
                            src={country.flags.png}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            ml={"20px"}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Name: {country.name.common}</Heading>
                            <Text>
                                Capital: {country.capital[0]}
                            </Text>

                        </Stack>
                    </CardBody>
                    ) : error ? <Box width={"100%"} height={"80vh"} >
                    <Text fontSize={"2xl"} as={"b"} position={"absolute"} top={"50%"} left={"45%"}> Invalid currency  ... </Text>
                </Box> : <Box width={"100%"} height={"80vh"} >
                    <Text fontSize={"2xl"} as={"b"} position={"absolute"} top={"50%"} left={"45%"}> No Countary Data ... </Text>
                </Box>}
            </Card>
           {
            loader && <Loader />
           } 
        </>
    )
}

export default Dashboard
