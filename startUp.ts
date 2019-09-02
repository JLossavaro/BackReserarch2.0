import * as express from "express"
import * as bodyParser from 'body-parser';//json/carrystrng

import Database from "./infra/db";//base de dados
import NewsController from './controller/newsController';

class StartUp{
public app: express.Application;
private _db: Database;
private bodyParser;

     constructor(){
     this.app = express();
     this._db = new Database();
     this._db.createConnection();
     this.middler();
     this.routes();

}

middler(){
   this.app.use(bodyParser.json());
   this.app.use(bodyParser.urlencoded({extended : false}))
}


routes(){//req = requisição, 

  this.app.route("/api/news").get(NewsController.get);
  this.app.route("/api/news/:id").get(NewsController.getById);
  this.app.route('/api/news').post(NewsController.create);
  this.app.route('/api/news/:id').put(NewsController.update);
  this.app.route('/api/news/:id').delete(NewsController.delete);
  this.app.route('/startup.html')

}
}
export default new StartUp();

