
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const Value = 17;
    const e = new Manager("John", 1, "test@test.com", value, "Manager");
    expect(e.officeNumber).toBe(value);
});

test("getRole() should return \"Manager\"", () => {
    const value = "Manager";
    const e = new Manager("John", 1, "test@test.com", 17, "Manager");
    expect(e.getRole()).toBe(value);
});

test("Can get office number via getOffice()", () => {
    const Value = 17;
    const e = new Manager("Bill", 1, "test@test.com", value, "Manager");
    expect(e.getOfficeNumber()).toBe(value);
});