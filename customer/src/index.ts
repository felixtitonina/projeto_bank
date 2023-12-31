import 'module-alias/register';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import { AppDataSource } from './infra/database/data-source';
import { errorMiddleware } from '@middlewares/error';
import routes from './infra/router/routes';
import apiMetrics from 'prometheus-api-metrics';
import { errors } from 'celebrate';
import swaggerDocsCustomers from './doc/customers.swagger.json';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use(errors());
    app.use(routes);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocsCustomers));
    app.use(apiMetrics());
    app.use(errorMiddleware);
    console.log(`http://localhost:3002/api-docs`);
    console.log(`http://localhost:3002/api`);
    return app.listen(process.env.PORT);
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
