LauriStart("localhost", 3000);
const hello = (await import("/mnt/c/Users/Marcelo/Projects/Javascript/lauri-template/index.ts")).default;
const routes_obj = {hello:{ fn: hello.prototype.hello } }
import {get, post, patch, put, del, any, serve, LauriStart} from "@bunland/lauri"
get("/hello", (req: any) => {
  
  const query = req.query;
  const ret =  routes_obj.hello.fn(query["name"])

  if(ret !== undefined) return ret
})

//@ts-ignore
serve({ hostname: "localhost", port: 3000, public_folder: "public" })