import { existsSync } from "fs";
class ImageProcessing {
  public static async isImageExist(img: String): Promise<Boolean> {
    return await existsSync("/images");
  }
}

export { ImageProcessing };
