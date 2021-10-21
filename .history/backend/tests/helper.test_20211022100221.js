const helper = require("../utils/helper");
const { Short } = require("../models/short");

jest.mock("../models/short");
let spy;
describe("Test Short ID Generator", () => {
  beforeEach(() => {
    spy = jest.spyOn(Short, "findByPk");
    spy.mockImplementation(() => Promise.resolve(null));
  });
  afterEach(() => {
    spy.mockRestore();
  });
  test("each generated ID must not be null", async () => {
    const id = await helper.generateUniqueShortID();
    expect(spy).toHaveBeenCalled();
    expect(id).toBeTruthy();
  });

  test("each generated ID must be a string", async () => {
    const id = await helper.generateUniqueShortID();
    expect(spy).toHaveBeenCalled();
    expect(typeof id).toBe("string");
  });

  test("each generated ID must be exactly 7 characters long", async () => {
    const id = await helper.generateUniqueShortID();
    expect(spy).toHaveBeenCalled();
    expect(id).toHaveLength(7);
  });

  test("all generated IDs must be unique", async () => {
    let array = [];
    for (let i = 0; i < 5000; i++) {
      let id = await helper.generateUniqueShortID();
      array = [...array, id];
    }
    const isArrayUnique = (arr) => new Set(arr).size === arr.length;
    expect(isArrayUnique(array)).toBeTruthy();
  });

  test("if ID is not unique, should generate new ID", async () => {
    const alternateSpy = jest.spyOn(Short, "findByPk");
    alternateSpy.mockImplementation(() => Promise.resolve(null));
    alternateSpy.mockReturnValueOnce(Promise.resolve(1));
    const id = await helper.generateUniqueShortID();
    expect(alternateSpy).toHaveBeenCalledTimes(2);
  });
});


describe("Test URL Validator ",()=>{
  


})
