"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Instagram, Facebook } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#contacto", label: "Contacto" },
]

export default function HaciendaLaJoya() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0eb0b553-7758-495f-b149-ae604d7b49a9-2hIaysB6QbV1EALO26nHyT6YQ0cgrm.jpeg"
                alt="Ex-Hacienda La Joya Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className={`hidden md:block transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
                <p className="text-xl font-semibold tracking-wider">Hacienda La Joya</p>
                <p className="text-xs tracking-[0.3em] uppercase opacity-80">Casa de Eventos</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-70 ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://wa.me/524772914712"
                target="_blank"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Reservar
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border">
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground text-lg tracking-wider py-2 border-b border-border/30"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/524772914712"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm tracking-wider uppercase mt-4"
                >
                  <Phone className="w-4 h-4" />
                  Reservar
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf7622a9-2332-471d-b31f-a2cef0a3b60c-MYhL506YaJCXziv3SCMpOFDJWdL2y1.jpeg"
            alt="Ex-Hacienda La Joya - Vista exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0eb0b553-7758-495f-b149-ae604d7b49a9-2hIaysB6QbV1EALO26nHyT6YQ0cgrm.jpeg"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-full shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase mb-4">
            Tienes Que
          </h1>
          <p className="text-5xl md:text-7xl font-serif italic text-amber-200 mb-8">
            Vivirlo
          </p>
          <p className="text-lg tracking-[0.3em] uppercase opacity-80 mb-12">
            Desde 1600
          </p>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce opacity-70" />
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2308-eJXZDRBPvqnRAxnKPheAe5NY6CK1SB.jpeg"
                  alt="Arcos coloniales de la hacienda"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full -z-10" />
            </div>
            
            <div className="lg:pl-12">
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Nuestra Historia</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                Una Pieza<br />
                <span className="font-serif italic text-primary">Histórica</span>
              </h2>
              <div className="w-20 h-0.5 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hacienda La Joya es una verdadera pieza histórica de León, Guanajuato del año de 1,600. 
                A través de los años, el esplendor del lugar se mantuvo intacto, llevando hasta ustedes 
                una atmósfera inigualable para el día de su evento.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Cada rincón de nuestra hacienda cuenta una historia de más de cuatro siglos, 
                ofreciendo un escenario único donde la tradición y la elegancia se fusionan 
                para crear momentos inolvidables.
              </p>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left - Content */}
            <div className="bg-primary p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-primary-foreground/70 tracking-[0.3em] uppercase text-sm mb-4">Servicios</p>
              <div className="w-12 h-12 mb-6">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-primary-foreground/50">
                  <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-primary-foreground mb-2">
                Haz Tu Evento
              </h2>
              <p className="text-3xl md:text-4xl font-light text-primary-foreground mb-2">Soñado</p>
              <p className="text-3xl md:text-4xl font-serif italic text-amber-200 mb-10">Realidad</p>
              
              <div className="space-y-4">
                {["Bodas & XV's", "Graduaciones", "Empresarial", "Eventos Sociales"].map((service) => (
                  <Link
                    key={service}
                    href="#contacto"
                    className="block border-2 border-primary-foreground/30 text-primary-foreground text-center py-4 tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="relative min-h-[500px] lg:min-h-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2309-kIaOf4xmI9bf7N89l3D7Obvs2A1ems.jpeg"
                alt="Montaje elegante de mesa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Galería</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Recuerdos
            </h2>
            <p className="text-4xl md:text-5xl font-serif italic text-primary">Inolvidables</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09b8c072-8b5a-4c5b-95f0-2e1fd1b98e09-BD7alZvojG6DPwr4gAiWTpiHvFaqZa.jpeg",
                alt: "Salón principal con decoración rústica elegante",
                title: "Salón Principal"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2308-eJXZDRBPvqnRAxnKPheAe5NY6CK1SB.jpeg",
                alt: "Arcos coloniales con flores",
                title: "Arquitectura Colonial"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2309-kIaOf4xmI9bf7N89l3D7Obvs2A1ems.jpeg",
                alt: "Montaje de mesa con velas",
                title: "Detalles Elegantes"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/146aa994-3f1d-4b15-9c03-fa45c360ce40-QtLZuUZjld08g3VhYuKdNeJkLZ2Nee.jpeg",
                alt: "Jardín al atardecer",
                title: "Jardines"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f22cb2b0-54c0-4727-b1ea-349e91d79e8f-wN5hRgpovf3tTXXoMqtibi2TYPkwSy.jpeg",
                alt: "Sendero iluminado de noche",
                title: "Iluminación Nocturna"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf7622a9-2332-471d-b31f-a2cef0a3b60c-MYhL506YaJCXziv3SCMpOFDJWdL2y1.jpeg",
                alt: "Vista exterior de la hacienda",
                title: "Fachada Histórica"
              },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-lg tracking-wider">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installations Section */}
      <section id="instalaciones" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Nuestras Instalaciones</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Salón, Jardín
            </h2>
            <p className="text-4xl md:text-5xl font-serif italic text-primary">o Terraza?</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09b8c072-8b5a-4c5b-95f0-2e1fd1b98e09-BD7alZvojG6DPwr4gAiWTpiHvFaqZa.jpeg",
                title: "Salón",
                description: "Espacio interior con arquitectura histórica"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/146aa994-3f1d-4b15-9c03-fa45c360ce40-QtLZuUZjld08g3VhYuKdNeJkLZ2Nee.jpeg",
                title: "Jardín",
                description: "Amplios jardines rodeados de naturaleza"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2308-eJXZDRBPvqnRAxnKPheAe5NY6CK1SB.jpeg",
                title: "Terraza",
                description: "Espacios al aire libre con vista panorámica"
              },
            ].map((space, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl"
              >
                <Image
                  src={space.src}
                  alt={space.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="text-white text-3xl tracking-[0.2em] uppercase mb-2">{space.title}</h3>
                  <p className="text-white/70 text-sm">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f22cb2b0-54c0-4727-b1ea-349e91d79e8f-wN5hRgpovf3tTXXoMqtibi2TYPkwSy.jpeg"
            alt="Sendero nocturno"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
            Agenda Tu Visita
          </h2>
          <p className="text-xl font-serif italic text-amber-200 mb-8">
            Y vive la experiencia de nuestra hacienda
          </p>
          <Link
            href="https://wa.me/524772914712"
            target="_blank"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Contactar por WhatsApp
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Contacto</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
                Estamos Para<br />
                <span className="font-serif italic text-primary">Servirte</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Dirección</p>
                    <p className="text-muted-foreground">
                      Blvd Aristóteles 1961, Ejido La Joya,<br />
                      CP 37178, León, Guanajuato, México
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Teléfono</p>
                    <a href="tel:+524772914712" className="text-muted-foreground hover:text-primary transition-colors">
                      477 291 4712
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Correo Electrónico</p>
                    <a href="mailto:exhaciendalajoya@outlook.es" className="text-muted-foreground hover:text-primary transition-colors">
                      exhaciendalajoya@outlook.es
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Map/Image */}
            <div className="relative aspect-square lg:aspect-auto rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bf7622a9-2332-471d-b31f-a2cef0a3b60c-MYhL506YaJCXziv3SCMpOFDJWdL2y1.jpeg"
                alt="Vista de la hacienda"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Link
                  href="https://maps.google.com/?q=Blvd+Aristóteles+1961+León+Guanajuato"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white/90 text-foreground px-6 py-3 rounded-full hover:bg-white transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Ver en Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0eb0b553-7758-495f-b149-ae604d7b49a9-2hIaysB6QbV1EALO26nHyT6YQ0cgrm.jpeg"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-background">
                <p className="text-lg font-semibold tracking-wider">Hacienda La Joya</p>
                <p className="text-xs tracking-[0.2em] uppercase opacity-70">Desde 1600</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 text-sm tracking-wider hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-background/30 rounded-full flex items-center justify-center text-background/70 hover:bg-background hover:text-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-background/30 rounded-full flex items-center justify-center text-background/70 hover:bg-background hover:text-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Ex-Hacienda La Joya. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/524772914712"
        target="_blank"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </Link>
    </div>
  )
}
