# Convenção de Nomenclatura de Arquivos

Este documento define as regras padronizadas para nomenclatura de arquivos no projeto de automação de testes.

##  Estrutura e Convenções

###  **Elements** 
Arquivos que definem elementos da interface de cada tela.
- **Formato:** `{nomeDaTela}.yaml`
- **Exemplo:** `faturamento.yaml`
- **Localização:** `/src/elements/`

###  **Pages**
Classes que representam as páginas e suas funcionalidades.
- **Formato:** `{nomeDaFuncionalidade}Page.ts`
- **Exemplo:** `faturamentoPage.ts`
- **Localização:** `/src/pages/`

###  **Tests**
Arquivos de teste automatizados.
- **Formato:** `{nomeDaFuncionalidade}.spec.ts`
- **Exemplo:** `faturamento.spec.ts`
- **Localização:** `/tests/`

###  **Helpers**
Utilitários e funções auxiliares (consultas SQL, validações, etc.).
- **Formato:** `{objetivoDoArquivo}.ts`
- **Exemplo:** `queriesAutomacao.ts`
- **Localização:** `/src/helpers/`

###  **Documentation**
Documentação do projeto em Markdown.
- **Formato:** `{NOME_DESCRITIVO}.md` (maiúsculo)
- **Exemplo:** `NAMING_CONVENTIONS.md`
- **Localização:** `/doc/`

### **Fixtures**
Massa de dados dentro do json
- **Formato:** `{NOME_DESCRITIVO}.json` (minusculo)
- **Exemplo:** `db_cliente_elegivel.json`
- **Localização:** `/src/fixtures/hml`

---

##  Boas Práticas

- Use **camelCase** para nomes de arquivos TypeScript
- Use **snake_case** em MAIÚSCULO para documentação
- Seja **descritivo** e **objetivo** nos nomes
- Mantenha **consistência** em todo o projeto

