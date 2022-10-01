# Boas vindas ao exercício sobre React Router

---

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado para o seu computador.

- Rode o comando `npm install`.

- Mude para a branch `comprehension-exercises` com o comando `git checkout -b comprehension-exercises`. É nessa branch que você realizará a solução para o exercício. 

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR,  você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

<br />


<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Nesse repositório você encontrará uma aplicação simples, com o `react-router-dom` já instalado. Siga as instruções de cada exercício para implementar novas funcionalidades à aplicação.

</details>

<br />

# Exercícios

## Exercício 1

Torne a aplicação navegável, encapsulando o que é retornado pelo `App` dentro do componente `BrowserRouter`.

## Exercício 2

Crie uma rota para o componente `Home`, utilizando um `Route` que mapeia o caminho de _URL_ "/" para `Home`.

## Exercício 3

Adicione uma rota que mapeie o caminho de _URL_ "/about" para o componente `About`. Acesse `http://localhost:3000/about` para ver se o componente `About` foi renderizado!

## Exercício 4

O componente `About` foi renderizado no exercício anterior, mas o componente `Home` também foi, o que não era desejado para o nosso caso. 😭 
Agora, altere a forma como a correspondência de caminho da _URL_ está sendo feita para renderizar `Home`, de modo que `Home` **somente** seja renderizado se o caminho da _URL_ for **exatamente** igual a "/".

## Exercício 5

Adicione uma rota que mapeie o caminho de _URL_ "/users" para o componente `Users`. Acesse `http://localhost:3000/users` para ver se **somente** o componente `Users` foi renderizado.

## Exercício 6

Adicione dentro de `BrowserRouter` uma lista contendo 3 links:

  * um link que aponte para o caminho de _URL_ "/" contendo o texto `Home`;

  * um link que aponte para o caminho de _URL_ "/about" contendo o texto `About`;

  * um link que aponte para o caminho de _URL_ "/users" contendo o texto `Users`.

⚠ Averigue se os links estão atualizando a _URL_ do seu browser quando são clicados.

## Exercício 7

Altere o componente `Users` para poder fazer o exercício a seguir:

```js
// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;

```

## Exercício 8

No componente `App` há uma rota que renderiza o componente `Users`. Altere a forma como ela renderiza o componente `Users`, passando para ele a prop `greetingsMessage` com o valor igual a "Good Morning". Lembre-se de usar a prop correta no `Route`!

## Exercício 9

Para fixar uso de _URL_ com parâmetros, altere a rota, definindo o parâmetro chamado `id`. 
Depois, altere o componente `Users`, de modo que mostre no parágrafo o valor recebido para o parâmetro `id`. Teste se está funcionando invocando as urls `localhost:3000/users/10`, `localhost:3000/users/11` e `localhost:3000/users/100`, por exemplo.

⚠ Daqui para frente, utilize o componente `Switch`!

## Exercício 10

No componente `App`, você deve possuir 3 rotas: uma para renderizar o componente `Home`, outra para renderizar `About`, e outra para renderizar `Users`, sendo que a última faz uso de parâmetro de _URL_. Encapsule essas 3 rotas em um componente `Switch` e ordene as rotas do mais específico para o mais genérico, começando de cima.

⚠ Para os próximos exercícios, utilize o componente `Redirect`:

## Exercício 11

Adicione, no diretório `src`, um componente chamado `StrictAccess`. 
- Como o próprio nome diz, esse componente é de acesso restrito, e ele deve receber um objeto `user` como props. 
- Se `username` e `password` de `user` for "joao" e "1234", respectivamente, o componente `StrictAccess` renderiza um parágrafo que diz "Welcome joao!". 
- Caso `username` ou `password` não sejam os valores esperados, o componente precisa gerar um alerta dizendo `Access denied` e redirecionar quem usa sua aplicação para a página principal.

## Exercício 12

Adicione no componente `App` um link que aponte para o caminho de _URL_ "/strict-access", contendo o texto `Strict Access`.

## Exercício 13

Adicione, no componente `App`, uma rota que mapeie o caminho de _URL_ "/strict-access" para o componente `StrictAccess`. Para poder testar o fluxo de autenticação, passe para a prop `user` de `StrictAccess` diferentes valores para as propriedades `username` e `password`.
