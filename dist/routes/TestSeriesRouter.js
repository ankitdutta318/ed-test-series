"use strict";
const express_1 = require('express');
const Tests = require('../data/tseries');
class TestSeriesRouter {
    /**
     * Initialize the TestSeriesRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all TestSeries.
     */
    getAll(req, res, next) {
        res.send(Tests);
    }
    /**
   * GET one testseries by id
   */
    getOne(req, res, next) {
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
exports.TestSeriesRouter = TestSeriesRouter;
// Create the TestSeriesRouter, and export its configured Express.Router
const TestSeriesRoutes = new TestSeriesRouter();
TestSeriesRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestSeriesRoutes.router;
