/**
 * Screen Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a screen component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or screen with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this screen?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
  ],
  actions: data => {
    // Generate index.js
    const actions = [
      {
        type: 'add',
        path: '../../src/screens/{{properCase name}}/index.js',
        templateFile: './screen/index.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/messages.js',
        templateFile: './screen/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/actions.js',
        templateFile: './screen/actions.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/constants.js',
        templateFile: './screen/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/selectors.js',
        templateFile: './screen/selectors.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/reducer.js',
        templateFile: './screen/reducer.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/saga.js',
        templateFile: './screen/saga.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/screens/',
    });

    return actions;
  },
};
