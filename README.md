# 📌 Task Manager

Uma aplicação moderna de **gerenciamento de tarefas** construída com
**React + Vite**, focada em boas práticas de organização de código,
gerenciamento de estado e consumo de API simulada.

Este projeto foi desenvolvido com o objetivo de praticar arquitetura
frontend, componentização e manipulação de dados assíncronos.

------------------------------------------------------------------------

## 🧠 Sobre o Projeto

O **Task Manager** é uma aplicação web que permite:

-   Criar tarefas
-   Editar tarefas existentes
-   Excluir tarefas
-   Marcar tarefas como concluídas
-   Gerenciar estado da aplicação de forma eficiente

A aplicação utiliza um backend simulado com **JSON Server** para
representar uma API REST, permitindo simular operações reais de CRUD.

------------------------------------------------------------------------

## 🎯 Objetivo

Este projeto foi criado para:

-   Praticar React moderno (Hooks, componentização e organização de
    estado)
-   Trabalhar com formulários utilizando React Hook Form
-   Gerenciar dados assíncronos com React Query
-   Estruturar uma aplicação frontend de forma escalável
-   Simular integração com API REST

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   React 18
-   Vite
-   React Router DOM
-   React Hook Form
-   React Query
-   JSON Server
-   Tailwind CSS
-   Sonner (notificações)
-   UUID
-   PropTypes

------------------------------------------------------------------------

## 🧩 Principais Conceitos Aplicados

-   Componentização reutilizável
-   Separação de responsabilidades
-   Custom Hooks
-   Gerenciamento de estado local e remoto
-   Manipulação de formulários com validação
-   Simulação de backend com API REST
-   Estrutura de pastas organizada

------------------------------------------------------------------------

## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório

``` bash
git clone https://github.com/Andersonamalta/task-manager.git
```

### 2️⃣ Acesse a pasta do projeto

``` bash
cd task-manager
```

### 3️⃣ Instale as dependências

``` bash
npm install
```

### 4️⃣ Inicie o backend fake (JSON Server)

``` bash
npm run start:json
```

### 5️⃣ Execute o projeto

``` bash
npm run dev
```

O projeto será iniciado em:

http://localhost:5173

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    task-manager/
    │
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   └── App.jsx
    │
    ├── .env.development
    ├── package.json
    ├── vite.config.js
    └── README.md

------------------------------------------------------------------------

## 📦 Scripts Disponíveis

``` bash
npm run dev
npm run build
npm run preview
npm run lint
npm run start:json
```

------------------------------------------------------------------------

## 📈 Melhorias Futuras

-   Autenticação de usuários
-   Backend real (Node + Express ou Firebase)
-   Filtros por status ou categoria
-   Sistema de prioridade
-   Datas de vencimento
-   Testes automatizados
-   Deploy em produção

------------------------------------------------------------------------

## 👨‍💻 Autor

Anderson Malta\
Desenvolvedor focado em frontend e boas práticas em aplicações React.

------------------------------------------------------------------------

## 📄 Licença

Este projeto está sob a licença MIT.
