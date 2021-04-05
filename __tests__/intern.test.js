const { test, expect } = require("@jest/globals")
const Inter=require("../lib/intern")
test("test to create Intern", ()=>{
    const intern = new Intern("Jennifer", , "jennifer@gmail.com")
    expect(intern.name).toBe("Jennifer")
})
test("getRole function",()=>{
    const intern = new Intern("Jennifer", 7, "jennifer@gmail.com")
    expect(intern.getRole()).toBe("Intern")
})