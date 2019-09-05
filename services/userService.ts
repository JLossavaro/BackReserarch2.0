//criar query
import UserRepository from '../repository/userRepository'; 
class UserService{
     get(){
         return UserRepository.find({});
     }
     getById(_id){
         return UserRepository.findById(_id);


     }

     create(user){
          return UserRepository.create(user)

    } 
  
     update(_id,user){
          return UserRepository.findByIdAndUpdate(_id, user);

    }
      delete(_id){
           return UserRepository.findByIdAndRemove(_id); 
           
    }

}
export default new UserService();