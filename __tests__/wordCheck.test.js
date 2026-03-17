import test from 'node:test';
import assert from 'node:assert';
import wordCheck from '../wordCheck.js';

test('Alla bokstäver är rätt', () =>{
    const result = wordCheck('CYKLA', 'CYKLA');
})