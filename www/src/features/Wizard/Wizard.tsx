import { Navigation } from '~/features/Wizard/Navigation/Navigation'
import { Box, Button } from '@chakra-ui/react'
import { Form } from '~/features/Wizard/Form/Form'
import { useEffect } from 'react'
import { moveFirst } from '~/features/Wizard/state'

export const Wizard = () => {
    useEffect(() => {
        moveFirst()
    }, [])

    return (
        <Box data-component='Wizard'>
            <Box d='flex'>
                <Navigation />
                <Form />
            </Box>
            <Button onClick={moveFirst}>Reset</Button>
        </Box>
    )
}
