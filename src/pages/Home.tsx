import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Database, 
  LineChart, 
  PieChart, 
  Code2, 
  Target,
  Presentation,
  ChevronDown,
  ExternalLink,
  Mail,
  Linkedin,
  Phone,
  Briefcase,
  TrendingUp,
  Users,
  Terminal
} from 'lucide-react';

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden items-center flex min-h-[90vh]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 opacity-10 blur-3xl rounded-full bg-brand-600 w-[600px] h-[600px]" />
        <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 opacity-10 blur-3xl rounded-full bg-blue-600 w-[500px] h-[500px]" />
        
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-start"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-6 border border-brand-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Perfil Híbrido: Negocio + Datos
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
                Experiencia operativa<br />
                con <span className="text-brand-600">visión analítica</span>.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg lg:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Soy Mariem Miliani. Combino experiencia en <strong>operaciones, gestión comercial y banca</strong> con capacidades técnicas en <strong>Business Intelligence</strong>.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a href="#projects" className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-sm">
                  Ver Proyectos
                </a>
                <a 
                  href="https://drive.google.com/file/d/1RD9eA59kHbbukZ-H-yVji3uZ8hQEEQdK/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm flex items-center gap-2"
                >
                  <span className="text-base">📄</span>
                  Descargar CV
                </a>
                <a href="#contact" className="px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm">
                  Contactar
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Photo */}
              <div className="relative z-10 w-full max-w-sm ml-auto rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20 border-8 border-white">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczMx58c35KsmKfZQNWO4xyFSOv536g7ctT1vynhRcgLDKEbx_xu4y1oVndJpm0tY8qJHMLgVgGezQ0VXOoumDTzGkL7JJxRbzJkZEP6lEurKk6_3nJ6Y=w1000" 
                  alt="Mariem Miliani" 
                  className="w-full h-auto aspect-[4/5] object-cover scale-[1.7] origin-[51%_36%] transition-all duration-300"
                />
              </div>
              
              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
              >
                <div className="bg-brand-50 p-2 rounded-lg">
                  <BarChart3 className="text-brand-600 size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">+45%</div>
                  <div className="text-xs text-slate-500">Eficiencia</div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
              >
                <div className="bg-blue-50 p-2 rounded-lg">
                  <LineChart className="text-blue-600 size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">ROI</div>
                  <div className="text-xs text-slate-500">Optimizado</div>
                </div>
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-brand-200 to-blue-200 blur-3xl opacity-30 -z-10 rounded-full" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-slate-400">
            <span className="text-sm mb-2 font-medium">Explorar</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* Hybrid Profile Section */}
      <section id="skills" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">El puente entre los datos y la rentabilidad</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mi principal diferencial es combinar visión de negocio y capacidad analítica para entender qué información aporta realmente valor a la toma de decisiones, la eficiencia operativa y la mejora de procesos.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-4"
          >
            {/* Senior Business Column */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mt-6 md:mt-0">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-xl bg-slate-200 flex items-center justify-center text-xl">
                  💼
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">Background de Negocio</h3>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Gestión Operativa', desc: 'Experiencia en coordinación de operaciones B2B/B2C, logística, control de costes y seguimiento de rentabilidad.', emoji: '⚙️' },
                  { title: 'Experiencia Bancaria', desc: 'Gestión de clientes, operativa bancaria, control documental, riesgo y auditorías internas.', emoji: '🏦' },
                  { title: 'Visión de Negocio', desc: 'Orientación a resultados, optimización de procesos y análisis enfocado en la mejora operativa.', emoji: '🎯' },
                  { title: 'Metodologías y Organización', desc: 'Trabajo estructurado, coordinación de procesos y formación en metodologías ágiles.', emoji: '🧩' },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-4">
                    <div className="mt-1 size-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-sm">
                      {item.emoji}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Data Column */}
            <div className="bg-brand-50 p-8 md:p-10 rounded-3xl border border-brand-100 mt-6 md:mt-0">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-brand-600 text-xl">
                  📊
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">Analítica de Datos</h3>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Analítica y Reporting', desc: 'Power BI, Tableau y Excel avanzado orientados al análisis de información, seguimiento de KPIs y apoyo a la toma de decisiones.', emoji: '📈' },
                  { title: 'Business Intelligence', desc: 'Creación de dashboards y visualizaciones enfocadas en negocio, rentabilidad y control operativo.', emoji: '📊' },
                  { title: 'Excel Avanzado y Gestión de Datos', desc: 'Tratamiento, organización y análisis de datos aplicados a procesos administrativos, comerciales y operativos.', emoji: '💾' },
                  { title: 'Optimización de Procesos', desc: 'Análisis operativo, mejora continua y seguimiento de procesos para aumentar eficiencia y control.', emoji: '⚙️' },
                  { title: 'Gestión y Análisis Operativo', desc: 'Experiencia en coordinación, control documental, seguimiento de incidencias y soporte a operaciones.', emoji: '💼' },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-4">
                    <div className="mt-1 size-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-brand-100 text-sm">
                      {item.emoji}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fortalezas operativas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-brand-600 text-lg">✦</span> Fortalezas operativas
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                'Gestión documental y operativa.',
                'Coordinación y seguimiento de procesos.',
                'Atención y soporte a clientes.',
                'Excel y control de información.',
                'Organización y priorización.',
                'Mejora continua y análisis.',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-brand-600 font-bold mt-0.5 text-xs">✦</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Casos de Estudio</h2>
              <p className="text-slate-400 text-lg">Proyectos orientados al análisis de negocio, rentabilidad y apoyo a la toma de decisiones.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Análisis Inmobiliario para Inversión en Madrid',
                description: 'Estudio de mercado utilizando fuentes públicas para identificar zonas con mayor rentabilidad de alquiler. Análisis de datos con Python y Tableau.',
                tags: ['Python', 'Tableau'],
                image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
                links: [
                  { label: 'Dashboard Tableau', url: 'https://public.tableau.com/views/MadridAirbnbInversin/Dashboard1?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' },
                  { label: 'Business Case', url: 'https://drive.google.com/file/d/1BnPD5II5v7IiE7KZxcMMS-oMXdfEegmf/view?usp=drive_link' }
                ]
              },
              {
                title: 'El Precio Óptimo No Es El Más Alto | Marie Gourmet',
                description: 'Análisis de elasticidad precio-demanda para optimizar la estrategia de precios de un negocio B2B/B2C de comida sana a domicilio para oficinas. Incremento de rentabilidad mediante ajuste inteligente.',
                tags: ['Excel M.', 'Pricing Strategy', 'Data Viz'],
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
                links: [
                  { label: 'Power BI', url: 'https://drive.google.com/file/d/1NDfzUWijsa7B3j7mlksS-V-cFmwcydOS/view?usp=drive_link' },
                  { label: 'Excel (Simulador)', url: 'https://docs.google.com/spreadsheets/d/1aAaJcsmc3yHubfEuPcfrdcNxic-oThXj/edit?usp=drive_link&ouid=113296948491184790700&rtpof=true&sd=true' },
                  { label: 'Business Case', url: 'https://drive.google.com/file/d/1xg5_v9K4iZPTfGbrrJsMQXRPOcAFD6AS/view?usp=drive_link' }
                ]
              },
              {
                title: 'Análisis de Ventas | Nexvia Retail',
                description: 'Análisis comercial basado en un escenario de ventas estable y recurrente, orientado a identificar patrones de rentabilidad, recurrencia y comportamiento de compra.',
                tags: ['Power BI'],
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
                links: [
                  { label: 'Power BI', url: 'https://drive.google.com/file/d/1m7Eev74fFA_uAKg_H60D_OxCOt-_afrt/view?usp=drive_link' },
                  { label: 'Dataset (Excel)', url: 'https://docs.google.com/spreadsheets/d/1EhAENicRVhyYpUnTAOTojj5z6uqoR6X6/edit?usp=drive_link&ouid=113296948491184790700&rtpof=true&sd=true' },
                  { label: 'Business Case', url: 'https://drive.google.com/file/d/1ZSifi7PwWP362B7nFZFYt8CMWLrwyaiu/view?usp=drive_link' }
                ]
              }
            ].map((project, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 hover:border-brand-500/50 transition-colors flex flex-col">
                <div className="aspect-[16/9] w-full overflow-hidden shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 font-display group-hover:text-brand-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 bg-slate-700 text-slate-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-slate-700/50">
                    {project.links && project.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url}
                        target={link.url !== '#' ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors cursor-pointer"
                      >
                        {link.label} <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/2 opacity-20 blur-3xl rounded-full bg-brand-400 w-[500px] h-[500px]" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-brand-900/5 flex flex-col md:flex-row items-center gap-10">
            
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 -mt-16 md:mt-0 md:-ml-16 relative">
              <div className="absolute inset-0 bg-brand-600 rounded-full blur-2xl opacity-20 translate-y-4 translate-x-4"></div>
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczM1LgGN9z2FIZ78qhoJjQWz0IYGiTLAbkDj0f8LLB47n2ZOz2PeYC2mBzjUB9mXZ3entz3upKTuIOHP92hSQmNeUASUzWN30WBcUIGz4Wgd6ofwptX7=w1000" 
                alt="Mariem Miliani" 
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">¿Buscas una profesional orientada a negocio, operaciones y análisis?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Combino experiencia en gestión, atención al cliente y operativa con capacidades analíticas y dominio de herramientas como Excel, Power BI y Tableau.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="https://drive.google.com/file/d/1RD9eA59kHbbukZ-H-yVji3uZ8hQEEQdK/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 w-full sm:w-auto"
                >
                  <span className="text-base">📄</span>
                  Descargar CV
                </a>
                <a 
                  href="mailto:mariemmiliani@gmail.com" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 w-full sm:w-auto"
                >
                  <Mail size={18} />
                  mariemmiliani@gmail.com
                </a>
                <a 
                  href="tel:+34629607989" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <Phone size={18} className="text-brand-600" />
                  +34 629 60 79 89
                </a>
                <a 
                  href="https://www.linkedin.com/in/mariemmiliani/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-slate-100 transition-colors border border-slate-200 w-full sm:w-auto"
                >
                  <Linkedin size={18} className="text-blue-600" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
