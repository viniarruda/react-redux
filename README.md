# react-redux


	- npm init -y pra começar

	- Para baixar todas as dependências -> npm i

	- Rodar em dev o server do npm -> npm run dev




# Webpack

	- webpack
	- babel
	- commonJS / es2015

# React

	- Padrão Arrow function - return fica implícito
		- export default () => (<h1>Primeiro Componente!</h1>)
	- No jsx, sempre que quero usar Js e não html, faço dentro de {}


# Todolist App - Frontend
	- Usados: webpack,react, bootstrap, font-awesome
	- Site cor: paletton.com
	
	- npm init -y
	- npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2
	- npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0
	- npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0
	- npm i --save-dev bootstrap@3.3.7 font-awesome@4.7.0
	- npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 axios@0.15.3



	- npm i pm2 -g
	- pm2 status / pm2 monit

__________________________________________________________________________________________________________________________________________________________________

Com redux:

	- npm i --save-dev react-redux@5.0.2 redux@3.6.0


# TodoList App - Backend
	- Usados: express, nodejs, mongodb (mongod term), Postman(extensão chrome)
	
	- npm init -y
	- npm i --save-dev body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5 nodemon@1.11.0
	- npm run dev


# Rodando todolist
	- mongod
	- npm run dev back / front



# Diferença entre arrow function com () e {}

As duas fazem exatamente a mesma coisa. Se quer uma função que apenas retorne uma expressão JSX, basta usar o primeiro exemplo, mas se vc precisar fazer algum processamento (por exemplo na linha 9) no métodos antes de retorna um JSX justificaria vc usar o segundo formato.

Esse tipo de função é chamada de Arrow Functions e elas são otimizadas para funções de uma única linha de código. Por essa razão, quando vc adiciona as chaves ({} ), ou seja, define o corpo da função, é perdido o return explicito e vc tem que informar o return.