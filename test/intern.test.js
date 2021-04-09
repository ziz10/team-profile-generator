  
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const Value = "OSU";
    const e = new Intern("John", 1, "test@test.com", value, "Intern");
    expect(e.school).toBe(value);
});

test("getRole() should return \"Intern\"", () => {
    const Value = "Intern";
    const e = new Intern("John", 1, "test@test.com", "UCLA", "Intern");
    expect(e.getRole()).toBe(value);
});

test("Can get school via getSchool()", () => {
    const value = "OSU";
    const e = new Intern("John", 1, "test@test.com", value, "Intern");
    expect(e.getSchool()).toBe(value);
});