# Balance Life

![Balance Life](https://i.ibb.co/7NG7tRcN/print.jpg)

**Balance Life** é o site oficial de uma empresa especializada em esportes radicais e atividades que promovem o equilíbrio e o movimento. A plataforma oferece informações sobre serviços como slackline, balance board, parkour e recreação em eventos, além de facilitar o contato com a empresa. Desenvolvido com **React, Tailwind CSS e Framer Motion**, o site combina performance, design moderno e interatividade para proporcionar uma experiência única aos usuários.

**Link de Hospedagem:** [https://balance-life.vercel.app/](https://balance-life.vercel.app/)

---

## Um Pouco Mais Sobre as Tecnologias Utilizadas

### 1. **React**

- React foi a escolha principal para o desenvolvimento da interface do usuário devido à sua eficiência e flexibilidade. A componentização permite a reutilização de código e facilita a manutenção, enquanto o gerenciamento de estado com hooks (`useState`, `useEffect`, `useCallback`, `useRef`) torna a aplicação dinâmica e responsiva.
- Ferramentas como **React Router** foram utilizadas para gerenciar a navegação entre páginas, enquanto **React.memo** ajudou a otimizar a performance, evitando rerenders desnecessários.

### 2. **Tailwind CSS**

- Tailwind CSS foi escolhido pela sua abordagem utilitária, que permite criar interfaces responsivas e estilizadas diretamente no arquivo TSX. Isso agiliza o desenvolvimento e mantém o código CSS consistente e organizado.

### 3. **Framer Motion**

- Para adicionar interatividade e animações fluidas, Framer Motion foi integrado ao projeto. Ele simplifica a criação de animações, como transições de entrada e hover effects, melhorando a experiência do usuário.

### 4. **Lucide React**

- A biblioteca Lucide React foi utilizada para ícones modernos e leves, que se integram perfeitamente ao design minimalista da plataforma.

### 5. **Vercel**

- A hospedagem foi feita na Vercel, que oferece integração contínua com o repositório Git, deploy rápido e performance otimizada. É uma solução ideal para projetos React.

---

## Estrutura do Projeto

### Páginas Principais

1. **Home**:

   - Apresenta a empresa com um carrossel de imagens e destaca os serviços oferecidos.
   - Inclui uma seção que explica por que escolher a Balance Life.

2. **Sobre Nós**:

   - Conta a história da empresa, sua missão e valores.
   - Possui uma seção de chamada para ação, incentivando o usuário a agendar uma aula.

3. **Serviços**:

   - Lista todos os serviços disponíveis, com cards interativos que direcionam para páginas de detalhes.

4. **Contato**:
   - Oferece um formulário funcional para o usuário entrar em contato, além de informações como telefone, e-mail e endereço.

### Componentes Reutilizáveis

1. **Navbar**:

   - Barra de navegação responsiva que muda de estilo conforme o scroll da página. Inclui um menu mobile para dispositivos menores.

2. **Footer**:

   - Exibe informações de contato, links para redes sociais e créditos do desenvolvedor.

3. **ImageCarousel**:

   - Carrossel de imagens com navegação automática e controles manuais.

4. **ServiceDetail**:
   - Página que detalha cada serviço, com descrição, benefícios e uma chamada para ação.

---

## Como Executar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/balance-life.git
   ```

2. Instale as dependências:

   ```bash
   cd balance-life
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o projeto no navegador:
   [http://localhost:5173](http://localhost:5173)

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
