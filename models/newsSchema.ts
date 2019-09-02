//no diretório model ficara alocado todos os esquemas ou modelos de trabalho
import * as mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
   hat: {type: String},
   title: {type: String},//schema json
   text: {type: String},
   author: {type: String},
   img: {type: String},
   publishDate: {type: Date},
   link: {type: String},
   active: {type: Boolean},

})
export default NewsSchema;//exportando para o repositorio