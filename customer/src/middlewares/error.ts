/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../helpers/api-erros';
import { celebrate, Joi, Segments, isCelebrateError } from 'celebrate';

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const errorObject = error;
  // console.log('**** error.message ******', errorObject.message);
  // console.log('**** error.details ******', JSON.stringify(errorObject));
  if (isCelebrateError(error)) {
    let data = {};
    const buildObjWithValue = (paths: string[], value = '') => {
      return paths.reduceRight(
        (acc, item, index) => ({
          [item]: index === paths.length - 1 ? value : acc,
        }),
        {},
      );
    };

    const isObject = (item: any) => {
      return item && typeof item === 'object' && !Array.isArray(item);
    };
    const mergeDeep = (target: any, source: any) => {
      const output = Object.assign({}, target);
      if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
          if (isObject(source[key])) {
            if (!(key in target)) {
              Object.assign(output, { message: source[key] });
            } else {
              output[key] = mergeDeep(target[key], source[key]);
            }
          } else {
            Object.assign(output, { message: source[key] });
          }
        });
      }
      return output;
    };

    for (const [segment, joiError] of error.details.entries()) {
      joiError.details.forEach((err) => {
        const obj = buildObjWithValue(
          err.path.map((item) => item.toString()),
          err.message,
        );
        data = mergeDeep(data, obj);
      });
    }
    return res.status(409).json(data);
  }

  const message = error.message ? error.message : { message: 'Internal Server Error' };
  return res.status(statusCode).json({ message });
};
