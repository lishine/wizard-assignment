import Router, { useRouter } from 'next/router'
import { isEmptyObject } from '~/common/utils'
import { wizardData } from '~/features/Wizard/data'

const goUrl = ({ url }: { url: Record<string, any> }) => {
    Router.push(url, url, { shallow: true })
}

export const useCurrentState = () => {
    let router = useRouter()
    let currentSectionIndex = wizardData.sections.findIndex(
        (s) => s.name === decodeURI(router.query.section as string)
    )
    let currentSection = wizardData.sections[currentSectionIndex]
    let currenStepIndex = currentSection?.steps.findIndex(
        (s) => s.name === decodeURI(router.query.step as string)
    )
    let currentStep = currentSection?.steps[currenStepIndex]

    let isLast =
        currentSectionIndex === wizardData.sections.length - 1 &&
        currenStepIndex === currentSection?.steps.length - 1

    return { section: currentSection, step: currentStep, isLast }
}

export const moveFirst = () => {
    goUrl({
        url: {
            query: {
                section: encodeURI(wizardData.sections[0].name),
                step: encodeURI(wizardData.sections[0].steps[0].name),
            },
        },
    })
}

export const moveNext = () => {
    let query = Router.query
    let currentSectionIndex = wizardData.sections.findIndex(
        (s) => s.name === decodeURI(query.section as string)
    )
    let currentSection = wizardData.sections[currentSectionIndex]
    let currentStepIndex = currentSection.steps.findIndex((s) => s.name === decodeURI(query.step as string))

    if (currentStepIndex < currentSection.steps.length - 1) {
        query.step = encodeURI(currentSection.steps[currentStepIndex + 1].name)
    } else if (currentSectionIndex < wizardData.sections.length - 1) {
        let newSection = wizardData.sections[currentSectionIndex + 1]
        query.section = encodeURI(newSection.name)
        query.step = encodeURI(newSection.steps[0].name)
    }

    console.log('currentSectionIndex', currentSectionIndex)
    console.log('currentStepIndex', currentStepIndex)
    console.log('query', query)
    if (!isEmptyObject(query)) {
        goUrl({
            url: {
                query,
            },
        })
    }
}
