import { Input } from "../interfaces/input";
import { Output } from "../interfaces/output";

function createEmptyChildOutput(input: Input): Output {
  const childOutput: Output = {
      entryId: parseInt(input.entryId),
      fullPath: input.path.join('/'), 
      currentPath: input.path.find(item => item.includes('root')) ?? 'not informed',
      children: [],
  };  
  return childOutput;
}

function findChildOutput(currentPath: string, children: Output[], input: Input): Output {
  for (let child of children) {
      if (child.currentPath === currentPath) {
        return child;
      }
  }
  return createEmptyChildOutput(input);
}


export function convertFromInputToOutput(input: Input[]): Output[] {

  const output: Output[] = [];
  const childrenList: Output[] = [];


  input.forEach((entry) => {
    childrenList.push(findChildOutput(entry.path[input.length], output, entry))

    const outputEntry: Output = {
      entryId: parseInt(entry.entryId),
      fullPath: entry.path.join('/'),
      currentPath: entry.path.find(item => item.includes('root')) ?? 'not informed',
      children: childrenList,
    }

    output.push(outputEntry)

  });
  
  return output
 } 