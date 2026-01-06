# Check-list para Avaliação de PR

## Resumo rápido
- Objetivo: padronizar a revisão, reduzir regressões e garantir que PRs entrem em produção com segurança.
- Use este checklist como referência ao revisar e antes de aceitar/mesclar um PR.

## ⚠️ ITENS CRÍTICOS - VERIFICAÇÃO OBRIGATÓRIA

### 🔴 BLOQUEADORES (não pode mergear sem)
- [ ] Pipeline do CI passando (build, lint, tests)
- [ ] Todos os testes passam localmente E no CI
- [ ] Não há exposição de segredos (chaves, tokens, senhas)
- [ ] Branch segue o padrão: <tipo>/issue-<n>-<descrição>
- [ ] PR referencia a issue/bug/epic (ex.: "Relates to issue-123")
- [ ] Número mínimo de aprovações obtido (política do time)

### 🟡 IMPORTANTES (revisar sempre)
- [ ] Implementação cumpre o escopo definido na issue
- [ ] Fluxos críticos testados manualmente
- [ ] Código limpo e legível; sem trechos comentados desnecessários
- [ ] Linter e formatter executados e sem erros
- [ ] Comentários da revisão todos resolvidos ou respondidos

---

## Checklist detalhado

### Metadados do PR
  - [ ] 🔹 Título conciso e relevante (ex.: "[issue-123] feat: adicionar login")
  - [ ] Descrição completa: contexto, objetivo, o que foi feito e por que
  - [ ] 🔴 PR referencia a issue/bug/epic (ex.: "Relates to issue-123") - OBRIGATÓRIO
  - [ ] Tipo do PR informado (feat, fix, chore, docs, test, ci, refactor, perf, hotfix, release)
  - [ ] Screenshots / GIFs / logs anexados quando houver mudanças visuais ou UX

### Branch
  - [ ] 🔴 Nome da branch segue o padrão: <tipo>/issue-<n>-<descrição> - OBRIGATÓRIO
  - [ ] Branch criada a partir do branch correto (ex.: develop/main conforme fluxo do time)

### Funcionalidade e comportamento
  - [ ] 🟡 Implementação cumpre o escopo definido na issue - IMPORTANTE
  - [ ] 🟡 Fluxos críticos testados manualmente - IMPORTANTE
  - [ ] Edge cases considerados e tratados
  - [ ] Compatibilidade com outras partes do sistema verificada

### Testes automatizados
  - Objetivo: garantir confiança, rapidez e reprodutibilidade dos testes em CI e local.
  - **Checklist rápido específico para testes**
    - [ ] 🔴 Todos os testes passam localmente - OBRIGATÓRIO
    - [ ] 🔴 Todos os testes passam no CI - OBRIGATÓRIO
    - [ ] 🟡 Cobertura adequada ou justificativa - IMPORTANTE
    - [ ] 🟡 Não há testes flakey sem tratamento - IMPORTANTE
    - [ ] Testes lentos sinalizados e isolados
  
  - **Abrangência**
    - [ ] Existem testes unitários cobrindo regras e lógica central.
    - [ ] Existem testes de integração cobrindo dependências externas relevantes (DB, queues, serviços).
    - [ ] Existem testes E2E para fluxos críticos (se aplicável).
  - Qualidade e práticas
    - [ ] Testes isolados: cada teste deve poder rodar de forma independente (setup/teardown limpos).
    - [ ] Uso adequado de fixtures/mocks/stubs — evitar mocks de código que testam a mesma unidade.
    - [ ] Dados de teste determinísticos (seed estável ou dados gerados de forma previsível).
    - [ ] Testes com nomes claros e descritivos (ex.: shouldReturn403WhenTokenMissing).
    - [ ] Evitar uso excessivo de sleeps/waits; preferir polling com timeout.
  - Execução local e CI
    - [ ] Instruções para rodar os testes localmente estão no PR (com comandos ex.: npm test, pytest).
    - [ ] Tempo total de testes é razoável para CI; testes lentos marcados/isolados (tag slow).
    - [ ] Testes paralelizáveis configurados no CI quando possível.
    - [ ] Relatórios de testes (JUnit, cobertura) gerados e anexados ao CI.
  - Cobertura e métricas
    - [ ] Cobertura adicionada quando aplicável; redução de cobertura documentada e justificada.
    - [ ] Métricas de flaky rate / tempo médio de execução monitoradas (se houver dashboard).
  - Flakiness e estabilidade
    - [ ] Testes intermitentes foram identificados e colocados em quarantine se necessário.
    - [ ] Estratégia de retry controlada (ex.: re-executar only once temporariamente) e documentada.
    - [ ] Se um teste for instável, foi aberto um issue para investigação e marcado no PR.
  - Integração com infra/serviços
    - [ ] Testes de integração usam ambientes/containers isolados (Docker, Testcontainers, localstack).
    - [ ] Secrets/credentials para testes estão gerenciados via CI secrets e não hardcoded.
    - [ ] Dependências externas simuladas quando necessário para testes determinísticos.
  - Performance de testes
    - [ ] Testes custosos de performance estão separados e executados em job específico (e.g., perf job).
    - [ ] Não incluir testes de carga pesados no pipeline principal sem aprovação.
  - Revisão de testes
    - [ ] Código de teste revisado com a mesma atenção que código produtivo.
    - [ ] Test helpers/utilitários reutilizáveis criados para evitar duplicação.
  - Exemplos de comandos úteis
    - Rodar todos os testes: npm ci && npm test  # ou pytest -q
    - Rodar apenas unitários: pytest -m unit
    - Gerar relatório de cobertura: pytest --cov=src --cov-report=xml
    - Executar testes E2E com env local: npm run e2e -- --config=local
  - Checklist rápido específico para testes
    - [ ] Todos os testes passam localmente
    - [ ] Todos os testes passam no CI
    - [ ] Cobertura adequada ou justificativa
    - [ ] Não há testes flakey sem tratamento
    - [ ] Testes lentos sinalizados e isolados

### Qualidade de código
  - [ ] 🟡 Código limpo e legível; sem trechos comentados desnecessários - IMPORTANTE
  - [ ] 🟡 Nomes de variáveis/funções claros e coerentes - IMPORTANTE
  - [ ] Funções/métodos com tamanho e responsabilidade adequados
  - [ ] Avoid duplication; reutilizar utilitários existentes quando fizer sentido

### Lint / Formatação / Estilo
  - [ ] 🔴 Linter e formatter executados e sem erros - OBRIGATÓRIO
  - [ ] Sem warnings relevantes no build

### Segurança
  - [ ] 🔴 Não há exposição de segredos (chaves, tokens, senhas) - OBRIGATÓRIO
  - [ ] 🟡 Validação/escapamento de inputs sensíveis - IMPORTANTE
  - [ ] 🟡 Autorização/autenticação verificadas para rotas e ações sensíveis - IMPORTANTE
  - [ ] Dependências seguras ou justificadas se vulneráveis

- Documentação
  - [ ] README, changelog ou docs atualizados quando necessário
  - [ ] API changes documentadas (endpoints, contratos, exemplos)
  - [ ] Notas de uso para outras equipes (ops, QA) incluídas no PR

- Observabilidade
  - [ ] Logs informativos adicionados (sem dados sensíveis)
  - [ ] Métricas/tracing ajustados se funcionalidade crítica/performática
  - [ ] Alertas ajustados se necessário

- Backwards compatibility & breaking changes
  - [ ] Breaking changes claramente documentados
  - [ ] Feature flags consideradas para rollout gradual, quando aplicável

### CI / Pipeline
  - [ ] 🔴 Pipeline do CI passando (build, lint, tests) - OBRIGATÓRIO
  - [ ] Artefatos gerados (se necessário) disponíveis
  - [ ] Jobs demorados validados ou justificados

### Revisões e aprovação
  - [ ] 🔴 Comentários da revisão todos resolvidos ou respondidos - OBRIGATÓRIO
  - [ ] 🔴 Número mínimo de aprovações obtido (política do time) - OBRIGATÓRIO
  - [ ] Sem conflitos com o branch alvo; rebase/merge feito se necessário

- Preparação para merge / pós-merge
  - [ ] Changelog / notas de release atualizadas (se necessário)
  - [ ] Plano de rollback / monitoramento pós-deploy definido
  - [ ] Deletar branch remota após merge (se política do time)
  - [ ] Tarefas de follow-up (issue / checklist) criadas quando necessário

---

## 🛠️ Como executar verificações locais (exemplos)
- Buscar branch e rodar testes:
  - git fetch origin
  - git checkout nome-da-branch
  - npm ci && npm test        # Node
  - pytest -q                # Python
  - mvn -q test              # Java
- Rodar linter/formatter:
  - npm run lint
  - black . && isort .       # Python
- Testar manualmente (UI):
  - iniciar app local, executar passos descritos no PR, conferir logs/console

## 📋 Modelo curto de template de PR
(copiar para .github/PULL_REQUEST_TEMPLATE.md)

**Título:** [issue-<n>] <tipo>: <resumo curto>

**Descrição:**
- O que foi feito:
- Por que:
- Como testar (passos):

**Checklist:**
- [ ] 🔴 Branch segue padrão
- [ ] 🔴 Tests adicionados/atualizados
- [ ] 🔴 CI verde
- [ ] 🟡 Documentação atualizada
- [ ] 🔴 Aprovações obtidas

---

## ⚠️ Observação final
- Não é necessário cumprir 100% em todos os PRs (ex.: docs/chore podem ter menos requisitos), mas os itens relevantes para o tipo de mudança devem ser verificados.
- **🔴 Itens OBRIGATÓRIOS** não podem ser ignorados em nenhum tipo de PR.
- **🟡 Itens IMPORTANTES** devem ser verificados para PRs de funcionalidade (feat/fix).