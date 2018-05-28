import { Express, Router, RequestHandler, ErrorRequestHandler } from 'express';
import { AppConfig } from './config';
import express = require('express');
import bodyParser = require('body-parser');
import morgan = require('morgan');
import { Logger, LoggerFactory } from './common';
import { RequestHandlerParams } from "@types/express-serve-static-core";

export class ExpressAppFactory {

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  private constructor() {}

  static getExpressApp(
    appConfig: AppConfig,
    apiRouter: Router,
    preApiRouterMiddlewareFns: Array<RequestHandler | ErrorRequestHandler | RequestHandlerParams>,
    postApiRouterMiddlewareFns: Array<RequestHandler | ErrorRequestHandler | RequestHandlerParams>): Express {

    const app: Express = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    if (appConfig.serveStatic) {
      ExpressAppFactory.LOGGER.info(`Serving static files from public`);
      app.use(express.static('public'));
    }

    if (appConfig.enableHttpRequestLogging) {
      ExpressAppFactory.LOGGER.info(`Request logging is enabled`);
      app.use(morgan('combined'));
    }

    if (preApiRouterMiddlewareFns != null) {
      postApiRouterMiddlewareFns.forEach((middlewareFn) => app.use(middlewareFn));
    }

    app.use('/api', apiRouter);

    if (postApiRouterMiddlewareFns != null) {
      postApiRouterMiddlewareFns.forEach((middlewareFn) => app.use(middlewareFn));
    }

    return app;
  }

}
