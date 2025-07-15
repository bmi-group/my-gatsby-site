import { Context } from "@netlify/edge-functions";

export default async function handler(request: Request, context: Context) {
    console.log("Hello from Netlify Edge Functions!");
    return;
}