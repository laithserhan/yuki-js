"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const esprima_1 = require("esprima");
const __1 = require("..");
const escodegen_1 = require("escodegen");
const bresenhamYukiSource = fs_1.readFileSync('./src/examples/bresenham.yuki.js', 'utf8');
const bresenhamYukiLib = fs_1.readFileSync('./src/examples/bresenham.lib.js', 'utf8');
const program = esprima_1.parseModule(bresenhamYukiSource, { loc: true });
const lib = esprima_1.parseScript(bresenhamYukiLib);
const options = {
    lib
};
const { main } = __1.compile(program, options);
const outputSource = escodegen_1.generate(main);
fs_1.writeFileSync('./dist/examples/bresenham.out.js', outputSource, 'utf8');
//# sourceMappingURL=bresenham.js.map