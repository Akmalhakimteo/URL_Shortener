const {helper} = require('../utils/helper')
const {Short} = require('../models/short.model')

jest.mock('../models/short.model')

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
