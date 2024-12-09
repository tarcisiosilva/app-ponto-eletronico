# app-ponto-eletronico

Ponto Eletrônico - Sistema de Registro de Ponto

Descrição

O Ponto Eletrônico é um sistema moderno para controle de pontos de funcionários, desenvolvido com React no frontend e PHP com Laravel no backend. O sistema permite que os usuários registrem seus pontos, visualizem seus pontos registrados, e que os administradores gerenciem os usuários e pontos de todos.

Funcionalidades

Tela de Login: Sistema de autenticação com JWT.
Dashboard de Usuário: Exibe o nome do usuário e a lista de pontos registrados.
Administração: Permite ao administrador listar, editar, excluir e ativar/desativar usuários.
Edição de Perfil: O usuário pode visualizar e editar seus dados pessoais.

Tecnologias

Frontend:
React
React Router
Axios (para comunicação com o backend)
Backend:
Laravel (PHP)
JWT (JSON Web Tokens) para autenticação
Banco de Dados:
MySQL
Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado:

Node.js versão 14 ou superior
PHP versão 7.4 ou superior
MySQL
Composer (para o Laravel)


Frontend (React)

Clone o repositório do frontend:
git clone https://github.com/tarcisiosilva/app-ponto-eletronico.git
cd app-ponto-eletronico

Instale as dependências do React:
npm install

Inicie o servidor de desenvolvimento do React:

npm run dev

O frontend estará rodando em http://localhost:5173.


Como Usar

Login: Acesse a página de login e insira as credenciais (usuário e senha). O sistema utiliza JWT para autenticação.
Dashboard: Após o login, você será redirecionado ao dashboard, onde poderá registrar pontos.
Administração: O administrador pode acessar a tela de administração para gerenciar usuários, editar informações, excluir ou ativar/desativar contas.


src/
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas do sistema (Dashboard, Login, Administração)
├── assets/             # Arquivos complementares 
├── App.tsx             # Componente principal
├── App.css             # Componente principal CSS
├── index.css           # Arquivo de entrada CSS
├── main.tsx            # Arquivo de entrada


📞 Suporte

Autor: Tarcisio Silva
E-mail: tarcisio@saconsulting.com.br
LinkedIn: [Tarcisio Silva](https://www.linkedin.com/in/taarcisiosilva/)
