const helper = require("../utils/helper");
const {Short} = require('../models/short')

jest.mock("../models/short");
describe("Test Short ID Generator", () => {
  // beforeEach(() => {
  // const mock = jest.spyOn(Short, "findByPk");
  // mock.mockImplementation(() => Promise.resolve(null));
  // });
  // afterEach(()=>{

  // })
  test("each generated ID must not be null", async () => {
    const mock = jest.spyOn(Short, "findByPk");
    mock.mockImplementation(() => Promise.resolve(null));
    const id = await helper.generateUniqueShortID();
    expect(id).toBeTruthy();
  });

  test("each generated ID must be an object (promise that awaits a string)", async () => {
    const id = await helper.generateUniqueShortID();
    expect(typeof id).toBe("object");
  });

  test("each generated ID must be 7 characters long", async () => {
    const id = await helper.generateUniqueShortID();
    expect(id).toHaveLength(7);
  });
});
