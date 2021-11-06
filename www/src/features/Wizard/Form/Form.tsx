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
    Flex,
    VStack,
    BoxProps,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useHandler } from 'react-handler-hooks'
import { moveNext, useCurrentState } from '~/features/Wizard/state'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { WithRequiredChildren } from '~/common/typeUtils'

export const MotionBox = motion<BoxProps>(Box)

const Show = ({ children }: WithRequiredChildren) => {
    return (
        <AnimatePresence>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { default: { duration: 0.15, type: 'tween', stiffness: 60 } },
                }}
                exit={{ opacity: 0 }}
            >
                {children}
            </MotionBox>
        </AnimatePresence>
    )
}

export const Form = () => {
    let { section, step, isLast } = useCurrentState()

    const [isDisabled, setIsDisabled] = useState(false)

    const [multiValue, setMultiValue] = useState('')

    useEffect(() => {
        if (step?.type === 'multi') {
            setMultiValue((step.values as string[])[0])
        }
    }, [step])

    useEffect(() => {
        setIsDisabled(isLast)
    }, [isLast])

    let onClickNext = useHandler((e: any) => {
        e.preventDefault()
        moveNext()
    })

    if (!step) {
        return null
    }

    return (
        <Flex
            as='form'
            data-component='Form'
            ml={12}
            min-h='full'
            w='400px'
            flexDir='column'
            justifyContent='space-between'
        >
            <Box flex={1} w='200px'>
                <Box mb={2}>{step?.question}</Box>
                {step.type === 'string' && (
                    <Show>
                        <Input autoFocus />
                    </Show>
                )}
                {step.type === 'number' && (
                    <Show>
                        <NumberInput>
                            <NumberInputField autoFocus />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Show>
                )}
                {step.type === 'multi' && (
                    <RadioGroup value={multiValue}>
                        <Stack direction='row'>
                            {(step.values as string[]).map((s) => (
                                <Show key={s}>
                                    <Radio value={s}>{s}</Radio>
                                </Show>
                            ))}
                        </Stack>
                    </RadioGroup>
                )}
            </Box>
            <VStack alignSelf='end' h='70px'>
                <Button
                    type='submit'
                    rightIcon={<ChevronRightIcon />}
                    isDisabled={isDisabled}
                    onClick={onClickNext}
                    w='100px'
                    alignSelf='end'
                >
                    Next
                </Button>
                {(step.type === 'number' || step.type === 'string') && (
                    <Box>
                        Press <strong>Enter</strong> &#8629; or click next
                    </Box>
                )}
            </VStack>
        </Flex>
    )
}
