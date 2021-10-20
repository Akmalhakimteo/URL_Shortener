const {helper} = require('../')

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
