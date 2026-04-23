"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { assetPath } from "@/lib/asset-path";

export function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Nuestra Visión
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground md:text-5xl text-balance">
              Redefiniendo la experiencia médica de lujo
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hospital Diamante emerge como el proyecto médico más ambicioso
                de Acapulco, diseñado para ofrecer una experiencia de salud sin
                precedentes en la Zona Diamante.
              </p>
              <p>
                Con arquitectura de vanguardia, tecnología médica de última
                generación y una ubicación privilegiada frente al mar, creamos
                el espacio perfecto para profesionales de la salud que buscan
                elevar su práctica médica.
              </p>
              <p>
                Cada consultorio está pensado para brindar el máximo confort
                tanto a médicos como a pacientes, en un entorno que combina
                excelencia clínica con el lujo que caracteriza a la Zona
                Diamante.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-10">
              <div>
                <p className="font-serif text-4xl font-light text-primary">
                  120+
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Consultorios Privados
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-light text-primary">
                  25
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Especialidades
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-light text-primary">
                  2026
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Apertura
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-lg">
              <img
                src={assetPath("images/lobby.jpg")}
                alt="Hospital Diamante - Lobby principal"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-primary p-8 text-primary-foreground shadow-xl md:block">
              <p className="font-serif text-2xl font-light">Preventa</p>
              <p className="mt-1 text-sm opacity-90">Precios exclusivos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
