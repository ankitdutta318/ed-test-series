import {Router, Request, Response, NextFunction} from 'express';
const Questions = require('../data/data');

export class qbRouter {
  router: Router

  /**
   * Initialize the qbRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Questions.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Questions);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const qbRoutes = new qbRouter();
qbRoutes.init();

export default qbRoutes.router;