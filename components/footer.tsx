"use client";

import { Diamond, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  proyecto: [
    { label: "Amenidades", href: "#amenidades" },
    { label: "Consultorios", href: "#consultorios" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Galería", href: "#" },
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2">
              <Diamond className="h-8 w-8" />
              <span className="font-serif text-xl font-semibold tracking-wide">
                Hospital Diamante
              </span>
            </a>
            <p className="mt-6 max-w-md text-sm text-background/70 leading-relaxed">
              El futuro de la medicina de lujo en Acapulco. Un proyecto diseñado
              para elevar la práctica médica al más alto nivel, en el corazón
              de Zona Diamante.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Proyecto</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.proyecto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Hospital Diamante. Todos los
            derechos reservados.
          </p>
          <p className="text-sm text-background/50">
            Acapulco, Guerrero, México
          </p>
        </div>
      </div>
    </footer>
  );
}
