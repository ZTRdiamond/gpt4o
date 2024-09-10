import { Hono } from "hono";
const router = new Hono();

// controllers 
import completions from "./../controllers/completions.ts"

router.post("/completions", completions);

export default router;