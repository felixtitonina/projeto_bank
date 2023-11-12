import { celebrate, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validatorQueryMiddleware = (schema: any) => {
  return celebrate(
    {
      [Segments.QUERY]: schema,
    },
    {
      abortEarly: false,
      messages: messages,
    },
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validatorBodyMiddleware = (schema: any) => {
  return celebrate(
    {
      [Segments.BODY]: schema,
    },
    {
      abortEarly: false,
      messages: messages,
    },
  );
};
