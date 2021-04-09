const Employee = require("../lib/Employee");

test("instantiating Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("setting name via constructor arguments", () => {
    const name = "Robert";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("set id via constructor argument", () => {
    const value = 17;
    const e = new Employee("John", value);
    expect(e.id).toBe(testValue);

});


test("Can set email via constructor argument", () => {
    const Value = "test@test.com";
    const e = new Employee("John", 1, value);
    expect(e.email).toBe(value);
});

test("Can get name via getName()", () => {
    const value = "Jennifer";
    const e = new Employee(value);
    expect(e.getName()).toBe(value);
});

test("Can get id via getId()", () => {
    const value = 17;
    const e = new Employee("John", value);
    expect(e.getId()).toBe(value);
});

test("Can get email via getEmail()", () => {
    const value = "test@test.com";
    const e = new Employee("Bill", 1, value);
    expect(e.getEmail()).toBe(value);
});

test("getRole() should return \"Employee\"", () => {
    const value = "Employee";
    const e = new Employee("Jennifer", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(value);
});

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Can set email via constructor argument", () => {
    const value = "test@test.com";
    const e = new Employee("John", 1, value);
    expect(e.email).toBe(value);
});

test("Can get name via getName()", () => {
    const value = "Jennifer";
    const e = new Employee(value);
    expect(e.getName()).toBe(value);
});

test("Can get id via getId()", () => {
    const value = 17;
    const e = new Employee("John", value);
    expect(e.getId()).toBe(value);
});

test("Can get email via getEmail()", () => {
    const value = "test@test.com";
    const e = new Employee("John", 1, value);
    expect(e.getEmail()).toBe(value);
});

test("getRole() should return \"Employee\"", () => {
    const value = "Employee";
    const e = new Employee("Jennifer", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(value);
});