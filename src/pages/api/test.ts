import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ 
    status: 'ok',
    message: 'API funcionando',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!import.meta.env.RESEND_API_KEY
    }
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
