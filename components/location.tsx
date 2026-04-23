"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane, Clock, Building } from "lucide-react";

const locationFeatures = [
  {
    icon: MapPin,
    title: "Ubicación Privilegiada",
    description: "En el corazón de Zona Diamante, sobre el Boulevard de las Naciones.",
  },
  {
    icon: Plane,
    title: "10 min del Aeropuerto",
    description: "Acceso rápido desde el Aeropuerto Internacional de Acapulco.",
  },
  {
    icon: Clock,
    title: "5 min de la Playa",
    description: "A pasos de las mejores playas y hoteles de lujo de Acapulco.",
  },
  {
    icon: Building,
    title: "Zona Premium",
    description: "Rodeado de residenciales exclusivos, centros comerciales y restaurantes.",
  },
];

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ubicacion" className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Ubicación
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground md:text-5xl text-balance">
              En el destino más exclusivo de Acapulco
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Zona Diamante representa lo mejor de Acapulco moderno: playas
              cristalinas, desarrollos de lujo, y una infraestructura de primer
              mundo. Hospital Diamante se ubica estratégicamente para servir
              tanto a residentes como a visitantes de esta zona privilegiada.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-card p-6 border border-border">
              <p className="font-medium text-foreground">Dirección</p>
              <p className="mt-2 text-muted-foreground">
                Boulevard de las Naciones #1500
                <br />
                Zona Diamante, Acapulco de Juárez
                <br />
                Guerrero, México, C.P. 39897
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-xl bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30433.87!2d-99.84!3d16.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca4e8c2ebb8c7b%3A0x2c68d3e72a8f8b83!2sZona%20Diamante%2C%20Acapulco%2C%20Guerrero%2C%20Mexico!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Hospital Diamante"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
