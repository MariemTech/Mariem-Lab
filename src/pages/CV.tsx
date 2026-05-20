import { motion } from 'motion/react';

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-16 print:bg-white print:pt-0 print:pb-0">
      {/* Print & Action Controls (Hidden when printing) */}
      <div className="max-w-4xl mx-auto px-6 mb-6 flex justify-between items-center print:hidden">
        <span className="text-sm text-slate-500">
          📄 Currículum Vitae Oficial (Optimizado para guardar en PDF/Imprimir)
        </span>
        <button
          onClick={handlePrint}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          🖨️ Guardar en PDF / Imprimir
        </button>
      </div>

      {/* Main CV Container */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-md rounded-3xl border border-slate-100 grid md:grid-cols-3 gap-8 md:gap-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Left Sidebar: Photo & Contact & Core skills */}
        <div className="md:col-span-1 flex flex-col gap-8">
          {/* Header Photo for Screen/Print */}
          <div className="flex flex-col items-center text-center">
            <div className="size-40 md:size-48 rounded-full overflow-hidden shadow-inner border-4 border-slate-150 mb-4 bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczMx58c35KsmKfZQNWO4xyFSOv536g7ctT1vynhRcgLDKEbx_xu4y1oVndJpm0tY8qJHMLgVgGezQ0VXOoumDTzGkL7JJxRbzJkZEP6lEurKk6_3nJ6Y=w1000"
                alt="Mariem Miliani Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
              📍 Sevilla, España
            </span>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <span className="text-base">📞</span>
                <a href="tel:+34629607989" className="hover:text-slate-900 transition-colors">
                  +34 629 60 79 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">✉️</span>
                <a href="mailto:mariemmiliani@gmail.com" className="hover:text-slate-900 transition-colors">
                  mariemmiliani@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">🌐</span>
                <a href="https://mariem-lab.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors break-all">
                  mariem-lab.vercel.app
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">🔗</span>
                <a href="https://linkedin.com/in/mariem-miliani" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors break-all">
                  linkedin.com/in/mariem-miliani
                </a>
              </li>
            </ul>
          </div>

          {/* Core Profile */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
              Perfil Profesional
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Profesional con experiencia en negocio, operaciones y gestión, orientada a consultoría, Business Intelligence y transformación digital. Perfil híbrido con capacidad para conectar análisis, procesos y necesidades de cliente con soluciones orientadas a negocio y toma de decisiones.
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
              Capacidades
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">✦</span>
                <span>Visión de negocio</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">✦</span>
                <span>Relación con cliente</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">✦</span>
                <span>Análisis orientado a decisiones</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">✦</span>
                <span>Mejora de procesos</span>
              </li>
            </ul>
          </div>

          {/* Key Abilities / Stack info info */}
          <div className="print:hidden">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
              <h4 className="text-xs font-bold text-slate-700 mb-2">💡 Consejo de guardado</h4>
              <p className="text-xs text-slate-600 leading-normal">
                Al presionar "Guardar en PDF/Imprimir", configura la orientación como <strong>Vertical</strong> y desmarca la opción de incluir cabeceras y pies de impresora para un resultado limpio de una sola hoja.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Title, Experience, Education */}
        <div className="md:col-span-2 flex flex-col gap-8 md:border-l md:border-slate-100 md:pl-8 print:border-l print:pl-8">
          
          {/* Header Details */}
          <div className="pb-4 md:border-b md:border-slate-100 print:border-b">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              MARIEM MILIANI
            </h1>
            <p className="text-base text-slate-500 font-medium">
              Consultora de Transformación Digital | Business Intelligence & Data Analytics
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 pb-2 border-b border-slate-150 flex items-center gap-2">
              💼 Experiencia Profesional
            </h2>

            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="relative pl-4 border-l-2 border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="text-base font-bold text-slate-800">
                    Consultora de Negocio y Operaciones
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    2020 – Actual
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  Proyectos Independientes y Formación Aplicada
                </p>
                <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Estrategia digital, análisis de datos y optimización de negocio.</li>
                  <li>Creación de dashboards e informes para seguimiento de KPIs.</li>
                  <li>Testing y mejora de campañas, contenido y rendimiento comercial.</li>
                  <li className="font-medium text-slate-700">
                    <strong>Logros:</strong> Incremento de eficiencia mediante análisis y automatización. Desarrollo continuo en BI, Tableau y analítica aplicada.
                  </li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-4 border-l-2 border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="text-base font-bold text-slate-800">
                    Gestión Operativa y Desarrollo de Negocio
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    2012 – 2020
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  Mariem Gourmet
                </p>
                <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Dirección operativa y comercial de negocio de catering B2B y B2C.</li>
                  <li>Seguimiento de ventas, costes y comportamiento de clientes para apoyo en decisiones.</li>
                  <li>Planificación logística, coordinación de equipos y supervisión de calidad operativa.</li>
                  <li>Gestión y fidelización de clientes, garantizando continuidad y servicio.</li>
                  <li className="font-medium text-slate-700">
                    <strong>Logros:</strong> Mejora de eficiencia operativa y control de costes. Desarrollo de visión analítica aplicada a negocio y rentabilidad.
                  </li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="relative pl-4 border-l-2 border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="text-base font-bold text-slate-800">
                    Administración & Operaciones
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    2010 – 2012
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  Clínica S&O · Vernon Marketing People
                </p>
                <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Gestión administrativa, coordinación operativa y soporte a dirección.</li>
                  <li>Control documental, agendas, facturación y seguimiento operativo.</li>
                  <li>Optimización de procesos y mejora de organización interna.</li>
                </ul>
              </div>

              {/* Experience 4 */}
              <div className="relative pl-4 border-l-2 border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="text-base font-bold text-slate-800">
                    Gestión Bancaria y Operativa
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    2002 – 2008
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  Banco Canarias / BFC
                </p>
                <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Gestión de cartera, operaciones de crédito y análisis de riesgo.</li>
                  <li>Seguimiento de objetivos, rentabilidad y control de procesos.</li>
                  <li>Supervisión de equipo, operaciones financieras y atención al cliente.</li>
                  <li className="font-medium text-slate-700">
                    <strong>Logros:</strong> Cumplimiento recurrente de objetivos comerciales y operativos. Gestión eficiente de cartera y control de riesgo con resultados favorables en auditorías.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 pb-2 border-b border-slate-150 flex items-center gap-2">
              🎓 Formación y Certificaciones
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-semibold text-brand-600">2025</span>
                <strong className="text-slate-800 font-semibold leading-tight">Power BI / AI Generativa</strong>
                <span className="text-xs text-slate-500">IBM Skills Build - Data Hack</span>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-semibold text-brand-600">2024 - 2025</span>
                <strong className="text-slate-800 font-semibold leading-tight">Python Data Science Master</strong>
                <span className="text-xs text-slate-500">Business Analytics / Machine Learning - Data Science For Business</span>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-semibold text-brand-600">2024 - 2024</span>
                <strong className="text-slate-800 font-semibold leading-tight">Scrum Master Certified</strong>
                <span className="text-xs text-slate-500">Scrum Manager</span>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-semibold text-brand-600">2009 - 2010</span>
                <strong className="text-slate-800 font-semibold leading-tight">Máster de Dirección Comercial y Marketing</strong>
                <span className="text-xs text-slate-500">Ide Cesem</span>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-semibold text-brand-600">2008 - 2009</span>
                <strong className="text-slate-800 font-semibold leading-tight">Gestión Financiera (Incluye Excel)</strong>
                <span className="text-xs text-slate-500">Universidad Complutense de Madrid</span>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <span className="text-xs font-semibold text-brand-600">2023 - 2024</span>
                <strong className="text-slate-800 font-semibold leading-tight">Curso de Cloud Computing and Machine Learning</strong>
                <span className="text-xs text-slate-500">Master D</span>
              </div>

              <div className="flex flex-col gap-1 text-sm col-span-full">
                <span className="text-xs font-semibold text-brand-600">2001</span>
                <strong className="text-slate-800 font-semibold leading-tight">Lic. Empresariales</strong>
                <span className="text-xs text-slate-500">Universidad Santa María</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
