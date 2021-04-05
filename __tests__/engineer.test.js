const { test, expect } = require("@jest/globals")
const Engineer=require("../Eneginerr")
test("test to create Engineer", ()=>{
    const engineer = new Engineer("John", 7, "johndoe@gmail.com")
    expect(engineer.name).toBe("John")
})
test("getRole function",()=>{
    const engineer = new Engineer("John", 7, "johndoe@gmail.com")
    expect(engineer.getRole()).toBe("Engineer")
})