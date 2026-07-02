# 🎬 Edita Criativo

Landing Page institucional desenvolvida para a **Edita Criativo**, um estúdio especializado em edição profissional de vídeos para criadores de conteúdo, empresas e marcas.

O objetivo deste projeto é apresentar os serviços da empresa, fortalecer sua presença digital e converter visitantes em clientes através de uma experiência moderna, elegante e altamente responsiva.

---

# ✨ Tecnologias

| Tecnologia    | Finalidade                |
| ------------- | ------------------------- |
| Next.js       | Framework principal       |
| React         | Construção da interface   |
| TypeScript    | Tipagem estática          |
| Tailwind CSS  | Estilização               |
| shadcn/ui     | Componentes reutilizáveis |
| Framer Motion | Microinterações           |
| GSAP          | Animações avançadas       |
| Lenis         | Scroll suave              |
| Lucide React  | Ícones                    |

---

# 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

* Node.js **22 LTS** ou superior (recomendado: **24.x**)
* pnpm
* Git

---

# 🚀 Executando o projeto

### Clone o repositório

```bash
git clone <url-do-repositorio>
```

### Acesse a pasta

```bash
cd edita-criativo
```

### Instale as dependências

```bash
pnpm install
```

### Execute em ambiente de desenvolvimento

```bash
pnpm dev
```

O projeto estará disponível em:

```text
http://localhost:3000
```

---

# 📜 Scripts

| Comando       | Descrição                            |
| ------------- | ------------------------------------ |
| `pnpm dev`    | Inicia o ambiente de desenvolvimento |
| `pnpm build`  | Gera a versão de produção            |
| `pnpm start`  | Executa a aplicação compilada        |
| `pnpm lint`   | Executa o ESLint                     |
| `pnpm format` | Formata o código utilizando Prettier |

> Novos scripts poderão ser adicionados conforme o projeto evoluir.

---

# 📂 Estrutura do Projeto

```text
.
├── app/                  # Rotas, páginas e layouts (App Router)
├── components/           # Componentes reutilizáveis da aplicação
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── layout/           # Navbar, Footer, Containers...
│   ├── sections/         # Hero, Services, Portfolio...
│   └── shared/           # Componentes compartilhados
│
├── hooks/                # Hooks customizados
├── lib/                  # Funções utilitárias e configurações
├── types/                # Tipagens globais
├── public/               # Imagens, vídeos, ícones e assets
├── styles/               # Estilos globais
├── docs/                 # Documentação do projeto
├── .github/              # Templates e workflows (quando necessário)
└── ...
```

### Organização

* **app/** → Estrutura principal da aplicação.
* **components/** → Todos os componentes reutilizáveis.
* **hooks/** → Hooks personalizados.
* **lib/** → Funções auxiliares e configurações.
* **types/** → Interfaces e tipos globais.
* **public/** → Recursos estáticos.
* **styles/** → Estilos globais.
* **docs/** → Toda a documentação do projeto.

---

# 🌿 Fluxo de Desenvolvimento

## Branches principais

* `main` → Produção
* `develop` → Desenvolvimento

## Branches temporárias

Exemplos:

```text
feat/hero
feat/services
fix/navbar
docs/readme
refactor/cards
chore/eslint
```

Fluxo de trabalho:

```text
Branch temporária
        ↓
develop
        ↓
main
```

---

# 📝 Conventional Commits

Este projeto segue o padrão **Conventional Commits**.

Exemplos:

```text
feat: adiciona Hero Section

fix: corrige animação do botão

docs: atualiza README

refactor: reorganiza componentes

chore: configura Husky
```

---

# ✅ Qualidade de Código

O projeto seguirá padrões modernos de desenvolvimento utilizando:

* ESLint
* Prettier
* Husky
* lint-staged
* Commitlint

Antes de cada commit serão executadas verificações automáticas para garantir a qualidade e a consistência do código.

---

# 📖 Documentação

Toda a documentação encontra-se na pasta **docs/**.

```text
docs/
├── proposta-do-projeto.md
├── briefing-tecnico.md
├── design-guidelines.md
├── design-system.md
├── roadmap.md
└── wireframe.md
```

---

# 🎯 Filosofia do Projeto

A Edita Criativo não pretende ser apenas uma landing page institucional.

O objetivo é transmitir, através do design, da experiência do utilizador e das animações, a mesma qualidade que a empresa entrega nos seus serviços de edição audiovisual.

Cada seção da página foi planejada para conduzir o visitante até a conversão de forma natural, elegante e memorável.

---

# 📦 Deploy

O deploy será realizado utilizando a **Vercel**, integrada ao GitHub através de Deploy Contínuo (CI/CD).

Cada alteração aprovada na branch `main` poderá ser publicada automaticamente.

---

# 👥 Equipe

### Tech Lead

👦 André Simão → <ade-simao>

### Colaboradores (Júnior)

👦 Josemar → <fa-n°1>

---

# 📄 Licença

Projeto privado.

Todos os direitos reservados à Edita Criativo.
