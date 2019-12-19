//run this with `npm test`

let testMD = `
# Markdown-it plugin and vscode markdown preview extension

- I want to write a [npm markdown-it plugin](https://www.npmjs.com/search?q=keywords%3Amarkdown-it-plugin)

\`\`\`er
title {label: "Entity-Relationship Diagram Example", size: "20"}

[Person] {bgcolor: "#d0e0d0"}
*name {label: "full name, not null"}
height
weight
+birth_location_id

[Location] {bgcolor: "#ececfc"}
*id
city
state
country {label: "varchar, not null"}

Person *--1 Location {label: "has"}
\`\`\`
`;

console.log(testMD);