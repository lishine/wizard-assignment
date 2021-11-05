import { Row } from '~/features/Wizard/Navigation/Row'
import { Box } from '@chakra-ui/react'
import { wizardData } from '~/features/Wizard/data'
import { useEffect, useState } from 'react'
import { useCurrentState } from '~/features/Wizard/state'

export const Navigation = () => {
    let { section: currentSection, step: currentStep } = useCurrentState()
    const [childs, setChilds] = useState<any[]>([])

    useEffect(() => {
        let _childs: any[] = []
        wizardData.sections.map((section, i) => {
            _childs.push(
                <Row
                    key={section.name}
                    isCurrent={currentSection?.name === section.name}
                    type='section'
                    decoratorText={String.fromCharCode('A'.charCodeAt(0) + i)}
                    label='section label'
                />
            )
            section.steps.map((step) => {
                _childs.push(
                    <Row
                        key={step.name}
                        isCurrent={currentStep?.name === step.name}
                        type='step'
                        label={step.name}
                    />
                )
            })
        })
        setChilds(_childs)
    }, [currentSection, currentStep])

    return (
        <Box
            data-component='Navigation'
            d='grid'
            gridRowGap='10px'
            gridTemplateColumns='auto auto'
            justifyContent='flex-start'
            alignItems='center'
        >
            {childs}
        </Box>
    )
}
