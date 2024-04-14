import { Input } from '../interfaces/input';
import { Output } from '../interfaces/output';
import { inputList } from '../stubs/input';
import { outputList } from '../stubs/output';
import { convertFromInputToOutput } from './convert';

describe('convertFromInputToOutput tests', () => {
  it('should receive input and return converted ', () => {   
    console.log('INPUT', inputList)
    console.log('OUTPUT', outputList)
    const output = convertFromInputToOutput(inputList);
    console.log('resultado', output)

    // expect(output.entryId).toBe(123); 
    // expect(output.fullPath).toBe('/example/path');
  });

  // it('should convert from Input to Output with entryId as number and fullPath as path', () => {
  //   const input: Input = {
  //     entryId: '123', 
  //     path: '/example/path',
  //   };
    
  //   const output: Output = convertFromInputToOutput(input);
    
  //   expect(output.entryId).toBe(123); 
  //   expect(output.fullPath).toBe('/example/path');
  // });

  // it('should handle entryId when is not number', () => {
  //   const input: Input = {
  //     entryId: 'abc',
  //     path: '/another/path',
  //   };
    
  //   const output: Output = convertFromInputToOutput(input);
    
  //   expect(output.entryId).toBeNaN();
  // });
});
