import { isNull } from '../../utils/string-helpers'

describe('My String Helper', () => {
  it('isNull should return true if the value is empty', () => {
    expect(isNull('')).toBe(true)
  })

  it('isNull should return true if the value is 0', () => {
    expect(isNull(0)).toBe(true)
  })
  it('isNull should return true if the value is null', () => {
    expect(isNull(null as unknown as object)).toBe(true)
  })

  it('isNull should return true if the value is undefined', () => {
    expect(isNull(undefined as unknown as object)).toBe(true)
  })

  it('isNull should return false if the value is defined', () => {
    expect(isNull('p')).toBe(false)
  })
})
