import 'module-alias/register';
import 'express-async-errors';
import express from 'express';
import { AppDataSource } from './infra/database/data-source';
import { errorMiddleware } from '@middlewares/error';
import routes from './infra/router/routes';
import apiMetrics from 'prometheus-api-metrics';
import { errors } from 'celebrate';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use(errors());
    app.use(routes);
    app.use(apiMetrics());
    app.use(errorMiddleware);
    return app.listen(process.env.PORT);
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
