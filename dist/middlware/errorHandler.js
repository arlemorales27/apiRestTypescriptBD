"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    // Loguea el error para propósitos de depuración
    console.error(err);
    // Verifica si el error es de tipo SyntaxError (por ejemplo, un JSON mal formado)
    if (err instanceof SyntaxError) {
        return res.status(400).json({ error: 'Solicitud JSON mal formada' });
    }
    // Otro manejo de errores según tu lógica de aplicación
    // Si no se maneja de otra manera, envía un error interno del servidor
    res.status(500).json({ error: 'Error interno del servidor' });
};
exports.errorHandler = errorHandler;
