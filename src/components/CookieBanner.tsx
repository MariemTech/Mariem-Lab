import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-slate-900 text-slate-200 rounded-2xl shadow-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center gap-6 pointer-events-auto">
            <div className="flex-1 text-sm leading-relaxed text-center md:text-left">
              <strong className="text-white block mb-1">Tu privacidad es importante</strong>
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y analizar sus hábitos de navegación. Para cumplir con la normativa RGPD de la Unión Europea, puedes elegir si aceptas o rechazas el uso de estas cookies.
            </div>
            <div className="flex shrink-0 gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors font-medium text-sm"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white transition-colors font-medium text-sm"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
