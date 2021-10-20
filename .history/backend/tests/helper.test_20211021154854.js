jest.useFakeTimers()
const helper = require('../utils/helper')
const {Short} = require('../models/short.model')
const sequelize = require('sequelize')

jest.mock('../models/short.model.js')


describe('Test Short ID Generator',()=>{
  beforeEach(()=>{
    const 
  })


})

test("testing the app.test working", () => {
  const result = "test";
  expect(result).toBe("test");
});
