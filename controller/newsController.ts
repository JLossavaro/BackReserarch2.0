import NewsService from "../services/newsService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class NewsController{


     

     get(req, res) {
        NewsService.get()
        .then(news => Helper.SendResponse(res,HttpStatus.OK, news))
        .catch(error => console.error.bind(console, `error ${error}`));
     }

     getById(req,res){

     const _id = req.params.id;

     NewsService.getById(_id)
     .then(news => Helper.SendResponse(res,HttpStatus.OK, news))
     .catch(error => console.error.bind(console, `error ${error}`));
     }

     create(req, res){
         let vm = req.body;

         NewsService.create(vm)
         .then(news=> 
            Helper.SendResponse(res,HttpStatus.OK, "Noticia cadastrada com sucesso!"))

         .catch(error=>console.error.bind(console, `Error ${error}`));
     }

     update(req, res){
         const _id = req.params.id;
         let vm = req.body;

         NewsService.update(_id,vm)
         .then(news=> 
         Helper.SendResponse(res,HttpStatus.OK, 'Noticia foi atualizada com sucesso!'))

         .catch(error => console.error.bind(console, `Error ${error}`));
     }
     
     delete(req, res){
     const _id = req.params.id;
     NewsService.delete(_id)
          .then(
         () => Helper.SendResponse(res,HttpStatus.OK,"Noticia deletada com sucesso!") 
         
         )
          .catch(error => console.error.bind(console, `Error ${error}`));


     }
 
}


export default new NewsController();