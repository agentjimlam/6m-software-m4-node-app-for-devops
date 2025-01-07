const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname),
    // The root directory containing your test files
    // roots: ['<rootDir>/src'],
  
    // Match test files with specific extensions and patterns
    testMatch: [
      '**/__tests__/**/*.(js|jsx|ts|tsx)',
      '**/?(*.)+(spec|test).(js|jsx|ts|tsx)',
    ],
  
    // Transform files before testing using Babel or ts-jest for TypeScript
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Replace 'babel-jest' with 'ts-jest' for TypeScript projects
    },
  
    // Automatically clear mock calls and instances between tests
    clearMocks: true,
  
    // Coverage settings
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  
    // Additional module file extensions
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
    // Module path aliases
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  
    // Setup files for configuring the testing environment
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
    // Test environment settings (e.g., jsdom for React apps)
    testEnvironment: 'jsdom',
  
    // Handle static assets like images or stylesheets
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    },
  
    // Mock timers globally if required
    fakeTimers: {
      enableGlobally: true,
    },
  };