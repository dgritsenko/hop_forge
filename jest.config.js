/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom', // Важно для тестирования React/браузерных фич
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Чтобы работал алиас @
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Если нужен глобальный сетап
}