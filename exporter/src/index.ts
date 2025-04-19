import { createServer } from "node:http";
import type { IncomingMessage, ServerResponse } from "node:http";
import { format } from "./format";
import { getMetrics } from "./get-metrics";

const server = createServer(async (_: IncomingMessage, res: ServerResponse) => {
	try {
		res.writeHead(200, { "Content-Type": "text/plain; version=0.0.4" });
		res.end(format(await getMetrics()));
	} catch (err) {
		console.error(err);
	}
});

server.listen(3000);
