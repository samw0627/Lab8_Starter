// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
/**
 * Unit tests for isPhoneNumber
 */
test('isPhoneNumber test1: True', ()=> {
    expect(functions.isPhoneNumber("858-333-0678")).toBe(true);
})

test('isPhoneNumber test2: True', ()=> {
    expect(functions.isPhoneNumber("333-333-3333")).toBe(true);
})

test('isPhoneNumber test3: False', ()=> {
    expect(functions.isPhoneNumber("333-333")).toBe(false);
})

test('isPhoneNumber test3: False', ()=> {
    expect(functions.isPhoneNumber("")).toBe(false);
})

/**
 * Unit Tests for isEmail() 
 * */
test('isEmail test1: True', ()=> {
    expect(functions.isEmail("hinhin0627@gmail.com")).toBe(true);
})

test('isEmail test2: True', ()=> {
    expect(functions.isEmail("c6wong@ucsd.edu")).toBe(true);
})

test('isEmail test3: False', ()=> {
    expect(functions.isEmail("c6wong@ucsd")).toBe(false);
})

test('isEmail test4: False', ()=> {
    expect(functions.isEmail("")).toBe(false);
})

/**
 * Unit Tests for isDate()
 */
test('isDate test1: True', ()=> {
    expect(functions.isDate("12/25/2023")).toBe(true);
})
test('isDate test2: True', ()=> {
    expect(functions.isDate("1/1/2023")).toBe(true);
})
test('isDate test3: False', ()=> {
    expect(functions.isDate("1/1/23")).toBe(false);
})
test('isDate test4: False', ()=> {
    expect(functions.isDate("")).toBe(false);
})

/**
 * Unit Tests for isHexColor()
 */
test('isHexColor test1: True', ()=> {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
})
test('isHexColor test2: True', ()=> {
    expect(functions.isHexColor("#5F8")).toBe(true);
})
test('isHexColor test3: False', ()=> {
    expect(functions.isHexColor("5F88")).toBe(false);
})
test('isHexColor test4: False', ()=> {
    expect(functions.isHexColor("")).toBe(false);
})
/**
 * Unit Tests for isStrongPassword()
 */
test('isStrongPassword test1: True', ()=> {
    expect(functions.isStrongPassword("hinhin")).toBe(true);
})
test('isStrongPassword test2: True', ()=> {
    expect(functions.isStrongPassword("A9eF4Q")).toBe(true);
})
test('isStrongPassword test3: False', ()=> {
    expect(functions.isStrongPassword("")).toBe(false);
})
test('isStrongPassword test4: False', ()=> {
    expect(functions.isStrongPassword("hinhin032qt8Hw0o")).toBe(false);
})

