import {Router, Request, Response, NextFunction} from 'express';
const Tests = require('../data/tseries');

export class TestSeriesRouter {
  router: Router

  /**
   * Initialize the TestSeriesRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all TestSeries.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Tests);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the TestSeriesRouter, and export its configured Express.Router
const TestSeriesRoutes = new TestSeriesRouter();
TestSeriesRoutes.init();

export default TestSeriesRoutes.router;