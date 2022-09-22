# Team Partners Bot
Um bot construído em Nodejs que tweeta a quantidade atualizada de sócio-torcedores de clubes da série A do campeonato brasileiro.
É importante notar que somente os times que divulgam essa informação em seus respectivos sites oficiais, são incluídos no bot.

## Rodando o projeto
Em primeiro lugar é necessário ter uma conta de desenvolvedor no twitter, pois é a partir desta conta que será feito o tweet.
No diretório raiz deve-se rodar o comando a seguir. 
```sh
$ cp .env.example .env
```
No arquivo .env preencha as credenciais necessárias para a comunicação com a API. Estas credenciais devem ser obtidas no portal
do desenvolvedor do twitter.  

A seguir, instale os pacotes e execute o bot: 

```sh
$ npm install
$ npm run exec
```

Em construção...