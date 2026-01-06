
# Resumo rápido de branch
- Formato obrigatório: <tipo>/issue-<número>-<descrição-curta>
- Tipos: feat, fix, chore, docs, test, ci, refactor, perf, hotfix, release
- Ticket: sempre `issue-<número>` (Azure DevOps / GitHub)
- Descrição: minúsculas, `-` entre palavras, sem acentos
- Exemplo curto: feat/issue-123-login

# Padrão simplificado de nomes de branchs (tipo no início)

Objetivo
- Garantir branchs previsíveis e fáceis de associar a issues (Azure DevOps / GitHub), com o tipo sempre no início.

Formato obrigatório
- <tipo>/issue-<número>-<descrição-curta>
  - tipo: feat, fix, chore, docs, ci, refactor, perf, hotfix, release
  - ticket: sempre no formato `issue-<número>` (ex.: issue-123)
  - descrição: minúsculas, palavras separadas por `-`, sem acentos
- Exemplo de criação:
  - git checkout -b feat/issue-123-login

Tipos (descrição curta, quando usar e exemplo)
- feat  
  - O que é: nova funcionalidade ou incremento de comportamento.  
  - Quando usar: adicionar endpoints, novas telas, novas features visíveis ou APIs.  
  - Ex.: feat/issue-123-novo-login

- fix  
  - O que é: correção de bug que altera comportamento indesejado.  
  - Quando usar: consertar falhas relatadas, regressões, erros que afetam usuários.  
  - Ex.: fix/issue-123-corrigir-botao

- chore  
  - O que é: trabalho de manutenção sem impacto funcional direto no produto.  
  - Quando usar: atualizar dependências, ajustes de build, tarefas operacionais e housekeeping.  
  - Ex.: chore/issue-123-atualizar-deps

- docs  
  - O que é: mudanças exclusivamente na documentação.  
  - Quando usar: README, guias, documentação de API, diagramas e comentários relevantes.  
  - Ex.: docs/issue-123-atualizar-readme

- ci  
  - O que é: mudanças em pipelines, workflows e configurações de integração contínua.  
  - Quando usar: editar GitHub Actions, pipelines do Azure DevOps, scripts de CI/CD e jobs.  
  - Ex.: ci/issue-123-ajustar-workflow

- refactor  
  - O que é: reorganização de código sem alterar comportamento observável.  
  - Quando usar: melhorar legibilidade, reduzir duplicação, separar responsabilidades, renomear estruturas.  
  - Ex.: refactor/issue-123-remover-dependencia

- perf  
  - O que é: mudanças com foco em desempenho.  
  - Quando usar: otimização de algoritmos, reduzir uso de memória, melhorar tempo de resposta/carregamento.  
  - Ex.: perf/issue-123-melhorar-startup

- hotfix  
  - O que é: correção urgente para produção (deploy rápido).  
  - Quando usar: falhas críticas em produção que exigem correção imediata; normalmente criada a partir de `main`.  
  - Ex.: hotfix/issue-123-falha-critica

- release  
  - O que é: branch para preparar uma versão / publicar release.  
  - Quando usar: agrupar mudanças antes do deploy, preparar changelog, ajustar versão.  
  - Ex.: release/issue-123-v1.2.3  (opcionalmente use `release/v1.2.3` para branches estritamente de versão)

Regras rápidas
- Tipo OBRIGATÓRIO no início seguido por `/`.
- Ticket deve estar no formato `issue-<número>` (ex.: issue-123).
- Descrição em minúsculas com `-` como separador, sem caracteres acentuados.
- Não terminar com `-` ou `/`.
- Remova caracteres especiais; apenas alfanuméricos e `-` na descrição.

Validação e automação (sugestão)
- Use um regex simples no CI e/ou hook local para validar:
  - REGEX: ^(feat|fix|chore|docs|test|ci|refactor|perf|hotfix|release)\/issue-[0-9]+-[a-z0-9-]+$
- Recomendo instalar um pre-push hook que valide (ou sugira renomear) antes do push.


