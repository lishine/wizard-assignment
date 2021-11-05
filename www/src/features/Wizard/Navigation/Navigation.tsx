import { Row } from '~/features/Wizard/Navigation/Row'
import { Box } from '@chakra-ui/react'

export const Navigation = () => {
    return (
        <Box
            data-component='Navigation'
            d='grid'
            gridRowGap='10px'
            gridTemplateColumns='auto auto'
            justifyContent='flex-start'
            alignItems='center'
        >
            <Row type='section' decoratorText='A' label='section label' />
            <Row type='step' label='step label' />
        </Box>
    )
}
