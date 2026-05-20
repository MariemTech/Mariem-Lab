import { motion } from 'motion/react';
import { BookOpen, Briefcase, TrendingUp } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Story() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
        >
          <motion.div variants={fadeIn} className="mb-12 border-b border-slate-100 pb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">El camino recorrido hasta aquí</h1>
              <p className="text-xl text-brand-600 font-medium">Siempre he entendido el trabajo de la misma forma: implicarme, aprender rápido y dar un poco más.</p>
            </div>
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOz_GY8btEW10U6Bn3gZGA5GTOqFEO4uzzalMhGEZwAdGaHyqi4lC0T3yOj64ZWbdfmw61pchwejGr16coLZb4yqA9OcCKg7JU38wZ_-tnnJ4gMacer=w1000" 
                alt="Mariem Miliani Profile" 
                className="w-full h-full object-cover rounded-full shadow-lg border-4 border-slate-50"
              />
            </div>
          </motion.div>

          <div className="space-y-16">
            
            {/* Section 1: The Beginning */}
            <motion.div variants={fadeIn} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[-40px] top-1 bottom-[-64px] w-px bg-slate-100" />
              <div className="hidden md:flex absolute left-[-56px] top-0 size-8 rounded-full bg-blue-50 border-4 border-white items-center justify-center shadow-sm">
                <Briefcase size={14} className="text-blue-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Los inicios y el primer gran reto</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>Empecé en pequeñas empresas, pero pronto quise asumir más responsabilidad.</p>
                <p>Esa oportunidad llegó en el banco, donde aprendí a analizar negocios, tomar decisiones y gestionar clientes en contextos reales.</p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
                  <p className="font-semibold text-slate-900">Con 25 años me convertí en Directora de sucursal.</p>
                  <p className="text-slate-500 mt-2">Una etapa exigente que me enseñó algo que sigue siendo clave para mí: el criterio.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Entrepreneurship */}
            <motion.div variants={fadeIn} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[-40px] top-1 bottom-[-64px] w-px bg-slate-100" />
              <div className="hidden md:flex absolute left-[-56px] top-0 size-8 rounded-full bg-brand-50 border-4 border-white items-center justify-center shadow-sm">
                <BookOpen size={14} className="text-brand-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Emprender: Dirección de Operaciones (8 años)</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>Más adelante vine a España y, tras trabajar en distintos entornos, decidí dar el paso de emprender y lideré la <strong>Dirección de Operaciones y Negocio</strong> de mi propia empresa, Mariem Gourmet, un servicio de comida sana a domicilio enfocado en oficinas.</p>
                <p>Durante 8 años tuve una visión 360 del negocio: planificación logística, rentabilidad, gestión de costes y fidelización B2B/B2C. Fue una etapa muy enriquecedora, hasta que las circunstancias globales (COVID) cambiaron el escenario y decidí cerrar esa etapa.</p>
              </div>
            </motion.div>

            {/* Section 3: The Click */}
            <motion.div variants={fadeIn} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[-40px] top-1 bottom-[-64px] w-px bg-slate-100" />
              <div className="hidden md:flex absolute left-[-56px] top-0 size-8 rounded-full bg-purple-50 border-4 border-white items-center justify-center shadow-sm">
                <TrendingUp size={14} className="text-purple-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">El "clic" hacia los datos</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>Después entré en el mundo del marketing. Y ahí fue donde hice clic.</p>
                <p>Me di cuenta de que, más allá de crear contenido, lo que realmente hacía era analizar: ver qué funcionaba, comparar empresas y detectar oportunidades.</p>
                <div className="bg-brand-600 text-white p-8 rounded-2xl my-8 shadow-lg shadow-brand-200">
                  <p className="text-xl font-medium mb-2">Ahí fue cuando todo encajó.</p>
                  <p className="text-brand-100">Todo lo que había vivido tenía un sentido claro dentro del Business Analytics. No era empezar de cero, era dar forma a algo que ya formaba parte de mi manera de trabajar.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Today */}
            <motion.div variants={fadeIn} className="relative pl-8 md:pl-0">
              <div className="hidden md:flex absolute left-[-56px] top-0 size-8 rounded-full bg-amber-50 border-4 border-white items-center justify-center shadow-sm">
                 <div className="size-2 rounded-full bg-amber-500" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cómo trabajo hoy</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>Actualmente sigo desarrollando mi porfolio de cara a nuevas oportunidades profesionales, aplicando mi visión en proyectos como:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 mt-1">✦</span>
                    <span className="font-medium text-slate-800">Análisis inmobiliario para inversión en Madrid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 mt-1">✦</span>
                    <span className="font-medium text-slate-800">El Precio Óptimo No Es El Más Alto, Es El Más Rentable | Marie Gourmet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 mt-1">✦</span>
                    <span className="font-medium text-slate-800">Análisis de Ventas y Rentabilidad | Nexvia Retail</span>
                  </li>
                </ul>
                <p className="font-medium text-slate-900 pt-4">Con un objetivo claro: transformar datos en decisiones de negocio.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Working Style footer card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-slate-900 text-white p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 font-display">Mi enfoque combina:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-brand-400" />
                <span>Visión de negocio</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-brand-400" />
                <span>Capacidad analítica</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-brand-400" />
                <span>Sentido práctico</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-brand-400" />
                <span>Orientación a resultados</span>
              </li>
            </ul>
            <p className="mt-8 text-slate-300 italic">"Trabajo con implicación, criterio y foco en aportar valor desde el primer momento."</p>
          </div>
          
          <div className="bg-brand-50 border border-brand-100 p-8 rounded-3xl flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4 font-display text-slate-900">Hoy</h3>
            <p className="text-slate-600 text-lg mb-6">Sigo aprendiendo, practicando y mejorando cada día.</p>
            <p className="text-xl font-medium text-brand-700 leading-snug">
              No espero a que las cosas pasen: me involucro, analizo y actúo.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
