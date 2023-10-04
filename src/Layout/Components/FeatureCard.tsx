import { Box, Text } from '@chakra-ui/react'
import { BusFront } from 'lucide-react'
import React from 'react'

const FeatureCard = ({text,description,icon}) => {
  return (
    <Box
    display={"flex"}
    flexDirection={"column"}
    gap={"5"}
    justifyContent={"center"}
    alignItems={"center"}>
    {/* <BusFront size={30} color="green" /> */}
    {icon}
    <Box display={"flex"} flexDirection={"column"} gap={2} justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={"xl"} fontWeight={"semibold"}>
        {text}
      </Text>
      <Text fontSize={"md"} color={"GrayText"}>{description}</Text>
    </Box>
  </Box>
  )
}

export default FeatureCard