#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const iroiro = require("iroiro");

const colors = iroiro.colors.reduce(
  (colors, { romanized, value }) => ({
    ...colors,
    [romanized.toLowerCase()]: value,
  }),
  {},
);

const filename = path.resolve(__dirname, '../scss/_variables.scss');
const contents = `// GENERATED -- DO NOT EDIT
${Object.entries(colors).map(([name, hex]) => `$${name}: ${hex} !default;`).join('\n')}

$colors: (
${Object.keys(colors).map((name) => `  "${name}": $${name},`).join('\n')}
) !default;
`;

fs.writeFileSync(filename, contents);
