import { existsSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'
import { ImageSize } from '../types/image-size'
import { IMAGE_MIME_TYPES } from './constants'

class ImageProcessing {
  public static async isImageExist (img: string): Promise<string> {
    for(let mime of IMAGE_MIME_TYPES){
        let isExist = await existsSync(this.getImage(img)+`.${mime}`);
        if(isExist){
            return this.getImage(img)+`.${mime}`
        }
    }
    return ""
  }

  public static async isImageThumbnailed (img: string): Promise<string> {
    for(let mime of IMAGE_MIME_TYPES){
        let isExist = await existsSync(this.getThumb(img)+`.${mime}`);
        if(isExist){
            return this.getThumb(img)+`.${mime}`
        }
    }
    return ""
  }

  public static getOutputName(inputPath:string,filename:string,size:ImageSize):string{
    let outputPath = "output";
    let output = inputPath.split('\\');
    let width = size.width;
    let height = size.height;
    console.log(output);
    

    if (output.length > 0) {
        let mime = output[output.length - 1].split('.')[1];
        outputPath = filename+'_'+width.toString()+'_'+height.toString()+'.' + mime;
    }

    return outputPath;
  }

  public static getImage (img: string): string {
    return join(__dirname, '../../', '/full', img)
  }

  public static getThumb (img: string): string {
    return join(__dirname, '../../', '/thumb', img)
  }

  public static async resizeImage (
    inputPath: string,
    outputPath: string,
    size: ImageSize
  ) {
    return await sharp(inputPath).resize(size).toFile(outputPath)
  }
}

export { ImageProcessing }
