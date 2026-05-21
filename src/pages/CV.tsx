import { motion } from 'motion/react';

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-16 print:bg-white print:pt-0 print:pb-0">
      {/* Dynamic @page CSS styles to enforce single page layout on printing */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          html, body {
            height: 99% !important;
            background-color: #ffffff !important;
            color: #0f172a !important;
            font-size: 11px !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page {
            size: A4 portrait;
            margin: 6mm 10mm 4mm 10mm;
          }
          /* Ensure absolutely no layout breaks onto page 2 */
          .page-break-avoid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}} />

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
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-md rounded-3xl border border-slate-100 grid md:grid-cols-3 gap-8 md:gap-12 print:shadow-none print:border-none print:p-0 print:rounded-none print:grid print:grid-cols-3 print:gap-x-8 print:gap-y-0 text-slate-700">
        
        {/* Left Sidebar: Photo & Contact & Core skills */}
        <div className="md:col-span-1 flex flex-col gap-6 print:gap-4 print:col-span-1 border-slate-200">
          {/* Header Photo for Screen/Print */}
          <div className="flex flex-col items-center text-center">
            {/* Height/width adjusts for beautiful crisp face positioning on both screen and print */}
            <div className="size-40 md:size-44 rounded-full overflow-hidden shadow-inner border-4 border-slate-150 mb-3 bg-slate-100 print:size-32 print:border-2 print:mb-1">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczMx58c35KsmKfZQNWO4xyFSOv536g7ctT1vynhRcgLDKEbx_xu4y1oVndJpm0tY8qJHMLgVgGezQ0VXOoumDTzGkL7JJxRbzJkZEP6lEurKk6_3nJ6Y=w1000"
                alt="Mariem Miliani Profile"
                className="w-full h-full object-cover scale-[1.75] origin-[51%_36%] transition-transform"
              />
            </div>
            <span className="inline-block px-3 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-1 print:text-[9px] print:px-2 print:py-0">
              📍 Sevilla, España
            </span>
          </div>

          {/* Contact Details */}
          <div className="page-break-avoid">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 border-b border-slate-100 pb-1 print:text-[9px] print:mb-1.5 print:pb-0.5">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 print:space-y-1 print:text-[10px]">
              <li className="flex items-center gap-2.5">
                <span className="text-xs">📞</span>
                <a href="tel:+34629607989" className="hover:text-slate-900 transition-colors">
                  +34 629 60 79 89
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-xs">✉️</span>
                <a href="mailto:mariemmiliani@gmail.com" className="hover:text-slate-900 transition-colors break-all">
                  mariemmiliani@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-xs">🌐</span>
                <a href="https://mariem-lab.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors break-all">
                  mariem-lab.vercel.app
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-xs">🔗</span>
                <a href="https://linkedin.com/in/mariem-miliani" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors break-all">
                  linkedin.com/in/mariem-miliani
                </a>
              </li>
            </ul>
          </div>

          {/* Core Profile */}
          <div className="page-break-avoid">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 border-b border-slate-100 pb-1 print:text-[9px] print:mb-1.5 print:pb-0.5">
              Perfil Profesional
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed print:text-[10.5px] print:leading-normal">
              Profesional con experiencia en negocio, operaciones y gestión, orientada a consultoría, Business Intelligence y transformación digital. Perfil híbrido con capacidad para conectar análisis, procesos y necesidades de cliente con soluciones orientadas a negocio y toma de decisiones.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="page-break-avoid">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 border-b border-slate-100 pb-1 print:text-[9px] print:mb-1.5 print:pb-0.5">
              Capacidades
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 print:space-y-0.5 print:text-[10.5px]">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 text-xs">✦</span>
                <span>Visión de negocio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 text-xs">✦</span>
                <span>Relación con cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 text-xs">✦</span>
                <span>Análisis orientado a decisiones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 text-xs">✦</span>
                <span>Mejora de procesos</span>
              </li>
            </ul>
          </div>

          {/* Key Abilities / Stack info guidance */}
          <div className="print:hidden">
            <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
              <h4 className="text-xs font-bold text-slate-700 mb-1">💡 Guardado óptimo</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Al imprimir, desmarca la opción de incluir <strong>cabeceras y pies de página</strong> (páginas de URL / fecha) en la configuración de la impresora para conservar el documento en 1 sola hoja impecable.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Title, Experience, Education */}
        <div className="md:col-span-2 flex flex-col gap-6 md:border-l md:border-slate-100 md:pl-8 print:border-l print:pl-6 print:gap-4 print:col-span-2">
          
          {/* Header Details */}
          <div className="pb-3 border-b border-slate-100 print:pb-2 print:mb-0">
            <h1 className="text-3xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1 print:text-[22px] print:leading-tight">
              MARIEM MILIANI
            </h1>
            <p className="text-sm text-slate-500 font-semibold print:text-[10.5px]">
              Consultora de Transformación Digital | Business Intelligence & Data Analytics
            </p>
          </div>

          {/* Professional Experience */}
          <div className="page-break-avoid">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pb-1.5 border-b border-slate-150 flex items-center gap-1.5 print:text-[9px] print:mb-2.5 print:pb-0.5">
              💼 Experiencia Profesional
            </h2>

            <div className="space-y-5 print:space-y-3">
              {/* Experience 1 */}
              <div className="relative pl-3.5 border-l border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 print:text-[11px]">
                    Consultora de Negocio y Operaciones
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-150 px-2 py-0.5 rounded-full print:bg-transparent print:p-0 print:text-[9.5px]">
                    2020 – Actual
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-1 print:text-[9.5px]">
                  Proyectos Independientes y Formación Aplicada
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-3.5 leading-relaxed print:text-[10px] print:leading-normal print:space-y-0.5">
                  <li>Estrategia digital, análisis de datos y optimización de negocio.</li>
                  <li>Creación de dashboards e informes para seguimiento de KPIs.</li>
                  <li>Testing y mejora de campañas, contenido y rendimiento comercial.</li>
                  <li className="font-semibold text-slate-800 print:text-[9.5px] mt-0.5">
                    <strong>Logro:</strong> Incremento de eficiencia mediante análisis y automatización.
                  </li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-3.5 border-l border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 print:text-[11px]">
                    Gestión Operativa y Desarrollo de Negocio
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-150 px-2 py-0.5 rounded-full print:bg-transparent print:p-0 print:text-[9.5px]">
                    2012 – 2020
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-1 print:text-[9.5px]">
                  Mariem Gourmet
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-3.5 leading-relaxed print:text-[10px] print:leading-normal print:space-y-0.5">
                  <li>Dirección operativa y comercial de catering B2B y B2C.</li>
                  <li>Seguimiento de ventas y costes para apoyo en toma de decisiones estratégicas.</li>
                  <li>Fidelización de clientes, gestión de compras y logística integral.</li>
                  <li className="font-semibold text-slate-800 print:text-[9.5px] mt-0.5">
                    <strong>Logro:</strong> Mejora de eficiencia operativa y optimización en márgenes de rentabilidad.
                  </li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="relative pl-3.5 border-l border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 print:text-[11px]">
                    Administración & Operaciones
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-150 px-2 py-0.5 rounded-full print:bg-transparent print:p-0 print:text-[9.5px]">
                    2010 – 2012
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-0.5 print:text-[9.5px]">
                  Clínica S&O · Vernon Marketing People
                </p>
                <ul className="text-xs text-slate-600 space-y-0.5 list-disc pl-3.5 leading-relaxed print:text-[10px] print:leading-normal">
                  <li>Gestión administrativa, facturación, conciliaciones y soporte a dirección técnica.</li>
                  <li>Optimización y reestructuración de procesos de documentación interna.</li>
                </ul>
              </div>

              {/* Experience 4 */}
              <div className="relative pl-3.5 border-l border-slate-200">
                <div className="flex flex-wrap justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-800 print:text-[11px]">
                    Gestión Bancaria y Operativa
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-150 px-2 py-0.5 rounded-full print:bg-transparent print:p-0 print:text-[9.5px]">
                    2002 – 2008
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mb-1 print:text-[9.5px]">
                  Banco Canarias / BFC
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-3.5 leading-relaxed print:text-[10px] print:leading-normal print:space-y-0.5">
                  <li>Dirección de sucursal, gestión comercial de carteras y análisis de riesgo de crédito.</li>
                  <li>Supervisión de equipos de trabajo y optimización de flujos comerciales.</li>
                  <li className="font-semibold text-slate-800 print:text-[9.5px] mt-0.5">
                    <strong>Logro:</strong> Cumplimiento recurrente de objetivos comerciales y auditorías operativas con nivel excelente.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div className="page-break-avoid">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pb-1.5 border-b border-slate-150 flex items-center gap-1.5 print:text-[9px] print:mb-2.5 print:pb-0.5">
              🎓 Formación y Certificaciones
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 print:grid-cols-2 print:gap-x-4 print:gap-y-2">
              <div className="flex flex-col gap-0.5 text-xs">
                <span className="text-[10px] font-bold text-brand-600 uppercase print:text-[8px]">2025</span>
                <strong className="text-slate-800 font-semibold leading-tight print:text-[10px]">Power BI / AI Generativa</strong>
                <span className="text-[10px] text-slate-500 print:text-[9px]">IBM Skills Build - Data Hack</span>
              </div>

              <div className="flex flex-col gap-0.5 text-xs">
                <span className="text-[10px] font-bold text-brand-600 uppercase print:text-[8px]">2024 - 2025</span>
                <strong className="text-slate-800 font-semibold leading-tight print:text-[10px]">Python Data Science Master</strong>
                <span className="text-[10px] text-slate-500 print:text-[9px]">Business Analytics & Machine Learning - Data Science For Business</span>
              </div>

              <div className="flex flex-col gap-0.5 text-xs">
                <span className="text-[10px] font-bold text-brand-600 uppercase print:text-[8px]">2024</span>
                <strong className="text-slate-800 font-semibold leading-tight print:text-[10px]">Scrum Master Certified</strong>
                <span className="text-[10px] text-slate-500 print:text-[9px]">Scrum Manager</span>
              </div>

              <div className="flex flex-col gap-0.5 text-xs">
                <span className="text-[10px] font-bold text-brand-600 uppercase print:text-[8px]">2009 - 2010</span>
                <strong className="text-slate-800 font-semibold leading-tight print:text-[10px]">Máster Dirección Comercial / Marketing</strong>
                <span className="text-[10px] text-slate-500 print:text-[9px]">Ide Cesem</span>
              </div>

              <div className="flex flex-col gap-0.5 text-xs">
                <span className="text-[10px] font-bold text-brand-600 uppercase print:text-[8px]">2008 - 2009</span>
                <strong className="text-slate-800 font-semibold leading-tight print:text-[10px]">Gestión Financiera (Excel Avanzado)</strong>
                <span className="text-[10px] text-slate-500 print:text-[9px]">Universidad Complutense de Madrid</span>
              </div>

              <div className="flex flex-col gap-0.5 text-xs">
                <span className="text-[10px] font-bold text-brand-600 uppercase print:text-[8px]">2023 - 2024</span>
                <strong className="text-slate-800 font-semibold leading-tight print:text-[10px]">Cloud Computing & Machine Learning</strong>
                <span className="text-[10px] text-slate-500 print:text-[9px]">Master D</span>
              </div>

              <div className="flex flex-col gap-0.5 text-xs col-span-full print:col-span-2">
                <span className="text-[10px] font-bold text-brand-600 uppercase print:text-[8px]">2001</span>
                <strong className="text-slate-800 font-semibold leading-tight print:text-[10px]">Lic. Empresariales (Administración)</strong>
                <span className="text-[10px] text-slate-500 print:text-[9px]">Universidad Santa María</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
