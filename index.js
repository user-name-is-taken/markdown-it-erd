import erd from 'erd'
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();

/**
 * This function converts the erd syntax to svg of that erd
 * 
 * @param {A string that contains an ERD in the erd format} erdCode 
 * @returns The svg
 */
function erdToHTML( erdCode ){
    erd({ modelsText: erdCode, outputType: "html"});
    return fs.readFileSync(path.join(__dirname, "../erd.html"), { encoding: 'utf8' });
}

/**
 * This is built mostly on the mirmaid markdown-it-mermaid project because mermaid is similar to erd. I'm still unsure how to use the png output of erd.
 * 
 * @see https://github.com/tylingsoft/markdown-it-mermaid
 * @see https://www.npmjs.com/package/erd
 * @param {Fenced ERD code blocks} md 
 */
const ErdPlugin = (md) => {
    const temp = md.renderer.rules.fence.bind(md.renderer.rules);
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        const code = token.content.trim()
        if (token.info === 'mermaid') {
          return mermaidChart(code)
        }
        const firstLine = code.split(/\n/)[0].trim()
        if (firstLine === 'gantt' || firstLine === 'sequenceDiagram' || firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) {
          return mermaidChart(code)
        }
        return temp(tokens, idx, options, env, slf)
    };
}

export default ErdPlugin
