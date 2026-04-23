"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  Building2,
  Wifi,
  Car,
  ShieldCheck,
  Waves,
  TreePalm,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const amenities = [
  {
    title: "Quirófanos de Última Generación",
    description:
      "12 quirófanos equipados con tecnología robótica, sistemas de navegación quirúrgica y salas híbridas para procedimientos mínimamente invasivos.",
    image: "/images/operating-room.jpg",
    icon: Stethoscope,
  },
  {
    title: "Suites de Recuperación Premium",
    description:
      "Habitaciones privadas con vista al océano, diseñadas para una recuperación óptima con servicios de hospitalidad cinco estrellas.",
    image: "/images/recovery-suite.jpg",
    icon: HeartPulse,
  },
  {
    title: "Consultorios Privados",
    description:
      "Espacios diseñados ergonómicamente con tecnología integrada, acabados de lujo y áreas de espera personalizadas para cada especialidad.",
    image: "/images/private-clinic.jpg",
    icon: Building2,
  },
  {
    title: "Terraza Wellness",
    description:
      "Área de recuperación al aire libre con jardines terapéuticos, piscina de hidroterapia y vistas panorámicas a la bahía de Acapulco.",
    image: "/images/rooftop-terrace.jpg",
    icon: Waves,
  },
];

const features = [
  { icon: Wifi, label: "Conectividad 5G" },
  { icon: Car, label: "Estacionamiento VIP" },
  { icon: ShieldCheck, label: "Seguridad 24/7" },
  { icon: TreePalm, label: "Jardines Terapéuticos" },
];

export function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % amenities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  return (
    <section id="amenidades" className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Amenidades
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground md:text-5xl text-balance">
            Diseñado para la excelencia médica
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Cada espacio ha sido cuidadosamente planificado para ofrecer el
            ambiente ideal para la práctica médica de primer nivel.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-16"
        >
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.title}
                  className="relative min-w-full"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-4/3 lg:aspect-auto">
                      <img
                        src={assetPath(amenity.image)}
                        alt={amenity.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-center bg-card p-8 lg:p-16">
                      <amenity.icon className="h-12 w-12 text-primary" />
                      <h3 className="mt-6 font-serif text-3xl font-light text-foreground">
                        {amenity.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {amenity.description}
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {index + 1} / {amenities.length}
                        </span>
                        <div className="flex gap-2">
                          {amenities.map((_, i) => (
                            <button
                              key={amenities[i].title}
                              type="button"
                              onClick={() => setCurrentIndex(i)}
                              className={`h-2 w-8 rounded-full transition-colors ${
                                i === currentIndex
                                  ? "bg-primary"
                                  : "bg-border"
                              }`}
                              aria-label={`Go to slide ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 lg:left-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full bg-card/90 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Anterior</span>
            </Button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 lg:right-8">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full bg-card/90 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="flex flex-col items-center rounded-lg bg-card p-6 text-center"
            >
              <feature.icon className="h-8 w-8 text-primary" />
              <p className="mt-3 text-sm font-medium text-foreground">
                {feature.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
