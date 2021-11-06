import { Navigation } from '~/features/Wizard/Navigation/Navigation'
import { VStack, Box, Button, Heading } from '@chakra-ui/react'
import { Form } from '~/features/Wizard/Form/Form'
import { useEffect } from 'react'
import { moveFirst } from '~/features/Wizard/state'
import { wizardData } from '~/features/Wizard/data'

export const Wizard = () => {
    useEffect(() => {
        moveFirst()
    }, [])

    return (
        <VStack data-component='Wizard' mt={20}>
            <Heading mb={10}>{wizardData.name}</Heading>
            <Box>
                <Box d='flex'>
                    <Navigation />
                    <Form />
                </Box>
                <Button mt={8} onClick={moveFirst}>
                    Reset
                </Button>
            </Box>
        </VStack>
    )
}
