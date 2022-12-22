import { ImageProcessing } from '../../utils/image-processing'

const NOT_EXIST_INPUT = 'fsdfsdf'
const EXIST_INPUT = 'santamonica'

describe('My Image Processing', () => {
  it(`'${NOT_EXIST_INPUT}' file should not exist`, async () => {
    const result = await ImageProcessing.isImageExist(NOT_EXIST_INPUT)
    expect(result).not.toBeTruthy()
  })
  it(`'${EXIST_INPUT}' file should exist`, async () => {
    const result = await ImageProcessing.isImageExist(EXIST_INPUT)
    expect(result).toBeTruthy()
  })
})
