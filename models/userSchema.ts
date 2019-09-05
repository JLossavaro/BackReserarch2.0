import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nome: {type: String},
    endereco: {type: String},//schema json
    cpf: {type:Number},
 });
 export default UserSchema;