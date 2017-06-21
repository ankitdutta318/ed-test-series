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
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.TestSeriesRouter = TestSeriesRouter;
// Create the TestSeriesRouter, and export its configured Express.Router
const TestSeriesRoutes = new TestSeriesRouter();
TestSeriesRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestSeriesRoutes.router;
