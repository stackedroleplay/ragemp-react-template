import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');
const htmlDir = path.join(distPath, '../../client_packages/ui/dist');

if (!fs.existsSync(htmlDir)) {
    console.log(`Creating directory: ${htmlDir}`);
    fs.mkdirSync(htmlDir, { recursive: true });
}

const entries = fs.readdirSync(distPath, { withFileTypes: true });

for (const entry of entries) {
    const srcPath = path.join(distPath, entry.name);
    const destPath = path.join(htmlDir, entry.name);

    if (entry.isDirectory()) {
        fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
        fs.copyFileSync(srcPath, destPath);
    }
}
console.log(`Moved files from ${distPath} to ${htmlDir}`);

fs.rmSync(distPath, { recursive: true, force: true });
console.log(`Deleted folder: ${distPath}`);
