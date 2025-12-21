import { parse } from 'yamljs';
import { fs } from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function readAndParseContent(filePath) {
  const fileContent = await readFile(filePath, 'utf8');
  const parsedContent = parse(fileContent);
  return parsedContent;
}

async function parseFile(filePath) {
  try {
    const fileContent = await readAndParseContent(filePath);
    return fileContent;
  } catch (error) {
    console.error(`Error parsing file: ${error.message}`);
    return null;
  }
}

async function main() {
  const filePath = path.join(__dirname, 'data', 'config.yaml');
  const parsedFile = await parseFile(filePath);
  if (parsedFile) {
    console.log(parsedFile);
  }
}

main();