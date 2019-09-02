//criar query
import NewsRepository from '../repository/newsRepository'; //importa a classe do repositório
// \/ aqui criamos uma classe e colocamos nossas querys dentro do service
class NewsService{
     get(){
         return NewsRepository.find({});
     }
     getById(_id){
         return NewsRepository.findById(_id);


     }

     create(news){
          return NewsRepository.create(news)

    } 
  
     update(_id,news){
          return NewsRepository.findByIdAndUpdate(_id,news);

    }
      delete(_id){
           return NewsRepository.findByIdAndRemove(_id); 
           
    }

}
export default new NewsService();//exportando para utilizar na controller