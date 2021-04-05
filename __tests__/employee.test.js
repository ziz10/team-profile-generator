const { test, expect } = require("@jest/globals")
const Employee=require("../lib/employee")
test("test to create Employee", ()=>{
    const employee = new Employee("Abdoul", 7, "bassabdoul7@gmail.com")
    expect(employee.name).toBe("Abdoul")
})
test("getRole function",()=>{
    const employee = new Employee("Abdoul", 7, "bassabdoul7@gmail.com")
    expect(employee.getRole()).toBe("Employee")
})