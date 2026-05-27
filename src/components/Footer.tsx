import { Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mariem Miliani. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs text-slate-400">
            <Link to="/aviso-legal" className="hover:text-slate-600 transition-colors">Aviso Legal</Link>
            <span>|</span>
            <Link to="/privacidad" className="hover:text-slate-600 transition-colors">Política de Privacidad</Link>
            <span>|</span>
            <Link to="/cookies" className="hover:text-slate-600 transition-colors">Política de Cookies</Link>
          </div>
        </div>
        
        <div className="flex gap-4">
          <a href="mailto:mariemmiliani@gmail.com" className="text-slate-400 hover:text-brand-600 transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a href="tel:+34629607989" className="text-slate-400 hover:text-brand-600 transition-colors">
            <Phone size={20} />
            <span className="sr-only">Teléfono</span>
          </a>
          <a href="https://www.linkedin.com/in/mariemmiliani/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
