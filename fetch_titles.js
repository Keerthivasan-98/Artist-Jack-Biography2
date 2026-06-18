const fs = require('fs');
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
          resolve(json.title);
        } catch (e) {
          resolve('YouTube Video');
        }
      });
    }).on('error', () => resolve('YouTube Video'));
  });
}

async function main() {
  const videos = [];
  let counter = 4; // since 1-3 are already there
  for (const id of ids) {
    const title = await fetchTitle(id);
    videos.push({
      id: 'v' + counter,
      title: title.replace(/'/g, "\\'"),
      youtubeId: id,
      thumbnailUrl: 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg',
      category: 'Showreel',
      duration: '0:00'
    });
    counter++;
  }

  let codeStr = 'export const VIDEOS: VideoItem[] = [\n';
  // Include first three videos from data.ts
  codeStr += `  {
    id: 'v1',
    title: 'Gurkha Movie | Full Comedy Scene | Part 1',
    youtubeId: 'dGXJ1rc0RtA',
    thumbnailUrl: 'https://img.youtube.com/vi/dGXJ1rc0RtA/hqdefault.jpg',
    category: 'Showreel',
    duration: '4:21'
  },
  {
    id: 'v2',
    title: 'Asuraguru Movie Part 1 | Vikram Prabhu, Yogi Babu',
    youtubeId: '9jHaIAFh0LM',
    thumbnailUrl: 'https://img.youtube.com/vi/9jHaIAFh0LM/hqdefault.jpg',
    category: 'Showreel',
    duration: '6:18'
  },
  {
    id: 'v3',
    title: 'If Kaatrin Mozhi was a thriller movie',
    youtubeId: 'Kn6txoX7q3w',
    thumbnailUrl: 'https://img.youtube.com/vi/Kn6txoX7q3w/hqdefault.jpg',
    category: 'Showreel',
    duration: '1:44'
  },\n`;

  for (let i = 0; i < videos.length; i++) {
    const v = videos[i];
    codeStr += `  {
    id: '${v.id}',
    title: '${v.title}',
    youtubeId: '${v.youtubeId}',
    thumbnailUrl: '${v.thumbnailUrl}',
    category: '${v.category}',
    duration: '${v.duration}'
  }${i === videos.length - 1 ? '' : ','}\n`;
  }
  codeStr += '];\n';
  
  fs.writeFileSync('generated_videos.txt', codeStr);
}

main();
