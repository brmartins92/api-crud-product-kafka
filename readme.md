
# *Projeto de Kafka e Microserviços vs Monolito*
Este é um projeto de demonstração que tem como objetivo apresentar a utilização de conceitos importantes no desenvolvimento de software, como SOLID, microserviços e o uso do Kafka como ferramenta de integração de sistemas. Este será um projeto que estará em desenvolvimento e como base para outros desenvolvedores que desejam aprender, o git clone está liberado. 


## **# Sobre o projeto ?**

Este projeto trata-se de um CRUD com o objetivo de manter sempre atualizadas as informações de dois bancos de dados distintos. A ideia é que, quando uma atualização for feita em um banco de dados, a outra base de dados de outro serviço também seja atualizada automaticamente, utilizando-se um serviço de mensageria.

Em outras palavras, o projeto busca garantir a consistência de dados entre diferentes sistemas, por meio da utilização de uma abordagem de mensageria. Com isso, as informações permanecem atualizadas em ambos os bancos de dados, evitando possíveis problemas de inconsistência de dados.


## **Arquitetura do Projeto**
<img src="imagens/arquitetura.jpg">

## Como Instalar o Projeto ?

Para executar o projeto, é bem simples. :wink: 

 - Basta ter o **node** instalado, de preferencia a versão **v19.6.0**
 - Docker
 
 ### Docker: 
Para utilizar esta aplicação para que seja uma melhor experiência. utilize o docker para subir os serviços. 
- Site para a instalação do **docker**  https://docs.docker.com/compose/

Após realizar o download, execute dentro da pasta do projeto, onde tem o arquivo docker-compose.yml
> docker-compose up

### Instalando:

Ao baixar o Projeto, você encontrará 2 pastas, uma api service que é um monolito e uma pasta com dois microsserviço.

Primeiro entre no **monolito** chamado de **api-service**, 
> npm i
> npx prisma migrate dev

Logo em Seguida entre nos outros microsserviços, **Product-producer** e **Product-consumer**, 
Quando estiver no **Product-consumer**
>  npm i
>  npx prisma migrate dev

Agora entraremos no **Product-producer**
> npm i 

## Como Executar o projeto

Entre nos três servicos e execute:
> npm run start:dev