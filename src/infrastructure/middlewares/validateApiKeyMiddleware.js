import { envs } from '../../config/envs.js';
import express from 'express';

/**
 * Valida que la API Key enviada por el cliente sea válida.
 * 
 * @param {string} userPrivateApiKey API Key enviada por el cliente. 
 * @returns {boolean} true si la API Key es válida, false en caso contrario.
 * 
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 10-01-2024
 */
const isApiKeyValid = userPrivateApiKey => userPrivateApiKey === envs.PRIVATE_API_KEY;

/**
 * Middleware que valida que la API Key enviada por el cliente sea válida, sí 
 * y sólo sí el entorno de ejecución es producción.
 * 
 * @param {express.Request} req Objeto que representa la petición HTTP.
 * @param {express.Response} res Objeto que representa la respuesta HTTP.
 * @param {express.NextFunction} next Función que permite pasar al siguiente middleware.
 * 
 * @returns {void|express.Response} Si la API Key es válida, se pasa al siguiente middleware, 
 *                          en caso contrario se envía una respuesta HTTP con código
 *                          401 (Unauthorized).
 * 
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 10-01-2024
 */
export const validateApiKey = (req, res, next) => {
  const userPrivateApiKey = req.headers['x-api-key'];
  
  if (envs.NODE_ENV === 'production' && !isApiKeyValid(userPrivateApiKey)) {
    return res.status(401).json({ 
      error: {
        message: 'Unauthorized'
      }
    });
  }

  next();
};

