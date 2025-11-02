import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Verificar método
    if (req.method !== 'GET' && req.method !== 'POST') {
      return res.status(405).json({ 
        success: false, 
        message: 'Method not allowed',
        method: req.method 
      });
    }

    // Verificar variables de entorno
    const hasResendKey = !!process.env.RESEND_API_KEY;

    return res.status(200).json({ 
      success: true,
      message: 'API está funcionando correctamente',
      timestamp: new Date().toISOString(),
      method: req.method,
      hasResendKey,
      nodeVersion: process.version
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error desconocido',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
}
