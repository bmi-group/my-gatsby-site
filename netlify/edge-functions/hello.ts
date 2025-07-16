import { Context } from "@netlify/edge-functions";

export default async function handler(request: Request, context: Context) {
    if (context.deploy?.context !== "production") {
    console.log("This is not a production deployment.");   
    }
    console.log(`GATSBY_PREVIEW: ${Netlify.env.get("GATSBY_PREVIEW")}`);

    console.log("Hello from Netlify Edge Functions!");
    return;
}