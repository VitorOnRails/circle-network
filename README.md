# 📱 Circle Network (Contact App)

## 💻 Sobre o Projeto
Uma aplicação web completa para gestão de contatos (CRUD) integrada com banco de dados na nuvem. O projeto oferece uma experiência de usuário fluida e em tempo real, utilizando as melhores práticas do ecossistema React para validação de formulários, renderização de modais e feedback visual.

## ✨ Funcionalidades
* **CRUD Completo:** Criação, leitura, atualização e exclusão de contatos integrados diretamente com o **Firebase Firestore**.
* **Sincronização em Tempo Real:** Utilização de `onSnapshot` do Firebase para garantir que a lista de contatos seja atualizada instantaneamente, sem necessidade de recarregar a página.
* **Busca Dinâmica:** Sistema de filtro inteligente que pesquisa contatos pelo nome em tempo real conforme o usuário digita.
* **Validação de Formulários:** Gerenciamento de formulários robusto com **Formik** e validação de regras de negócio (como e-mail válido e campos obrigatórios) através do **Yup**.
* **Modais Avançados (React Portals):** Implementação de modais sobrepostos utilizando `createPortal`, garantindo acessibilidade e evitando conflitos de CSS (`z-index`).
* **Notificações Visuais:** Feedback imediato para as ações do usuário (sucesso ao adicionar, editar ou deletar) utilizando o **React Toastify**.
* **Estilização Utility-First:** Interface responsiva, moderna e construída de forma ágil com **Tailwind CSS**.

## 🛠️ Tecnologias Utilizadas
* **[React](https://react.dev/)**
* **[Vite](https://vitejs.dev/)**
* **[Tailwind CSS](https://tailwindcss.com/)** (Estilização utilitária)
* **[Firebase](https://firebase.google.com/)** (Firestore Database)
* **[Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)** (Gerenciamento e Validação de Formulários)
* **[React Toastify](https://fkhadra.github.io/react-toastify/)** (Alertas e Notificações)
* **[React Icons](https://react-icons.github.io/react-icons/)**

## 🚀 Como executar o projeto

### Pré-requisitos
É necessário ter o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/) instalados na sua máquina. Além disso, você precisará de um projeto configurado no **Firebase**.

### Passo a Passo

1. Clone este repositório:

```bash
git clone https://github.com/VitorOnRails/contact-app.git
```

2. Acesse a pasta do projeto:

```bash
cd projeto-crud
```

3. Instale as dependências:

```bash
npm install
```

4. Configure as Variáveis de Ambiente:

Na raiz do projeto, renomeie o arquivo .env.example para .env e preencha as variáveis com as credenciais do seu próprio projeto Firebase.

5. Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

6. O aplicativo será aberto no seu navegador padrão ou acesse:

http://localhost:5173