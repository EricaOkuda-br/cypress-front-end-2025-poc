import yaml from 'js-yaml';

export const getElement = (yamlName, fieldName, sectionName = 'login') => {
  const path = `cypress/support/elements/${yamlName}`;

  return cy.readFile(path).then((fileContent) => {
    const json = yaml.load(fileContent);

    const selector = json?.[sectionName]?.[fieldName]?.selector;

    if (!selector) {
      throw new Error(`Seletor não encontrado para: ${sectionName}.${fieldName}`);
    }
    return cy.get(selector);
  });
};

export const loadYamlElements = (yamlName, sectionName) => {
  const path = `cypress/support/elements/${yamlName}`;

  return cy.readFile(path).then((fileContent) => {
    const json = yaml.load(fileContent) ?? {};
    const section = json?.[sectionName];

    if (!section || typeof section !== 'object') {
      throw new Error(`Seção não encontrada no YAML: ${sectionName}`);
    }

    const selectors = {};
    for (const [key, value] of Object.entries(section)) {
      if (value && typeof value === 'object' && 'selector' in value) {
        selectors[key] = value.selector;
      }
    }

    if (Object.keys(selectors).length === 0) {
      throw new Error(`Nenhum seletor encontrado na seção: ${sectionName}`);
    }

    return selectors;
  });
};