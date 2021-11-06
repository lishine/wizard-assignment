import { Row } from '~/features/Wizard/Navigation/Row'
import { Box } from '@chakra-ui/react'
import { wizardData } from '~/features/Wizard/data'
import { useEffect, useState } from 'react'
import { useCurrentState } from '~/features/Wizard/state'

export const Navigation = () => {
    const [childs, setChilds] = useState<any[]>([])

    useEffect(() => {
        let _childs: any[] = []
        wizardData.sections.map((section, i) => {
            _childs.push(
                <Row
                    href={{ query: { section: section.name, step: section.steps[0].name } }}
                    key={section.name}
                    rowName={section.name}
                    type='section'
                    decoratorText={String.fromCharCode('A'.charCodeAt(0) + i)}
                    label={section.name}
                />
            )
            section.steps.map((step) => {
                _childs.push(
                    <Row
                        href={{ query: { section: section.name, step: step.name } }}
                        key={`${section.name}${step.name}`}
                        type='step'
                        label={step.name}
                        rowName={step.name}
                    />
                )
            })
        })
        setChilds(_childs)
    }, [])

    return (
        <Box data-component='Navigation' d='grid' gridRowGap='10px' gridTemplateColumns='auto'>
            {childs}
        </Box>
    )
}
