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
 * GET one testseries by id
 */
public getOne(req: Request, res: Response, next: NextFunction) {
  let query = req.params.id;
  let test = Tests.find(test => test._id === query);
  if (test) {
    res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        test
      });
  }
  else {
    res.status(404)
      .send({
        message: 'No test found with the given id.',
        status: res.status
      });
  }
}


  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }

}

// Create the TestSeriesRouter, and export its configured Express.Router
const TestSeriesRoutes = new TestSeriesRouter();
TestSeriesRoutes.init();

export default TestSeriesRoutes.router;