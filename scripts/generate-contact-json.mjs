#!/usr/bin/env node
/**
 * Reads src/data/contact.json and writes public/contact.json
 * with base64-encoded email (e) and phone (p) for client-side reveal.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src/data/contact.json');
const dest = join(root, 'public/contact.json');

const data = JSON.parse(readFileSync(src, 'utf8'));
const out = {
  e: Buffer.from(String(data.email), 'utf8').toString('base64'),
  p: Buffer.from(String(data.phone), 'utf8').toString('base64'),
};

mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, JSON.stringify(out) + '\n');
console.log(`Wrote ${dest}`);
