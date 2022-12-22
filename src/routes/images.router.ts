import express, { Router } from 'express'
import { ImageThumbChecker } from '../middlewares/images.middleware'
import { ImageProcessing } from '../utils/image-processing'
import { isNull } from '../utils/string-helpers'
const imageRouter: Router = express.Router()

imageRouter.get(
  '/',
  ImageThumbChecker,
  async (req: express.Request, res: express.Response) => {
    console.log(req.query)
    const filename: string = req.query?.filename as unknown as string
    let width: number = req.query?.width as unknown as number
    let height: number = req.query?.height as unknown as number

    if (isNull(filename)) {
      res.status(501).send('Filename required')
      return
    }

    try {
      const inputPath = await ImageProcessing.isImageExist(filename)
      console.log('INPUT', inputPath)
      if (!isNull(inputPath)) {
        let outputPath = 'output'
        if (width > 0 && height > 0) {
          width = Number(width)
          height = Number(height)
          console.log('Resize the image file')
          outputPath = ImageProcessing.getOutputName(inputPath, filename, {
            width,
            height
          })
          outputPath = ImageProcessing.getThumb(outputPath)
          await ImageProcessing.resizeImage(inputPath, outputPath, {
            width,
            height
          })
        } else {
          res.status(200).sendFile(inputPath)
          return
        }

        console.log(outputPath)
        res.status(200).sendFile(outputPath)
      } else {
        res.status(501).send("The image doesn't exist")
        return
      }
    } catch (error) {
      console.log(error)
      res.status(501).send('Error occured!')
    }
  }
)

export { imageRouter }
