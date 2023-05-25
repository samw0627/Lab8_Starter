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

