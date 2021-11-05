import { Navigation } from '~/features/Wizard/Navigation/Navigation'
import { Box } from '@chakra-ui/react'
import { Form } from '~/features/Wizard/Form/Form'
import { useEffect } from 'react'
import { moveFirst } from '~/features/Wizard/state'

export const Wizard = () => {
    useEffect(() => {
        moveFirst()
    }, [])

    return (
        <Box d='flex'>
            <Navigation />
            <Form />
        </Box>
    )
}
