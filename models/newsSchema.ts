//no diretório model ficara alocado todos os esquemas ou modelos de trabalho
import * as mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
   contato: {type: String},
   email: {type: String},//schema json
})
export default NewsSchema;//exportando para o repositorio