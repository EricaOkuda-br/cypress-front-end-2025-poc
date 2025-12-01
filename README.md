# Cypress Front-end 2025 POC

## 📋 Descrição do Projeto

Projeto de testes automatizados para front-end utilizando **Cypress** com a arquitetura **Page Object Model (POM)**. Este POC implementa testes de interface de usuário com elementos gerenciados via YAML e suporte a múltiplos ambientes.

## 🎯 Objetivo

Demonstrar uma estrutura robusta e escalável para testes automatizados de front-end usando Cypress, integrando boas práticas como:
- Padrão Page Object Model
- Gerenciamento de elementos via YAML
- Suporte a múltiplos ambientes (HML, QAS, PRD)
- Geração de relatórios com Allure
- Configuração com variáveis de ambiente

## 🏗️ Estrutura do Projeto

```
cypress-front-end-2025-poc/
├── cypress/
│   ├── config/
│   │   └── env.js                    # Configuração de variáveis de ambiente
│   ├── e2e/
│   │   ├── todo.cy.js               # Testes E2E
│   │   └── pages/
│   │       ├── controller_pages.js  # Controller de páginas
│   │       └── login_page.js        # Page Object da página de login
│   ├── fixtures/
│   │   ├── example.json             # Dados de teste
│   │   └── data/
│   ├── support/
│   │   ├── commands.js              # Comandos customizados do Cypress
│   │   ├── e2e.js                   # Configuração de suporte E2E
│   │   ├── elements/
│   │   │   └── login_el.yaml        # Elementos da página de login (YAML)
│   │   ├── helper/
│   │   │   └── yaml_elements_helper.js  # Helper para carregar elementos YAML
│   │   └── pages/
│   │       └── login_page.js        # Page Object da página de login
├── cypress.config.js                # Configuração principal do Cypress
├── eslint.config.js                 # Configuração do ESLint
├── env.hml                          # Variáveis de ambiente - HML
├── env.qas                          # Variáveis de ambiente - QAS
├── env.prd                          # Variáveis de ambiente - PRD
├── package.json                     # Dependências do projeto
└── README.md                        # Este arquivo
```

## 🔧 Tecnologias Utilizadas

- **Cypress** (^15.7.0) - Framework de testes automatizados
- **Allure** - Geração de relatórios visuais
- **JavaScript/ES Modules** - Linguagem de programação
- **YAML** - Gerenciamento de elementos (seletores)
- **dotenv** - Configuração de variáveis de ambiente
- **ESLint** - Linting de código

## 📦 Instalação

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Passos de Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd cypress-front-end-2025-poc
```

2. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

### Variáveis de Ambiente

O projeto suporta 3 ambientes: **HML**, **QAS** e **PRD**.

Cada arquivo de ambiente (`env.hml`, `env.qas`, `env.prd`) contém:

```env
BASE_URL=https://www.saucedemo.com/
USUARIO=standard_user
SENHA=secret_sauce
BROWSER=chrome
```

A seleção do ambiente é feita via variável `AMBIENTE`:
- `hml` (padrão)
- `qas`
- `prd`

## 🚀 Como Executar os Testes

### Modo Interativo (Cypress Open)

```bash
# HML (ambiente padrão)
npm run cy:hml

# QAS
npm run cy:qas

# PRD
npm run cy:prd
```

### Modo Headless (Cypress Run)

```bash
# HML
npm run cy:hml:run
```

### Executar Testes e Gerar Relatório

```bash
npm run test:and:report
```

## 📊 Relatórios

### Gerar Relatório Allure

```bash
npm run report:allure
```

### Abrir Relatório Allure

```bash
npm run report:open
```

## 🔍 Testes Inclusos

### 1. Teste de Login

Localização: `cypress/e2e/todo.cy.js`

Testa o fluxo de login na aplicação SauceDemo:
- Preenchimento de usuário
- Preenchimento de senha
- Clique no botão de login
- Validação do título da página

**Dados de Teste:**
- Usuário: `standard_user`
- Senha: `secret_sauce`
- URL: `https://www.saucedemo.com/`

### 2. Testes de TODO (Exemplo)

O projeto também inclui testes de exemplo para uma aplicação TODO com funcionalidades de:
- Adicionar novo item
- Marcar item como completado
- Filtrar tarefas ativas
- Filtrar tarefas completadas
- Limpar tarefas completadas

## 🎨 Padrão Page Object Model (POM)

O projeto utiliza o padrão POM para melhor organização e manutenibilidade:

```javascript
// Exemplo: cypress/support/pages/login_page.js
export class LoginPage {  
    async initElements() {
        this.element_login = await loadYamlElements('login_el.yaml');
    }

    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    async fillUsername(username) {
        cy.get(this.element_login.iptLogin).type(username);
    }
}
```

## 📝 Gerenciamento de Elementos com YAML

Os seletores são centralizados em arquivos YAML para facilitar manutenção:

```yaml
# cypress/support/elements/login_el.yaml
login:
  iptLogin:
    selector: "[data-test='username']"
```

Carregamento dos elementos:

```javascript
import { loadYamlElements } from "../../support/helper/yaml_elements_helper.js";

const element_login = await loadYamlElements('login_el.yaml');
```

## 🧹 Linting

Verificar qualidade do código:

```bash
npm run eslint
```

## 📚 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run cy:hml` | Abre Cypress no ambiente HML |
| `npm run cy:qas` | Abre Cypress no ambiente QAS |
| `npm run cy:prd` | Abre Cypress no ambiente PRD |
| `npm run cy:hml:run` | Executa testes em headless no ambiente HML |
| `npm run report:allure` | Gera relatório Allure |
| `npm run report:open` | Abre relatório Allure no navegador |
| `npm run test:and:report` | Executa testes e gera relatório |
| `npm run eslint` | Verifica linting do código |

## 🔐 Segurança

⚠️ **Atenção**: Os arquivos `env.*` contêm credenciais. 

**Recomendações:**
- Adicione `env.*` ao `.gitignore` se contiver dados sensíveis
- Nunca commite credenciais de produção
- Use variáveis de ambiente do CI/CD para ambientes sensíveis

## 🐛 Troubleshooting

### Cypress não inicia
```bash
npm install
npm run cy:hml
```

### Relatório Allure não gera
```bash
npm install
npm run report:allure
```

## 📖 Recursos Úteis

- [Documentação Cypress](https://docs.cypress.io/)
- [Page Object Model Pattern](https://docs.cypress.io/guides/core-concepts/best-practices#Organizing-Tests)
- [Allure Report](https://docs.qameta.io/allure/)
- [SauceDemo - Aplicação de Teste](https://www.saucedemo.com/)

## 👤 Autor

**Erica Okuda**

## 📄 Licença

Este projeto é um POC (Proof of Concept) para fins educacionais e de demonstração.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com o time de QA.
