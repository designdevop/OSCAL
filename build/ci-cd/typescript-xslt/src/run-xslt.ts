﻿#!/usr/bin/env node

import * as SaxonJS from "saxon-js/SaxonJS2N.js";
//const SaxonJS = require('SaxonJS');

const workingDir: string = process.cwd()

/*nameIn is a file named on the cl */
const nameIn: string = process.argv[2]

/*const sysPath: string = 'file:///C:/Users/wap1/source/repos/NodejsTestConsole/src'*/

/*
 * CL to compile hello-world.xsl as hello.sef.json
 * xslt3 - t - xsl: hello-world.xsl -export: hello.sef.json - nogo
*/

let sourceXML: string = `${workingDir}/${nameIn}`
let xsltFile:  string = 'hello-world.xsl'
let sefFile: string = 'hello.sef.json'

//console.log ("Filename:",`${nameIn}`);

console.log (process.argv);

/*API docs: http://www.saxonica.com/saxon-js/documentation/index.html#!api/transform */

SaxonJS.transform({
    stylesheetFileName: sefFile,
    stylesheetBaseURI: xsltFile,
    sourceFileName: sourceXML,
    /*sourceText: helloString, - for testing */
    /*destination: "serialized",  - pick up from htmlout.principalResult */
    destination: "stdout",
    /* to write to file:
     * destination: "file",
     * baseOutputURI: resultFile*/
})

/*console.log(htmlout.principalResult) - pick up serialized output*/

/*    .then(output) {
    response.writeHead(200, { 'Content-Type': 'application/xml' });
    response.write(output.principalResult);
    response.end();
});  */
