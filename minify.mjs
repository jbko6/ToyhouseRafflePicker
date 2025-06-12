import { minify } from 'minify';
import fs from 'fs';

const instructions = `# RAFFLE SCRIPT
### Authored by jbko6 6/11/2025

### HOW TO USE:
1. Copy the script below
2. Create a new bookmark in your browser.
3. Paste the script into the URL/location field of the bookmark.
4. Save the bookmark.
5. Navigate to the Toyhouse raffle page.
6. Click the bookmark to run the script.
7. You may need to wait a few moments depending on your network speed.

\`\`\`
$SOURCE$
\`\`\`
`;

const minify_options = {
    "js": {
        "type": "terser",
        "terser": {
            "mangle": false,
            "compress": {
                "dead_code": false,
                "directives": false,
                "expression": true
            }
        }
    }
}

const script = "javascript:".concat(await minify('source.js', minify_options));

const read_me = instructions.replace('$SOURCE$', script);

console.log("Writing to README.md...");
fs.writeFileSync('README.md', read_me);
console.log("Done! Check README.md for the minified script and instructions.");