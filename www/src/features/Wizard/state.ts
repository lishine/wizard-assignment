import Router from 'next/router'
import { isEmptyObject } from '~/common/utils'
import { wizardData } from '~/features/Wizard/data'
import { RowType } from '~/features/Wizard/types'

const goUrl = ({ url }: { url: Record<string, any> }) => {
    Router.push(url, url, { shallow: true })
}

export const getCurrentState = () => {
    let section = wizardData.sections.find((s) => s.name === Router.query.section)
    let step = section?.steps.find((s) => s.name === Router.query.step)

    return { section, step }
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
    let currentSectionIndex = wizardData.sections.findIndex((s) => s.name === Router.query.section)
    let currentSection = wizardData.sections[currentSectionIndex]
    let currentStepIndex = currentSection.steps.findIndex((s) => s.name === Router.query.step)

    let query: { [index in RowType]?: string } = {}

    if (currentSectionIndex < wizardData.sections.length - 1) {
        query.section = wizardData.sections[currentSectionIndex + 1].name
    }
    if (currentStepIndex < currentSection.steps.length - 1) {
        query.step = currentSection.steps[currentStepIndex + 1].name
    }
    if (!isEmptyObject(query)) {
        goUrl({
            url: {
                query,
            },
        })
    }
}
