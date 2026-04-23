"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const clinicTypes = [
  {
    name: "Consultorio Estándar",
    size: "45 m²",
    price: "Desde $2.8M MXN",
    features: [
      "Recepción privada",
      "Área de consulta",
      "Baño privado",
      "Conectividad de alta velocidad",
      "Acceso a áreas comunes",
      "1 cajón de estacionamiento",
    ],
    highlighted: false,
  },
  {
    name: "Consultorio Premium",
    size: "65 m²",
    price: "Desde $4.2M MXN",
    features: [
      "Recepción privada amplia",
      "Área de consulta + procedimientos menores",
      "Baño completo con regadera",
      "Sistema de expedientes digitales",
      "Acceso prioritario a quirófanos",
      "2 cajones de estacionamiento",
      "Vista al jardín interior",
    ],
    highlighted: true,
  },
  {
    name: "Suite Médica",
    size: "95 m²",
    price: "Desde $6.5M MXN",
    features: [
      "Recepción con sala de espera privada",
      "2 áreas de consulta independientes",
      "Sala de procedimientos equipada",
      "Baño completo de lujo",
      "Terraza privada",
      "4 cajones de estacionamiento",
      "Vista panorámica al mar",
      "Acceso VIP a todas las instalaciones",
    ],
    highlighted: false,
  },
];

export function Clinics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="consultorios" className="bg-card py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Consultorios en Venta
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground md:text-5xl text-balance">
            Tu espacio en el hospital del futuro
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Invierte en un consultorio diseñado para el éxito de tu práctica
            médica. Precios de preventa con beneficios exclusivos.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {clinicTypes.map((clinic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full overflow-hidden ${
                  clinic.highlighted
                    ? "border-primary shadow-xl ring-2 ring-primary"
                    : "border-border"
                }`}
              >
                {clinic.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Más Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <p className="text-sm text-muted-foreground">{clinic.size}</p>
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    {clinic.name}
                  </h3>
                  <p className="mt-2 text-xl font-semibold text-primary">
                    {clinic.price}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {clinic.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`mt-8 w-full ${
                      clinic.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <a href="#contacto">
                      Solicitar Información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-xl bg-secondary p-8 text-center lg:p-12"
        >
          <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
            Beneficios exclusivos de preventa
          </h3>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-3">
            <div>
              <p className="text-3xl font-light text-primary">15%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Descuento en precio de lista
              </p>
            </div>
            <div>
              <p className="text-3xl font-light text-primary">24</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Meses sin intereses
              </p>
            </div>
            <div>
              <p className="text-3xl font-light text-primary">0%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Comisión de apertura
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
