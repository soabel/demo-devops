import { VariedadController } from '../controller/variedadController';
import express = require('express');

export class VariedadRoutes {
    private variedadController: VariedadController = new VariedadController();
    private _app: express.Application;
    constructor(app: express.Application) {
        this._app = app;
    }
    public init(): void {
        this._app.route('/api/variedad/listar')
            .post(this.variedadController.listarVariedad);
    }

}