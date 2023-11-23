import 'module-alias/register';
import 'express-async-errors';
import 'dotenv/config';
// import swaggerUi from 'swagger-ui-express';
import express from 'express';
import { errorMiddleware } from '@middlewares/error';
import routes from './infra/router/routes';
import apiMetrics from 'prometheus-api-metrics';
import { errors } from 'celebrate';
// import swaggerDocsCustomers from './doc/customers.swagger.json';
import mongoose from './infra/database/database';

const main = async () => {
  const app = express();

  await mongoose.db;

  app.use(express.json());

  app.use(errors());
  app.use(routes);
  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocsCustomers));
  app.use(apiMetrics());
  app.use(errorMiddleware);

  app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}/api-docs`);
    console.log(`http://localhost:${process.env.PORT}/api`);
  });
};

main();
