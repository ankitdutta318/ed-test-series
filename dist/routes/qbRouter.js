"use strict";
const express_1 = require('express');
const Questions = require('../data');
class qbRouter {
    /**
     * Initialize the qbRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Questions.
     */
    getAll(req, res, next) {
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
exports.qbRouter = qbRouter;
// Create the HeroRouter, and export its configured Express.Router
const qbRoutes = new qbRouter();
qbRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = qbRoutes.router;
