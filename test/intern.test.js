  
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "CSCC";
  const e = new Intern("Foo", 1, "test@test.com", school);
  expect(e.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
  const school = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "CSCC");
  expect(e.getRole()).toBe(school);
});

test("Can get school via getSchool()", () => {
  const school = "CSCC";
  const e = new Intern("Foo", 1, "test@test.com", school);
  expect(e.getSchool()).toBe(school);
});