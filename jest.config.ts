module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/__tests__/utils'],
  testMatch: ['**/__tests__/**'],
  testEnvironment: "jsdom"
};