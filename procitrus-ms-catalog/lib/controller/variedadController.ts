import express = require("express");
const clientRequest = require('request');
import { ListarVariedadRequest } from '../model/request/listarVariedadRequest';
import { urlService } from '../util/apiConstant';
import { ListarVariedadResponse, ListarVariedadResult } from "../model/response/listarVariedadResponse";


export class VariedadController {
    constructor() { }
    public listarVariedad(reqParam: express.Request, resParam: express.Response) {
        let request: ListarVariedadRequest = reqParam.body;

        clientRequest.post(urlService.variedadListar, {
            json: request.idProducto
            }, (error, res, body) => {
                if (error) {
                    console.error(error);
                    resParam.json(error);
                    return;
                }
               
                let response: ListarVariedadResponse= new ListarVariedadResponse();
                response.result= new ListarVariedadResult();
                response.result.items= body.resultado;
                console.log(`statusCode: ${res.statusCode}`);
                console.log(response);
                resParam.json(response);                
        });

    }
}