import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateDailyBrief } from './agents.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BRIEF_OUT = join(__dirname, '..', 'knowledge', 'latest-daily-brief.json');

export async function runDailyBriefRoutine() {
  const brief = await generateDailyBrief();
  mkdirSync(dirname(BRIEF_OUT), { recursive: true });
  writeFileSync(BRIEF_OUT, JSON.stringify(brief, null, 2), 'utf8');
  return brief;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runDailyBriefRoutine().then((brief) => {
    console.log('=== J.A.R.V.I.S. DAILY BRIEF ROUTINE ===');
    console.log(`Generated At: ${brief.generatedAt}`);
    console.log('\n' + brief.speechText + '\n');
    console.log('Saved to knowledge/latest-daily-brief.json');
  });
}
