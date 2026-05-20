import { motion } from 'motion/react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Uso de cookies</h2>
            <p>Esta web puede utilizar cookies técnicas y analíticas para mejorar la experiencia del usuario y analizar el funcionamiento del sitio.</p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Tipos de cookies</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Cookies técnicas:</strong> necesarias para el correcto funcionamiento de la página.</li>
              <li><strong>Cookies analíticas:</strong> utilizadas para conocer estadísticas de navegación y mejorar el contenido del portfolio.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Gestión de cookies</h2>
            <p>El usuario puede aceptar, rechazar o eliminar las cookies desde la configuración de su navegador.</p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Consentimiento</h2>
            <p>Al continuar navegando por esta web, el usuario acepta el uso de cookies conforme a esta política.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
