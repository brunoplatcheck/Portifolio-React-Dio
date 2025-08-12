Portfólio Pessoal em React Native
Este projeto é um aplicativo de portfólio pessoal construído com React Native e TypeScript, desenvolvido como parte do desafio da DIO (Digital Innovation One). O objetivo é criar um perfil interativo e dinâmico, exibindo informações sobre minhas habilidades, formação acadêmica, cursos complementares e experiências profissionais.

🚀 Funcionalidades
O aplicativo é composto por várias telas navegáveis, cada uma dedicada a uma seção específica do meu perfil:

Tela Principal (MainScreen):

Minha foto de perfil e nome.

Links para minhas redes sociais e plataformas importantes (GitHub, LinkedIn, Sketchfab, Lattes, Gmail) com ícones e cores das marcas.

Botões de navegação para as outras seções do portfólio.

Design visualmente dividido em três seções coloridas para organização.

Tela de Habilidades (SkillScreen):

Exibição detalhada das minhas habilidades, categorizadas (Linguagens de Programação, Desenvolvimento de Software, Ferramentas e Design, Qualidade de Software, Dados e IA, Cloud e Infraestrutura, Habilidades Gerais).

Barras de progresso para indicar o nível de cada habilidade.

Ícones relevantes ao lado de cada habilidade para uma melhor visualização.

Design com seções de fundo branco (cabeçalho) e preto (conteúdo das habilidades) para contraste.

Tela de Formação Principal (EducationScreen):

Listagem das minhas principais formações acadêmicas (Bacharelado, Especialização, Curso Técnico).

Cada item de formação é clicável e expande para revelar as competências adquiridas durante o curso.

Design consistente com a tela de habilidades (seções branca e preta).

Tela de Cursos e Certificações (ComplementaryEducationScreen):

Listagem completa dos meus cursos e certificações complementares, organizados por categoria.

Cada curso é clicável para uma futura expansão ou destaque.

Design consistente com as outras telas de conteúdo.

Tela de Experiências Profissionais (ProfessionalExperienceScreen):

Detalhes sobre minhas experiências laborais, incluindo cargo, empresa, período e uma lista de responsabilidades.

Cada experiência é clicável para expandir e mostrar as responsabilidades em detalhes.

Design consistente com as outras telas de conteúdo.

🛠️ Tecnologias Utilizadas
React Native: Framework para construção de aplicativos móveis nativos usando React.

TypeScript: Superconjunto do JavaScript que adiciona tipagem estática.

Expo: Ferramenta para desenvolvimento rápido de aplicativos React Native.

React Navigation: Solução de navegação para aplicativos React Native.

@expo/vector-icons: Biblioteca de ícones vetorizados para uso no Expo.

⚙️ Como Configurar e Rodar o Projeto
Siga os passos abaixo para ter o projeto rodando em sua máquina local.

Pré-requisitos
Certifique-se de ter o Node.js, npm (ou Yarn) e o Expo CLI instalados:

Node.js (versão LTS recomendada)

Expo CLI

npm install -g expo-cli
# ou
yarn global add expo-cli

Instalação
Clone o repositório:

git clone https://github.com/brunoplatcheck/Portifolio-React-Dio.git
cd Portifolio-React-Dio

Instale as dependências:

npm install
# ou
yarn install

Instale as dependências do React Navigation e ícones (se ainda não o fez):

npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context @expo/vector-icons

Configuração da Imagem de Perfil
Adicione sua foto: Coloque sua imagem de perfil (sua-foto.jpeg) na pasta assets/img/.

Portifolio-React-Dio/
├── assets/
│   └── img/
│       └── sua-foto.jpeg
└── src/
    └── components/
        └── ProfileImage.tsx

Verifique o caminho: Certifique-se de que o caminho na linha const profileImage = require('../../assets/img/sua-foto.jpeg'); dentro de src/components/ProfileImage.tsx está correto e corresponde ao nome e extensão do seu arquivo de imagem.

Rodando o Aplicativo
Para iniciar o servidor de desenvolvimento do Expo e testar o aplicativo:

npx expo start --tunnel

Após executar o comando, um QR code será exibido no seu terminal.

Baixe o aplicativo Expo Go no seu celular (disponível na App Store ou Google Play).

Abra o Expo Go e escaneie o QR code.

O aplicativo será carregado no seu dispositivo.

Se o aplicativo não carregar ou apresentar erros, tente limpar o cache e reiniciar:

npx expo start --clear
npx expo start --tunnel

No seu celular, force o fechamento do Expo Go e abra-o novamente antes de escanear.

📂 Estrutura do Projeto
Portifolio-React-Dio/
├── assets/
│   └── img/          # Imagens locais do projeto
│       └── sua-foto.jpeg
├── src/
│   ├── components/   # Componentes reutilizáveis (e.g., ProfileImage, SocialLink)
│   │   ├── ProfileImage.tsx
│   │   └── SocialLink.tsx
│   ├── data/         # Arquivos de dados em JSON
│   │   └── data.json
│   ├── screens/      # Telas principais do aplicativo
│   │   ├── MainScreen.tsx
│   │   ├── SkillScreen.tsx
│   │   ├── EducationScreen.tsx
│   │   ├── ComplementaryEducationScreen.tsx
│   │   └── ProfessionalExperienceScreen.tsx
│   └── types.ts      # Definições de tipos e interfaces TypeScript
├── App.tsx           # Ponto de entrada principal da aplicação e configuração de navegação
├── package.json
├── tsconfig.json
└── ... outros arquivos de configuração do Expo/React Native

💡 Próximos Passos e Melhorias Potenciais
Animações e Transições: Adicionar animações mais suaves entre as telas e nos elementos dos cards.

Internacionalização: Suporte a múltiplos idiomas para o aplicativo.

Testes: Implementar testes unitários e de integração.

Mais Detalhes nos Cursos Complementares: Se desejar, adicionar descrições mais longas ou links externos para os certificados nos cursos complementares.

Seção "Sobre Mim" Detalhada: Adicionar uma seção mais elaborada com um resumo profissional e pessoal.

📞 Contato
Fique à vontade para se conectar comigo através do meu LinkedIn ou GitHub.

Feito com ❤️ por Bruno Platcheck.


