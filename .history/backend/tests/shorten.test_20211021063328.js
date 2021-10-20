jest.useFakeTimers()
const helper = require('../utils/helper')
const {Short} = require('../models/short.model')
const sequelize = require('sequelize')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test("testing the jest working", () => {
  const result = "tes";
  expect(result).toBe("tes");
});



// test('GET to route "/" returns a JSON object', async () => {
//   await api
//     .get("/")
//     .expect(200)
//     .expect("Content-Type", /application\/json/);
// }, 100000);
