const helper = require("../utils/helper");
const { Short } = require("../models/short");

jest.mock("../models/short");
describe("Test Short ID Generator", () => {
  beforeEach(() => {
    const spy = jest.spyOn(Short, "findByPk");
    spy.mockImplementation(() => Promise.resolve(null));
  });
  // afterEach(() => {});
  test("each generated ID must not be null", async () => {
    // const spy = jest.spyOn(Short, "findByPk");
    spy.mockImplementation(() => Promise.resolve(null));
    const id = await helper.generateUniqueShortID();
    expect(spy).toHaveBeenCalled();
    expect(id).toBeTruthy();
  });

  test("each generated ID must be an object (promise that awaits a string)", async () => {
    const spy = jest.spyOn(Short, "findByPk");
    spy.mockImplementation(() => Promise.resolve(null));
    const id = await helper.generateUniqueShortID();
    expect(spy).toHaveBeenCalled();
    expect(typeof id).toBe("string");
  });

  test("each generated ID must be 7 characters long", async () => {
    const spy = jest.spyOn(Short, "findByPk");
    spy.mockImplementation(() => Promise.resolve(null));
    const id = await helper.generateUniqueShortID();
    expect(spy).toHaveBeenCalled();
    expect(id).toHaveLength(7);
  });
});
