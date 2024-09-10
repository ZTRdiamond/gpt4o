import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

// Router 
import Home from "./routes/index.ts";
import Api from "./routes/api.ts";

app.route("/", Home);
app.route("/api/v1", Api);

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
