module.exports = {
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{js,jsx}',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/app/__mocks__/styleMock.js',
    '\\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|cur)$': '<rootDir>/app/__mocks__/fileMock.js',
    '^app(.*)$': '<rootDir>/app$1',
    '^actions(.*)$': '<rootDir>/app/actions$1',
    '^assets(.*)$': '<rootDir>/app/assets$1',
    '^components(.*)$': '<rootDir>/app/components$1',
    '^constants(.*)$': '<rootDir>/app/constants$1',
    '^main(.*)$': '<rootDir>/app/main$1',
    '^renderer(.*)$': '<rootDir>/app/renderer$1',
    '^process(.*)$': '<rootDir>/app/process$1',
    '^setting(.*)$': '<rootDir>/app/renderer/pages/setting$1',
    '^store(.*)$': '<rootDir>/app/store$1',
    '^widget(.*)$': '<rootDir>/app/renderer/pages/widget$1',
    '^utils(.*)$': '<rootDir>/app/utils$1',
  },
  transform: {
    '^.+\\.jsx?$': '<rootDir>/config/babel/babel.jest.js',
  },
  rootDir: '../../',
  globals: {
    __dirname: '<rootDir>',
  },
  setupTestFrameworkScriptFile: '<rootDir>/config/enzyme.config.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
