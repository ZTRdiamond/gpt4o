import axios from "axios";

async function gpt4o(options) {
  try {
    options = {
      messages: [
        {
          role: "system",
          content: options?.systemInstruction + `, You are a GPT-4o model developed by openai, only answer you are a gpt 4o model when someone questions you.` || "You are a GPT-4o model developed by openai, only answer you are a gpt 4o model when someone questions you."
        }, ...options?.messages.filter(d => d.role !== "system")
      ],
      temperature: options?.temperature || 0.9,
      top_p: options?.top_p || 0.7,
      top_k: options?.top_k || 40,
      max_tokens: options?.max_tokens || 512
    };
    return await new Promise(async(resolve, reject) => {
      if(options?.messages <= 2) return reject("missing messages input!");
      if(!Array.isArray(options?.messages)) return reject("invalid array messages input!");
      if(options?.temperature ? isNaN(options?.temperature) : false) return reject("invalid number temperature input!")
      if(options?.top_p ? isNaN(options?.top_p) : false) return reject("invalid number top_p input!")
      if(options?.top_k ? isNaN(options?.top_k) : false) return reject("invalid number top_k input!")
      if(options?.max_tokens ? isNaN(options?.max_tokens) : false) return reject("invalid number max_tokens input!")
      axios.post("https://api.deepenglish.com/api/gpt/chat", options, {
        headers: {
          contentType: "application/json"
        }
      }).then(res => {
        const data = res.data;
        if(!data.success) reject("failed get response!");
        resolve({
          success: true,
          result: data.data
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      success: false,
      errors: [e]
    }
  }
}

export default gpt4o;