import {sum, forEach} from '../src/utils/test2'

describe('加法', () => {
    it('2+2', () => {
        const a = 2
        const b = 2
        const result = 2 + 2
        expect(sum(a, b)).toBe(result)
    })
})

describe('forEach', () => {
    it('遍历测试', () => {
        const arr = []
        const callBack = (...args) => {
            arr.push(args)
        }
        forEach([1, 2], callBack)
        expect(arr.length).toBe(2)
        expect(arr[0][0]).toBe(1)
        expect(arr[1][0]).toBe(2)
    })
    it('遍历测试mock',()=>{
        const mockFn=jest.fn()
        forEach([1,2],mockFn)
        expect(mockFn.mock.calls.length).toBe(2)
        expect(mockFn.mock.calls[0][0]).toBe(1)
        expect(mockFn.mock.calls[1][0]).toBe(2)
    })
})