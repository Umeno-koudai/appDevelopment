import { expect, test } from 'vitest'
import { hello } from './index'

test('', () => {
    const result = hello();
    expect(result === null).toBe(false);
    console.log(`Message:${result}`);
})