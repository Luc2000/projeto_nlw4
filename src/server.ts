import 'reflect-metadata'
import express from 'express';
import "./database";

const app = express();



app.listen(3333, () => console.log('Server Rodando!'));

// http://localhost:3333/
app.get("/", (request, response) => {
  return response.json({
    message: "hello world dnv"
  })
});

//1 param: rota
//2 param: req resp
app.post("/", (request, response)=>{
  return response.json({
    mensagem: "os dados foram salvos com sucesso"
  })
});