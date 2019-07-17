import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import cors = require('cors');
import { VariedadRoutes } from './route/variedadRoute';

class App {
    public app: express.Application = express();
    public variedadRoute: VariedadRoutes= new VariedadRoutes(this.app);

    public mongoUrl: string = '';

    constructor() {

        this.mongoUrl = `mongodb://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASS}@${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`;
        console.log(this.mongoUrl);

        this.config();
        this.mongoSetup();

        this.variedadRoute.init();

        this.app.route('/health')
            .get(function(req, res, next){
                res.json({"status":"ok"});
            });
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
        this.app.use(cors());
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;

        const options = {
            replicaSet: process.env.DB_MONGO_REPLICASET,
            useNewUrlParser: true,
            ssl: true,
            authSource: process.env.DB_MONGO_USERS
        };

        mongoose.connect(this.mongoUrl, options, function (error) {
            console.log(error);
        });

       
    }
}

export default new App().app;
