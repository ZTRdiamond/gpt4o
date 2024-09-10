import gpt4o from "./../libs/gpt4o.ts";
import Schema from "./../utils/payload.ts";

interface Payload {
  messages: string[],
  temperature?: number | 0.9,
  top_p?: number | 0.7,
  top_k?: number | 40,
  max_tokens?: number | 512
}

const completions = async(c) => {
  try {
    const body = await c.req.json();
    if(!body?.messages) return c.json(new Schema(400, {
      errors: ["missing messages payload body!"]
    }), 400)
    if(!Array.isArray(body?.messages)) return c.json(new Schema(400, {
      errors: ["invalid array messages input!"]
    }), 400)
    if(body?.temperature ? isNaN(body?.temperature) : false) return c.json(new Schema(400, {
      errors: ["invalid number temperature input!"]
    }), 400)
    if(body?.top_p ? isNaN(body?.top_p) : false) return c.json(new Schema(400, {
      errors: ["invalid number top_p input!"]
    }), 400)
    if(body?.top_k ? isNaN(body?.top_k) : false) return c.json(new Schema(400, {
      errors: ["invalid number top_k input!"]
    }), 400)
    if(body?.max_tokens ? isNaN(body?.max_tokens) : false) return c.json(new Schema(400, {
      errors: ["invalid number max_tokens input!"]
    }), 400)
    const payload: Payload = {
      messages: body.messages,
      temperature: body.temperature,
      top_p: body.top_p,
      top_k: body.top_k,
      max_tokens: body.max_tokens
    }
    const api = await gpt4o(payload);
    if(!api.success) return c.json(new Schema(500, {
      errors: ["Internal server error!"]
    }), 500);
    return c.json(new Schema(200, api.result), 200)
  } catch (e) {
    console.error("Error completions:", e)
    return c.json(new Schema(500, {
      errors: ["Internal server error!"]
    }), 500)
  }
}

export default completions;