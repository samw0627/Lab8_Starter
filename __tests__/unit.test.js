// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber test1: True', ()=> {
    expect(isPhoneNumber("858-333-0678")).toBe(true);
})

test('isPhoneNumber test2: True'), ()=> {
    expect(isPhoneNumber("333-333-3333"))
}