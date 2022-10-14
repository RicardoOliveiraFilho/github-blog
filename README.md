<a id="topo"></a>

![Captura de tela de 2022-10-13 22-01-30](https://user-images.githubusercontent.com/2540737/195738863-162de06c-7f71-437f-a205-d32e4e3ad35e.png)

<p align="center">
  <a href="https://github.com/RicardoOliveiraFilho">
    <img alt="Feito pelo Ricardo Oliveira" src="https://img.shields.io/badge/FEITO%20POR-RICARDO%20OLIVEIRA-blue">
  </a>
  <img alt="Licença do Projeto" src="https://img.shields.io/badge/LICENSE-MIT-blue"/>
<p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#pre-requisitos">Pré-requisitos</a> •
  <a href="#rodando">Rodando a Aplicação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>
</p>

### Features<a id="features"></a> - <a href="#topo">Topo</a>
- [x] A aplicação puxa informações da API do Github a respeito do perfil do usuário e de issues de um repositório.
- [x] A aplicação exibe os detahes de uma issue ao se clicar nela a partir da listagem.

<h4  align="left">
Projeto finalizado ✔
</h4>

###  Pré-requisitos<a id="pre-requisitos"></a> - <a href="#topo">Topo</a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [Git](https://git-scm.com/)
 e [Node.js](https://nodejs.org/pt-br/)
 
 Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
 
 Para finalizar, precisará também criar um repositório no Github que contenha issues para que a aplicação consiga buscá-las.
 Deve-se inserir as informações contendo o nome de usuário do github e o nome do repositório criado em um arquivo de variáveis de ambiente.
 
 ````bash
 # Utilize o arquivo presente no projeto chamado .env.example. O renomeie apenas para .env
 
 VITE_GITHUB_USERNAME=[o nome de seu usuário do github aqui]
 VITE_GITHUB_REPONAME=[o nome do repositório que contenha as issues aqui]
 ````
 
### Rodando a Aplicação<a id="rodando"></a> - <a href="#topo">Topo</a>
   
````bash 
 # Clone este repositório
 git clone https://github.com/RicardoOliveiraFilho/github-blog.git
 
 # Acesse a pasta do projeto no terminal, a partir do diretório ao qual o comando de clonagem foi executado
 cd github-blog
 
 # Instale as dependências
 $ yarn install ou
 $ npm i 
 
 # Execute a aplicação em modo de desenvolvimento
 $ npm run dev 
 $ yarn dev
 
 # O servidor iniciará na porta:5173
 # Acesse http://localhost:5173
 ````

### Tecnologias<a id="tecnologias"></a> - <a href="#topo">Topo</a>
 As seguintes ferramentas foram usadas na construção do projeto:
 
  - [Styled Components](https://styled-components.com/)
  - [Node.js](https://nodejs.org/pt-br/)
  - [ReactJS](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)

### Autor <a id="autor"> </a> - <a href="#topo">Topo</a>

<a href="https://github.com/RicardoOliveiraFilho" style="text-decoration: none;">

<span> Feito por Ricardo Oliveira - Entre em contato! </span> 
</a>
