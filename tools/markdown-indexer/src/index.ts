#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import frontMatter from 'front-matter';
import { exit } from 'process';

if (process.argv.length < 4) {
    console.log("Please provide 'input path' and 'output file' arguments")
    exit(1)
}

const inputPath = getAbsolutePath(process.argv[2] ?? '')
const outputFile = getAbsolutePath(process.argv[3] ?? '')

var files = getMarkdownFiles(inputPath)
const markdownMetaData: any[] = getMarkdownMetaData();

fs.writeFileSync(outputFile, JSON.stringify(markdownMetaData));


function getMarkdownMetaData(): any[] {
    let markdownMetaData: any[] = []

    files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf-8');
        const parseResult = frontMatter(content);

        const fullPath = path.relative(inputPath, file).replace('\\', '/')
        const parsedPath = path.parse(fullPath);
        const fileName = parsedPath
        const metaData = { fullPath: fullPath, folder: parsedPath.dir, fileName: parsedPath.name, attributes: parseResult.attributes }
        markdownMetaData.push(metaData);
    });

    markdownMetaData = markdownMetaData.sort((m1, m2) => m1.attributes.date < m2.attributes.date ? 1 : -1);

    return markdownMetaData
}

function getMarkdownFiles(dir: string): string[] {
  const files = fs.readdirSync(dir, {recursive: true, withFileTypes: true});
  return files
    .filter(file => file.isFile() && file.name.endsWith('.md'))
    .map(file => path.join(file.parentPath, file.name));
}

function getAbsolutePath(pathArgument: string) : string {
    if (!path.isAbsolute(pathArgument))
    {
        pathArgument = path.join(process.cwd(), pathArgument)
    }
    
    console.log(pathArgument)
    return pathArgument
}