"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-card py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Contacto
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground md:text-5xl text-balance">
            Comienza tu inversión hoy
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Nuestro equipo de asesores está listo para brindarte información
            detallada sobre los consultorios disponibles y los beneficios de la
            preventa.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-2xl font-light text-foreground">
              Información de contacto
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Agenda una cita con nuestros asesores para conocer el proyecto en
              detalle y recorrer el showroom.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <a
                    href="tel:+527441234567"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +52 744 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:ventas@hospitaldiamante.mx"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    ventas@hospitaldiamante.mx
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-lg bg-secondary p-6">
              <p className="font-medium text-foreground">Horario de atención</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Lunes a Viernes: 9:00 AM - 7:00 PM
                <br />
                Sábados: 10:00 AM - 4:00 PM
                <br />
                Domingos: Cita previa
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl bg-secondary p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-light text-foreground">
                  Mensaje enviado
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Gracias por tu interés en Hospital Diamante. Uno de nuestros
                  asesores se pondrá en contacto contigo en las próximas 24
                  horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl bg-background p-8 shadow-sm border border-border"
              >
                <FieldGroup className="grid gap-6 md:grid-cols-2">
                  <Field>
                    <FieldLabel>Nombre completo</FieldLabel>
                    <Input
                      required
                      placeholder="Tu nombre"
                      className="bg-card"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Correo electrónico</FieldLabel>
                    <Input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="bg-card"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Teléfono</FieldLabel>
                    <Input
                      type="tel"
                      placeholder="+52 000 000 0000"
                      className="bg-card"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Especialidad médica</FieldLabel>
                    <Select>
                      <SelectTrigger className="bg-card">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Medicina General</SelectItem>
                        <SelectItem value="cardiologia">Cardiología</SelectItem>
                        <SelectItem value="dermatologia">Dermatología</SelectItem>
                        <SelectItem value="ginecologia">Ginecología</SelectItem>
                        <SelectItem value="neurologia">Neurología</SelectItem>
                        <SelectItem value="oftalmologia">Oftalmología</SelectItem>
                        <SelectItem value="oncologia">Oncología</SelectItem>
                        <SelectItem value="ortopedia">Ortopedia</SelectItem>
                        <SelectItem value="pediatria">Pediatría</SelectItem>
                        <SelectItem value="psiquiatria">Psiquiatría</SelectItem>
                        <SelectItem value="otra">Otra</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field className="md:col-span-2">
                    <FieldLabel>Tipo de consultorio de interés</FieldLabel>
                    <Select>
                      <SelectTrigger className="bg-card">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estandar">
                          Consultorio Estándar (45 m²)
                        </SelectItem>
                        <SelectItem value="premium">
                          Consultorio Premium (65 m²)
                        </SelectItem>
                        <SelectItem value="suite">
                          Suite Médica (95 m²)
                        </SelectItem>
                        <SelectItem value="multiple">
                          Múltiples consultorios
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field className="md:col-span-2">
                    <FieldLabel>Mensaje (opcional)</FieldLabel>
                    <Textarea
                      placeholder="Cuéntanos sobre tus necesidades específicas..."
                      className="min-h-[120px] bg-card resize-none"
                    />
                  </Field>
                </FieldGroup>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
