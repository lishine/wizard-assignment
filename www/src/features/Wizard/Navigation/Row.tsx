import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { Link, Url } from '~/components/Link'
import { useCurrentState } from '~/features/Wizard/state'
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
    type,
    decoratorText,
    label,
    href,
    rowName,
}: {
    type: RowType
    decoratorText?: string
    label: string
    href: Url
    rowName: string
}) => {
    let { section: currentSection, step: currentStep } = useCurrentState()

    let isCurrent = false
    if (type === 'section') {
        isCurrent = currentSection?.name === rowName
    } else {
        isCurrent = currentStep?.name === rowName
    }

    return (
        <Link href={href}>
            <Flex>
                <Box d='flex' alignItems='center' justifyContent='center' w='50px'>
                    <Box
                        data-component='Decorator'
                        {...decoratorCss[type]}
                        borderColor={isCurrent ? 'darkblue' : 'grey'}
                        d='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        {decoratorText}
                    </Box>
                </Box>
                <Box ml={4} textColor={isCurrent ? 'black' : 'grey'} {...labelCss[type]}>
                    {label}
                </Box>
            </Flex>
        </Link>
    )
}
