  
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const Value = "GitHubUser";
    const e = new Engineer("John", 1, "test@test.com", value, "Engineer");
    expect(e.github).toBe(value);
});

test("getRole() should return \"Engineer\"", () => {
    const value = "Engineer";
    const e = new Engineer("John", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(value);
});

test("Can get GitHub username via getGithub()", () => {
    const value = "GitHubUser";
    const e = new Engineer("John", 1, "test@test.com", value, "Engineer");
    expect(e.getGithub()).toBe(value);
});