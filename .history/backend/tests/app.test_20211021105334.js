jest.useFakeTimers();
const {Short} = require('../')
const supertest = require('supertest')
const app = require('../app')

test("testing the app.test working", () => {
    const result = "test";
    expect(result).toBe("test");
  });
  