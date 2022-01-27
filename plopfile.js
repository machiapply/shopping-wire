module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a React component and test',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Component name, e.g. ProfileEmptyState',
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Directory path, without leading and trailing slashes',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/index.tsx',
        templateFile: 'src/codegen/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/__tests__/index.test.tsx',
        templateFile: 'src/codegen/component-test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/index.stories.tsx',
        templateFile: 'src/codegen/component-storybook.hbs',
      },
    ],
  });

  plop.setGenerator('styled-component', {
    description: 'Generate a React component that implements styled-components',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Component name, e.g. Text',
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Directory path, without leading and trailing slashes',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/index.tsx',
        templateFile: 'src/codegen/component-styled.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/__tests__/index.test.tsx',
        templateFile: 'src/codegen/component-styled-test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/index.stories.tsx',
        templateFile: 'src/codegen/component-storybook.hbs',
      },
    ],
  });

  plop.setGenerator('next-page', {
    description: 'Generate a Next.js page',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Page name, e.g. ContactUs',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'pages/{{kebabCase namespace}}.tsx',
        templateFile: 'src/codegen/next-page.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase namespace}}/index.tsx',
        templateFile: 'src/codegen/component.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase namespace}}/__tests__/index.test.tsx',
        templateFile: 'src/codegen/component-test.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase namespace}}/index.stories.tsx',
        templateFile: 'src/codegen/component-storybook.hbs',
      },
    ],
  });

  plop.setGenerator('util', {
    description: 'Generate a JavaScript utility function and test',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Method name, e.g. transformUserPayload',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/utils/{{camelCase namespace}}/index.ts',
        templateFile: 'src/codegen/util.hbs',
      },
      {
        type: 'add',
        path: 'src/utils/{{camelCase namespace}}/index.test.ts',
        templateFile: 'src/codegen/util-test.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Generate a React hook',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Method name, e.g. useRedirectTo',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase namespace}}/index.ts',
        templateFile: 'src/codegen/util.hbs',
        abortOnFail: false,
      },
      {
        type: 'add',
        path: 'src/hooks/{{camelCase namespace}}/index.test.ts',
        templateFile: 'src/codegen/util-test.hbs',
        abortOnFail: false,
      },
    ],
  });
};
