import { sum } from "../sum"

test('Must add two numbers', () => { 
    const result = sum(3,4);

    //Assertion

    expect(result).toBe(7);
 })