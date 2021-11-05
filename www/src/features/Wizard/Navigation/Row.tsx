import { Box, BoxProps } from '@chakra-ui/react'
import { RowType } from '~/features/Wizard/types'

const labelCss: Record<RowType, BoxProps> = {
    section: {
        fontSize: '30px',
    },
    step: {
        fontSize: '20px',
    },
}

const decoratorCss: Record<RowType, BoxProps> = {
    section: {
        borderRadius: '50%',
        borderWidth: '2px',
        w: '40px',
        h: '40px',
    },
    step: {
        borderRadius: '50%',
        borderWidth: '2px',
        w: '20px',
        h: '20px',
    },
}

export const Row = ({
    isCurrent = false,
    type,
    decoratorText,
    label,
}: {
    isCurrent?: boolean
    type: RowType
    decoratorText?: string
    label: string
}) => {
    return (
        <>
            <Box d='flex' alignItems='center' justifyContent='center'>
                <Box
                    data-component='Decorator'
                    {...decoratorCss[type]}
                    borderColor={isCurrent ? 'blue' : 'grey'}
                    d='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    {decoratorText}
                </Box>
            </Box>
            <Box ml={4} textColor={isCurrent ? 'blue' : 'grey'} {...labelCss[type]}>
                {label}
            </Box>
        </>
    )
}
