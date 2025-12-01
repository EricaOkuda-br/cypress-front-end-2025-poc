import yaml from 'js-yaml';

export const getElement = (yamlName, fieldName) => {
  const path = `cypress/support/elements/${yamlName}`;

  return cy.readFile(path).then((fileContent) => {
    const json = yaml.load(fileContent);
    
    const selector = json.login[fieldName].selector;

    if (!selector) {
      throw new Error(`Seletor não encontrado para: ${fieldName}`);
    }
    return cy.get(selector);
  });
};