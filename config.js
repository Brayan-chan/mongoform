// Importar dotenv para manejar variables de entorno
import { config } from "dotenv";
config();

// Exportar las configuraciones
export const PORT = process.env.PORT || 3000; // Puerto del servidor
export const DB_HOST = process.env.DB_HOST || "localhost"; // Host de la base de datos
export const DB_PORT = process.env.DB_PORT || 27017; // Puerto de la base de datos
export const DB_DATABASE = process.env.DB_DATABASE || "mongo"; // Nombre de la base de datos
export const URL = process.env.URL || "http://localhost:3000"; // URL del servidor

export const JWT_SECRET = process.env.JWT_SECRET || "secret"; // Secreto para JWT
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d"; // Tiempo de expiración para JWT