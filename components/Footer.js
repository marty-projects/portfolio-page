import {Box} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} font-size="sm">
            {new Date().getFullYear()} Martyna Chmielinska
        </Box>
    )
}

export default Footer