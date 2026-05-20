import { motion } from 'motion/react';

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              En cumplimiento con el deber de información establecido en la normativa vigente, se informa que esta página web es propiedad de:
            </p>
            
            <ul className="list-none space-y-2 pl-4 border-l-2 border-brand-200">
              <li><strong>Titular:</strong> Mariem Miliani</li>
              <li><strong>Actividad:</strong> Marca personal y portfolio profesional orientado a análisis de datos, marketing digital, business analytics y proyectos tecnológicos.</li>
              <li><strong>Correo de contacto:</strong> mariemmiliani@gmail.com</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Objeto del sitio web</h2>
            <p>
              El objetivo de esta web es mostrar la trayectoria profesional, proyectos, habilidades y experiencia de Mariem Miliani, así como facilitar el contacto con empresas, reclutadores y colaboradores profesionales.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Condiciones de uso</h2>
            <p>
              El acceso a esta web implica la aceptación de las presentes condiciones de uso. El usuario se compromete a utilizar el sitio de forma adecuada y respetuosa.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Propiedad intelectual</h2>
            <p>
              Todos los contenidos de esta web (textos, diseños, imágenes, proyectos, dashboards y elementos visuales) son propiedad de Mariem Miliani, salvo indicación contraria, y no podrán ser utilizados sin autorización previa.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Responsabilidad</h2>
            <p>
              Mariem Miliani no se hace responsable del uso indebido de la información publicada ni de posibles interrupciones técnicas del sitio web.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
