import * as express from "express"
import * as bodyParser from 'body-parser';//json/carrystrng
import * as jwt from 'jsonwebtoken';

import Database from "./infra/db";//base de dados
import NewsController from './controller/newsController';
import UserController from './controller/userController';
import LoginController from './controller/LoginController';

class StartUp{
public app: express.Application;
private _db: Database;
private bodyParser;

     constructor(){

     this.app = express();//app recebe express para utilizar no codigo
     this._db = new Database();
     this._db.createConnection();
     this.middler();
     this.routes();

}

middler(){//midlers são responsaveis pelas requisiçoes http
   this.app.use(bodyParser.json());
   this.app.use(bodyParser.urlencoded({extended : false}))
}


routes(){//req = requisição, 
  this.app.route("/api/login").post(LoginController.post);
  ////////////////////////////////////////////////////////
  this.app.route("/api/news").get(NewsController.get);
  this.app.route("/api/news/:id").get(NewsController.getById);
  this.app.route('/api/news').post(NewsController.create);
  this.app.route('/api/news/:id').put(NewsController.update);
  this.app.route('/api/news/:id').delete(NewsController.delete);
/////////////////////////////////////////////////////////////
  this.app.route("/api/user").get(UserController.get);
  this.app.route("/api/user/:id").get(UserController.getById);
  this.app.route('/api/user').post(UserController.create);
  this.app.route('/api/user/:id').put(UserController.update);
  this.app.route('/api/user/:id').delete(UserController.delete);


}
}
export default new StartUp();

