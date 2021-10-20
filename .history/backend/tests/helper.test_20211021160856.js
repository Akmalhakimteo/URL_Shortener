jest.useFakeTimers();
const helper = require("../utils/helper");
const Short = require("../models/short.model");
const sequelize = require("sequelize");

jest.mock("../models/short.model.js");

describe("Test Short ID Generator", () => {
  // beforeEach(() => {
  //   const mock = jest.spyOn(Short, "findByPk");
  //   mock.mockImplementation(() => Promise.resolve(null));
  // })
  // afterEach(()=>{

  // })
  test("each generated ID must not be null", () => {
    const id = helper.generateUniqueShortID();
    expect(id).toBeTruthy();
  });

  test("each generated ID must be a string",()=>{
    const id = helper.generateUniqueShortID()
    expect(id).to
  })
});
