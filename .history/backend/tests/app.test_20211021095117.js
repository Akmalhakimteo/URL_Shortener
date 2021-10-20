// jest.useFakeTimers();
const supertest = require('supertest')
const app = require('../fakeapp')

test("testing the app.test working", () => {
    const result = "tes";
    expect(result).toBe("tes");
  });
  