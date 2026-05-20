import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Story() {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'narrativa'>('curriculum');

  const experiences = [
    {
      role: 'Consultora de Negocio y Operaciones',
      company: 'Proyectos Independientes y Formación Aplicada',
      period: '2020 – Actual',
      description: [
        'Estrategia digital, análisis de datos y optimización de negocio.',
        'Creación de dashboards e informes para seguimiento de KPIs.',
        'Testing y mejora de campañas, contenido y rendimiento comercial.'
      ],
      achievements: [
        'Incremento de eficiencia mediante análisis y automatización.',
        'Desarrollo continuo en BI, Tableau y analítica aplicada.'
      ]
    },
    {
      role: 'Gestión Operativa y Desarrollo de Negocio',
      company: 'Mariem Gourmet',
      period: '2012 – 2020',
      description: [
        'Dirección operativa y comercial de negocio de catering B2B y B2C.',
        'Seguimiento de ventas, costes y comportamiento de clientes para apoyo en decisiones.',
        'Planificación logística, coordinación de equipos y supervisión de calidad operativa.',
        'Gestión y fidelización de clientes, garantizando continuidad y servicio.'
      ],
      achievements: [
        'Mejora de eficiencia operativa y control de costes.',
        'Desarrollo de visión analítica aplicada a negocio y rentabilidad.'
      ]
    },
    {
      role: 'Administración & Operaciones',
      company: 'Clínica S&O · Vernon Marketing People',
      period: '2010 – 2012',
      description: [
        'Gestión administrativa, coordinación operativa y soporte a dirección.',
        'Control documental, agendas, facturación y seguimiento operativo.',
        'Optimización de procesos y mejora de organización interna.'
      ]
    },
    {
      role: 'Gestión Bancaria y Operativa',
      company: 'Banco Canarias / BFC',
      period: '2002 – 2008',
      description: [
        'Gestión de cartera, operaciones de crédito y análisis de riesgo.',
        'Seguimiento de objetivos, rentabilidad y control de procesos.',
        'Supervisión de equipo, operaciones financieras y atención al cliente.'
      ],
      achievements: [
        'Cumplimiento recurrente de objetivos comerciales y operativos.',
        'Gestión eficiente de cartera y control de riesgo con resultados favorables en auditorías.'
      ]
    }
  ];

  const education = [
    {
      title: 'Power BI / AI Generativa',
      institution: 'IBM Skills Build - Data Hack',
      period: '2025'
    },
    {
      title: 'PYTHON DATA SCIENCE MASTER',
      subtitle: 'Business Analytics / Machine Learning',
      institution: 'Data Science For Business',
      period: '2024 – 2025'
    },
    {
      title: 'Scrum Master Certified',
      institution: 'Scrum Manager',
      period: '2024'
    },
    {
      title: 'Curso de Cloud Computer and Machine Learning',
      institution: 'Master D',
      period: '2023 – 2024'
    },
    {
      title: 'Máster de Dirección Comercial y Marketing',
      institution: 'Ide Cesem',
      period: '2009 – 2010'
    },
    {
      title: 'Gestión Financiera (Incluye Excel)',
      institution: 'Universidad Complutense de Madrid',
      period: '2008 – 2009'
    },
    {
      title: 'Lic. Empresariales',
      institution: 'Universidad Santa María',
      period: '2001'
    }
  ];

  const capabilities = [
    { name: 'Visión de negocio', emoji: '📈' },
    { name: 'Relación con cliente', emoji: '🤝' },
    { name: 'Análisis orientado a decisiones', emoji: '📊' },
    { name: 'Mejora de procesos', emoji: '⚙️' }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Profile Card Summary */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 relative">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczMx58c35KsmKfZQNWO4xyFSOv536g7ctT1vynhRcgLDKEbx_xu4y1oVndJpm0tY8qJHMLgVgGezQ0VXOoumDTzGkL7JJxRbzJkZEP6lEurKk6_3nJ6Y=w1000" 
                alt="Mariem Miliani Profile" 
                className="w-full h-full object-cover rounded-full shadow-md border-4 border-slate-50"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2">
                <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full border border-brand-100">
                  📍 Sevilla, España
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Mariem Miliani
              </h1>
              <p className="text-brand-600 font-medium text-lg mt-1 mb-4">
                Consultora de Transformación Digital | Business Intelligence & Data Analytics
              </p>
              <p className="text-slate-600 max-w-2xl text-sm leading-relaxed">
                Profesional con experiencia en negocio, operaciones y gestión, orientada a consultoría, Business Intelligence y transformación digital. Perfil híbrido con capacidad para conectar análisis, procesos y necesidades de cliente con soluciones orientadas a negocio y toma de decisiones.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Custom Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1.5 rounded-xl inline-flex gap-1 border border-slate-200">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'curriculum'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              📋 Currículum Estructurado
            </button>
            <button
              onClick={() => setActiveTab('narrativa')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'narrativa'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              📖 Mi Trayectoria (Narrativa)
            </button>
          </div>
        </div>

        {/* Main Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'curriculum' ? (
            <motion.div
              key="curriculum"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Left Column: Education & Capabilities */}
              <div className="lg:col-span-1 space-y-8">
                {/* Capacidades */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    🌟 Capacidades
                  </h2>
                  <div className="space-y-4">
                    {capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-xl">{cap.emoji}</span>
                        <span className="font-semibold text-sm text-slate-800">{cap.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Educación */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    🎓 Educación
                  </h2>
                  <div className="space-y-6">
                    {education.map((edu, i) => (
                      <div key={i} className="relative pl-4 border-l border-brand-200">
                        <div className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-brand-500" />
                        <span className="text-xs font-mono font-bold text-brand-600 block mb-1">
                          {edu.period}
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm leading-tight">
                          {edu.title}
                        </h3>
                        {edu.subtitle && (
                          <p className="text-xs text-slate-500 font-medium mt-0.5 leading-tight">
                            {edu.subtitle}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Experience */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                    💼 Experiencia Profesional
                  </h2>
                  
                  <div className="space-y-10">
                    {experiences.map((exp, i) => (
                      <div key={i} className="relative pb-8 last:pb-0 border-b border-slate-100 last:border-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 leading-snug">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-brand-600 mt-0.5">
                              🏢 {exp.company}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-slate-100 text-slate-700 font-mono text-xs font-bold rounded-lg self-start">
                            📅 {exp.period}
                          </span>
                        </div>
                        
                        <ul className="space-y-2 mt-4 text-sm text-slate-600 leading-relaxed list-disc pl-5">
                          {exp.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>

                        {exp.achievements && (
                          <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block mb-2">
                              ✨ Logros destacados:
                            </span>
                            <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                              {exp.achievements.map((ach, idx) => (
                                <li key={idx} className="italic">{ach}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="narrativa"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
            >
              <div className="space-y-16">
                {/* Section 1: The Beginning */}
                <div className="relative pl-8 md:pl-0">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    🏦 Los inicios y el primer gran reto
                  </h2>
                  <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                    <p>Empecé en pequeñas empresas, pero pronto quise asumir más responsabilidad.</p>
                    <p>Esa oportunidad llegó en el banco, donde aprendí a analizar negocios, tomar decisiones y gestionar clientes en contextos reales con un alto nivel de exigencia.</p>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
                      <p className="font-semibold text-slate-900">Con 25 años me convertí en Directora de sucursal.</p>
                      <p className="text-slate-500 mt-2">Una etapa de liderazgo financiero y operativo clave que me enseñó algo que sigue siendo la base de mi trabajo: el criterio racional y estratégico.</p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Entrepreneurship */}
                <div className="relative pl-8 md:pl-0">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    🍽️ Emprender: Dirección de Operaciones
                  </h2>
                  <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                    <p>Más adelante vine a España y, tras trabajar en distintos entornos corporativos, decidí dar el gran paso de emprender y lideré la <strong>Dirección de Operaciones y Negocio</strong> de mi propia empresa, Mariem Gourmet, un servicio de comida saludable automatizado a domicilio y enfocado en oficinas.</p>
                    <p>Durante 8 años obtuve una visión 360 del negocio: planificación logística compleja, rentabilidad, gestión de costes, negociación y fidelización B2B/B2C. Fue una etapa de altísimo aprendizaje empresarial, que culminó con el cambio global de circunstancias por la pandemia.</p>
                  </div>
                </div>

                {/* Section 3: The Click */}
                <div className="relative pl-8 md:pl-0">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    ⚡ El "clic" hacia los datos
                  </h2>
                  <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                    <p>Tras esa etapa me sumergí en la consultoría y el marketing. Y ahí fue donde hice clic definitvo.</p>
                    <p>Descubrí que, más allá de ejecutar tareas cotidianas, mi instinto natural me llevaba siempre a analizar: comparar la competencia, medir el comportamiento del usuario, y buscar patrones en los números para tomar decisiones lógicas.</p>
                    <div className="bg-brand-600 text-white p-8 rounded-2xl my-8">
                      <p className="text-xl font-medium mb-2">Ahí fue cuando todo encajó.</p>
                      <p className="text-brand-100">
                        Todo lo que había vivido antes en operaciones y estrategia tenía una correspondencia directa con Business Intelligence. No era empezar de cero; era estructurar, automatizar y dar superpoderes con herramientas avanzadas como Power BI, SQL y Python a los análisis que ya venía haciendo de forma intuitiva durante toda mi carrera.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Today */}
                <div className="relative pl-8 md:pl-0">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    🚀 Cómo trabajo hoy
                  </h2>
                  <div className="space-y-6 text-base text-slate-600 leading-relaxed">
                    <p>Actualmente sigo impulsando proyectos independientes que demuestran mi capacidad para extraer información valiosa de fuentes de datos complejas:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-brand-600 mt-1">✦</span>
                        <span className="font-medium text-slate-800">Análisis inmobiliario para inversión en rentabilidades de Madrid.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-600 mt-1">✦</span>
                        <span className="font-medium text-slate-800">Modelos de elasticidad precio-demanda optimizando el beneficio real en Mariem Gourmet.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-600 mt-1">✦</span>
                        <span className="font-medium text-slate-800">Estudio e interactividad analítica de ventas y estimación de márgenes en Nexvia Retail.</span>
                      </li>
                    </ul>
                    <p className="font-medium text-slate-900 pt-4">Con un enfoque único centrado en responder preguntas críticas de negocio con datos confiables.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic bottom resume CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-slate-900 text-white p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 font-display">Mi enfoque profesional:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-brand-400">📊</span>
                <span>Visión y comprensión profunda del negocio</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-400">⚡</span>
                <span>Capacidad analítica con criterio comercial</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-400">🤝</span>
                <span>Foco y empatía en la relación con el cliente</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-400">⚙️</span>
                <span>Orientación práctica a la optimización de procesos</span>
              </li>
            </ul>
            <p className="mt-8 text-slate-300 italic">"Garantizo implicación y resultados desde el primer día."</p>
          </div>
          
          <div className="bg-brand-50 border border-brand-100 p-8 rounded-3xl flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4 font-display text-slate-900">💼 Candidatura Activa</h3>
            <p className="text-slate-600 text-base mb-6">Busco incorporarme a proyectos donde maximizar la analítica y el desarrollo estratégico de negocio.</p>
            <p className="text-lg font-semibold text-brand-700 leading-snug">
              ¿Quieres conocer más detalles técnicos o financieros? No dudes en escribirme para agendar una reunión o entrevista.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
