const sum = require('../src/utils/test2').default

describe('加法', () => {
	it('2+2', () => {
		const a = 2
		const b = 2
		const result = 2 + 2
		expect(sum(a, b)).toBe(result)
	})
})