const helper = require("../utils/helper");
const Short = require("../models/short.model");

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

  test("each generated ID must be an object (promise that awaits a string)",()=>{
    const id = helper.generateUniqueShortID()
    expect(typeof(id)).toBe('object')
  })

  test("each generated ID must be 7 characters long")

});
