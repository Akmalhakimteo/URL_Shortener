jest.useFakeTimers()
const Short = require('../models/short.model')
const supertest = require('supertest')
// const app = require('../app')



jest.useFakeTimers();
test("testing the app.test working", () => {
    const result = "test";
    expect(result).toBe("test");
  });
  