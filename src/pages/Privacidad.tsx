import { motion } from 'motion/react';

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Responsable del tratamiento</h2>
            <ul className="list-none space-y-2 pl-4 border-l-2 border-brand-200">
              <li><strong>Titular:</strong> Mariem Miliani</li>
              <li><strong>Correo electrónico:</strong> mariemmiliani@gmail.com</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Finalidad del tratamiento de datos</h2>
            <p>Los datos personales enviados a través de formularios o correo electrónico serán utilizados únicamente para:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Responder consultas profesionales.</li>
              <li>Gestionar oportunidades laborales o colaboraciones.</li>
              <li>Mantener comunicaciones relacionadas con procesos de selección o networking profesional.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Base legal</h2>
            <p>La base legal para el tratamiento de los datos es el consentimiento otorgado por el usuario al contactar mediante esta web.</p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Conservación de los datos</h2>
            <p>Los datos serán conservados únicamente durante el tiempo necesario para atender la solicitud o mantener la relación profesional.</p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Derechos del usuario</h2>
            <p>El usuario podrá ejercer sus derechos de acceso, rectificación, supresión, oposición o limitación del tratamiento enviando una solicitud al correo indicado anteriormente.</p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Seguridad de la información</h2>
            <p>Se aplican medidas razonables de seguridad para proteger la información personal y evitar accesos no autorizados.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
