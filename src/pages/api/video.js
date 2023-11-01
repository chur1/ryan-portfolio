import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const videoPath = path.join(process.cwd(), 'public', 'videos', 'Sequence_01.mp4'); // Use absolute path

    try {
        const videoStat = fs.statSync(videoPath);
        const fileSize = videoStat.size;
        const range = req.headers.range;

        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunkSize = end - start + 1;
            const file = fs.createReadStream(videoPath, { start, end });

            // Set headers to enable autoplay and looping
            res.writeHead(206, {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'Content-Type': 'video/mp4',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': 0,
            });

            file.pipe(res);
        } else {
            // Set headers to enable autoplay and looping
            res.writeHead(200, {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': 0,
            });

            fs.createReadStream(videoPath).pipe(res);
        }
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
}
