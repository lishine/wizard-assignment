export const wizardData = {
    name: 'My wizard',
    sections: [
        {
            name: 'Section 1',
            steps: [
                { name: 'step 1', question: 'What is your name?', type: 'string' },
                { name: 'step 2', question: 'What is your age?', type: 'number' },
                { name: 'last step', question: 'gender?', type: 'multi', values: ['MALE', 'FEMALE'] },
            ],
        },
        {
            name: 'Section 2',
            steps: [
                {
                    name: 'another step',
                    question: 'What shirt size do you wear?',
                    type: 'multi',
                    values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                },
            ],
        },
    ],
}
