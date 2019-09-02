import StartUp from './startUp';

//configurar a porta e adicionar o listen
let port = process.env.PORT || '3050';

StartUp.app.listen(port, function(){
console.log(`servidor executando na porta ${port}`);
});