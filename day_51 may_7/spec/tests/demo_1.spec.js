xdescribe('This is demo_1 spec file', () => {
    it('This is testcase-1', () => {
        console.log('This is it-1')
    })
    it('This is testcase-2', () => {
        console.log('This is it-2')
    })
    it('This is testcase-3', () => {
        console.log('This is it-3')
    })
    beforeAll(() => {
        console.log('Before All called...')
    })
    afterAll(() => {
        console.log('After All called...')
    })
    beforeEach(() => {
        console.log('Before Each called...')
    })
    afterEach(() => {
        console.log('Afetr Each called...')
    })
})