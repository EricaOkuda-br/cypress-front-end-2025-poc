# Definição

- Este documento explica a utilização, em qual situação e como criar um arquivo page. Com isso, a finalidade é facilitar a criação e referenciação de um arquivo page, alinhado à documentação e legibilidade do projeto de automação.

> **Orientação:** Sempre consulte este documento antes de criar um novo arquivo page. Caso um arquivo similar já exista para uma tela específica do Portal Credenciado, avalie a possibilidade de reuso.

---
## Conteúdo da Pasta Pages

**basePage.ts**: Neste arquivo encontram-se todos os métodos funcionais, disponibilizados como base para os demais arquivos page, referentes às telas específicas do sistema.
> Note que a cada início de arquivo page de uma tela do Portal Credenciado, a basePage é importada da seguinte maneira: `import { BasePage } from '@/pages/basePage';`

**pages.ts**: Este arquivo centraliza o acesso às páginas do sistema e facilita a reutilização, tendo em vista que ao invés de instanciar páginas separadamente em cada suite de testes, o trecho new Pages(page, testInfo) é utilizado e tudo é acessado através de um arquivo. Portanto, este arquivo é imprescindível ao criar uma nova page.
> Sendo assim, perceba que há no código de pages.ts um construtor, que recebe dois parâmetros:
`page: a aba do navegador usada nos testes.`
`testInfo: informações sobre o teste atual.`

Cada página é instanciada com esses dois parâmetros, permitindo que todas compartilhem o mesmo contexto de teste:
"""
constructor (page: Page,  testInfo: TestInfo) {
    this.loginPage = new LoginPage(page, testInfo);
}
"""

## Localizadores
> A fim de seguir boas práticas ao nomear localizadores, certifique-se de acrescentar na primeira parte do nome do localizador, sua respectiva categoria, resumida em 3 caracteres.
`Exemplo de nome padronizado: btnBenefNaoRecebeuToken`

Ao chamar na page:
"""
    async opcSemTokenComJustificativa(arquivo: string) {
        await this.validarElementoVisivel(this.elements_atend.tituloConfirmarAtendimento);
    }
"""

- Para mais detalhes e visualização de tabela com nomes de localizadores que seguem boas práticas, considere ler o arquivo PRATICAS_LOCATORS.md, presente na pasta doc do projeto Portal Credenciado.