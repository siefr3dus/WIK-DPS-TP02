import http from 'http';

const PORT = process.env.PING_LIST_PORT?.toString() || 3000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    switch (req.url) {
        case "/ping":
            res.writeHead(200);
            res.write(JSON.stringify(req.headers));
            res.end();
            break
        default:
            res.writeHead(404);
            res.end();
    }

});

server.listen(PORT, () => {
});