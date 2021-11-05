import {
    Box,
    Button,
    Input,
    NumberInput,
    RadioGroup,
    Stack,
    Radio,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useHandler } from 'react-handler-hooks'
import { moveNext, useCurrentState } from '~/features/Wizard/state'

export const Form = () => {
    let { section, step, isLast } = useCurrentState()

    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setIsDisabled(isLast)
    }, [isLast])

    let onClickNext = useHandler(() => {
        moveNext()
    })

    if (!step) {
        return null
    }

    return (
        <Box>
            <Box>{step?.question}</Box>
            {step.type === 'string' && <Input />}
            {step.type === 'number' && (
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            )}
            {step.type === 'multi' && (
                <RadioGroup defaultValue={(step.values as string[])[0]}>
                    <Stack direction='row'>
                        {(step.values as string[]).map((s) => (
                            <Radio key={s} value={s}>
                                {s}
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
            )}
            <Button isDisabled={isDisabled} onClick={onClickNext}>
                Next
            </Button>
        </Box>
    )
}
