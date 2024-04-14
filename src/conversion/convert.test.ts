import { Input } from '../interfaces/input';
import { Output } from '../interfaces/output';
import { inputList } from '../stubs/input';
import { outputList } from '../stubs/output';
import { convertFromInputToOutput } from './convert';

describe('convertFromInputToOutput tests', () => {
  it('should receive input and return output converted ', () => {   
    const output = convertFromInputToOutput(inputList);
    console.log('resultado', output)

    expect(output[0].entryId).toBe(1); 
    expect(output[0].fullPath).toBe('root1');
    expect(output[0].currentPath).toBe('root1');
    expect(output[0].children).toBeInstanceOf(Array)
  });

  it('should return empty array when input is empty', () => {
    const input: Input[] = [];
    const output = convertFromInputToOutput(input);
    expect(output).toEqual([]);
  });

  it('should convert from Input to Output with entryId as number and fullPath as path', () => {
    const inputs: Input[] = [];

    const input: Input = {
      entryId: '123', 
      path: ['/any/path'],
    };

    inputs.push(input);
    
    const outputs = convertFromInputToOutput(inputs);
    
    expect(outputs[0].entryId).toBe(123);
    expect(outputs[0].fullPath[0]).toBe('/'); 
  });

  it('should handle entryId when is not number', () => {
    const inputs: Input[] = [];
    
    const input: Input = {
      entryId: 'abc',
      path: ['/another/path'],
    };

    inputs.push(input)
    
    const output = convertFromInputToOutput(inputs);
    
    expect(output[0].entryId).toBeNaN();
  });
});


