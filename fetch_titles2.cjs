
const https = require('https');

const ids = [
  'lOCxLaCwTgY', 'fWIFCFFb4PU', 'sdcsPN7YNso', '2p5IEH2NU5k', 'pFbQNsmhyz8',
  'zce9ubIR2Vc', '-wacO822eNs', 'a2LpoYhZWZU', 'n7PBNCMMt70', 'HARpiJxJB38',
  'Bcwe9TgvuRY', 's4DzbUWJIb8', '-l48SP1D0F0', '2KXMITa8w9Q', '4DRpHW5nHYg',
  'SG6JM5TeXMU', 'HPXCGjdEA6g', '2Mew4Qyr7OU', 'eDZ0uUbfeTI'
];

async function fetchTitle(id) {
  return new Promise((resolve) => {
    https.get('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + id + '&format=json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(id + ': ' + json.title);
        } catch (e) {
          resolve(id + ': Error parsing');
        }
      });
    }).on('error', () => resolve(id + ': Network error'));
  });
}

async function main() {
  for (const id of ids) {
    const title = await fetchTitle(id);
    console.log(title);
  }
}

main();

