import cloudiary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
  return new Promise((resolve) => {
    cloudiary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}
