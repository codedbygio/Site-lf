"use client"

import { motion } from "framer-motion"
import {
  PhoneIcon as WhatsApp,
  Instagram,
  Star,
  Heart,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  Calendar,
  Gift,
  CalendarCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
// import CountdownTimer from "@/components/countdown-timer"
// import SocialSharing from "@/components/social-sharing"

const whatsappLink = "https://api.whatsapp.com/send/?phone=5513997239689&text&type=phone_number&app_absent=0"
const googleMapsLink =
  "https://www.google.com/maps?q=R.+Ant%C3%B4nio+Cardoso+Ferreira,+765+-+Nova+Mirim,+Praia+Grande+-+SP,+11717-410"
const tuaAgendaLink = "https://client.tuaagenda.com/c/LarissaPiercing"

const galleryImages = [
  {
    src: "/images/gallery/piercing-1.jpg",
    alt: "Piercings delicados nos dedos com joias de cristal",
  },
  {
    src: "/images/gallery/piercing-2.jpeg",
    alt: "Piercings faciais com joias douradas",
  },
  {
    src: "/images/gallery/piercing-3.jpg",
    alt: "Piercing no umbigo com pedra azul",
  },
  {
    src: "/images/gallery/piercing-4.jpg",
    alt: "Piercing na orelha com design de folhas e cristais",
  },
  {
    src: "/images/gallery/piercing-5.jpg",
    alt: "Composição elaborada de piercings na orelha",
  },
  {
    src: "/images/gallery/piercing-6.jpeg",
    alt: "Piercing no nariz com joia em formato de flor",
  },
  {
    src: "/images/gallery/piercing-7.jpg",
    alt: "Múltiplos piercings na orelha com design serpente",
  },
  {
    src: "/images/gallery/piercing-8.jpg",
    alt: "Piercing no lábio com aro cravejado",
  },
]

export default function LarissaFrancaPiercer() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "ArrowLeft") prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Promotional Banner */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative bg-gradient-to-r from-red-800 to-red-700 text-white py-6 sm:py-8 lg:py-12 mt-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hearts" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 15c-2-4-8-4-8 0 0 4 8 8 8 8s8-4 8-8c0-4-6-4-8 0z" fill="currentColor" />
            </pattern>
            <rect width="100" height="100" fill="url(#hearts)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-4"
            >
              <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4"
            >
              <span className="font-medium">Piercings e Design de Sobrancelhas </span></motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-6"
            >
              <div className="text-center">
                <div className="text-sm sm:text-base lg:text-lg opacity-90">A partir de</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">R$25</div>
                <div className="text-sm sm:text-base lg:text-lg opacity-90">(Perfuração com joia básica inclusa)</div>
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base lg:text-lg opacity-90">A partir de</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">R$15</div>
                <div className="text-sm sm:text-base lg:text-lg opacity-90">Design de Sobrancelhas </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-red-800 hover:bg-rose-50 px-8 py-3 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsApp className="w-5 h-5 mr-3" />
                  Tire suas dúvidas
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
      >
        <Button
          asChild
          className="bg-red-800 hover:bg-red-700 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-red-800/30 transition-all duration-300 hover:scale-105"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="ml-2 hidden lg:inline">Tire suas dúvidas</span>
          </a>
        </Button>
      </motion.div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-rose-300 transition-colors"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 text-white hover:text-rose-300 transition-colors"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:right-4 text-white hover:text-rose-300 transition-colors"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center sm:bottom-4">
              <p className="text-xs sm:text-sm opacity-75">
                {selectedImage + 1} de {galleryImages.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-rose-50 pt-16 sm:pt-20"
      >
        {/* Animated Rose Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M200 100 C150 120, 120 150, 140 200 C160 250, 200 280, 240 260 C280 240, 300 200, 280 160 C260 120, 220 100, 200 100"
              stroke="#800000"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            <motion.circle
              cx="200"
              cy="180"
              r="30"
              stroke="#FADCDD"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, duration: 2 }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8 leading-tight text-gray-900">
              Piercing como{" "}
              <span className="text-red-800 relative font-medium">
                arte
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 bg-red-800"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>
              .<br />
              Estilo como <span className="text-rose-400 font-medium">expressão</span>.
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Larissa França transforma o detalhe em identidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              asChild
              size="lg"
              className="bg-red-800 hover:bg-red-700 text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-red-800/30 transition-all duration-300 hover:scale-105 font-medium w-full sm:w-auto"
            >
              <a href={tuaAgendaLink} target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                Agendar Online
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsApp className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-rose-300/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-r from-rose-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-white to-rose-100 rounded-3xl overflow-hidden flex items-center justify-center p-6 sm:p-8 shadow-sm border border-rose-100">
                  <img
                    src="/images/lari-franca-logo.png"
                    alt="Lari França Body Piercer Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <motion.div
                  className="absolute -top-3 -right-3 w-6 h-6 bg-red-800 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-4 h-4 bg-rose-300 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Sobre a <span className="text-red-800 font-medium">Larissa</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                <p>
                  Com mãos leves e olhar preciso, ela transforma o corpo em tela, onde cada piercing conta uma história
                  única de <span className="text-red-800 font-medium">autoexpressão</span> e{" "}
                  <span className="text-rose-500 font-medium">empoderamento</span>.
                </p>
                <p>
                  Mais que uma profissional, Larissa é uma curadora de estilo, guiando cada cliente em uma jornada de
                  descoberta pessoal através da arte corporal.
                </p>
                <p className="text-gray-600 italic font-light text-lg sm:text-xl border-l-4 border-red-800 pl-4 sm:pl-6">
                  "Cada piercing é um ritual de beleza, uma celebração da individualidade."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900">
              <span className="text-red-800 font-medium">Serviços</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Experiências personalizadas que celebram sua essência única
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Aplicação de Piercing",
                description: "Técnica refinada com máxima segurança e conforto",
                icon: <Sparkles className="w-8 h-8" />,
              },
              {
                title: "Curadoria Estética",
                description: "Consultoria personalizada para escolha da joia e localização perfeita",
                icon: <Star className="w-8 h-8" />,
              },
              {
                title: "Cuidados Pós-Procedimento",
                description: "Acompanhamento completo para cicatrização ideal",
                icon: <Heart className="w-8 h-8" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="sm:col-span-2 lg:col-span-1 last:sm:col-start-1 last:sm:col-end-3 last:lg:col-start-auto last:lg:col-end-auto"
              >
                <Card className="bg-white border-rose-200 hover:border-red-800/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg h-full">
                  <CardContent className="p-8 sm:p-10 text-center">
                    <motion.div
                      className="text-red-800 mb-6 sm:mb-8 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6 text-gray-900 group-hover:text-red-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900">
              <span className="text-red-800 font-medium">Galeria</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">Momentos de transformação e beleza</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-rose-100"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-red-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <Button
              asChild
              variant="outline"
              className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white rounded-full px-6 sm:px-8 py-3"
            >
              <a href="https://www.instagram.com/larissa.piercing/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                @larissa.piercing
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900">
              <span className="text-red-800 font-medium">Depoimentos</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {[
              {
                text: "A melhor body piercer que já tive, qualidade no atendimento e perfeição. Pós também perfeito! Recomendo a todos.",
                author: "@codedbygio",
              },
              {
                text: "Apaixonada pelo trabalho dela, super indico.",
                author: "@leonela.riberio",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-rose-50 p-8 sm:p-10 rounded-3xl border border-rose-100"
              >
                <div className="text-5xl sm:text-6xl text-red-800 mb-4 sm:mb-6 font-serif">"</div>
                <blockquote className="text-lg sm:text-xl italic text-gray-700 mb-6 sm:mb-8 leading-relaxed font-light">
                  {testimonial.text}
                </blockquote>
                <cite className="text-red-800 font-medium text-base sm:text-lg">— {testimonial.author}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-rose-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-gray-900 leading-tight">
              Pronta para sua <span className="text-red-800 font-medium">transformação</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Agende sua consulta e descubra como um piercing pode realçar sua beleza única
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                asChild
                size="lg"
                className="bg-red-800 hover:bg-red-700 text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-red-800/30 transition-all duration-300 hover:scale-105 font-medium w-full sm:w-auto"
              >
                <a href={tuaAgendaLink} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                  Agendar Online
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium w-full sm:w-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsApp className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                  Tire suas dúvidas
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900">
              <span className="text-red-800 font-medium">Localização</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Visite nosso espaço aconchegante e elegante
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-red-800 mt-1">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-700 leading-relaxed">
                      R. Antônio Cardoso Ferreira, 765 - Nova Mirim
                      <br />
                      Praia Grande - SP, 11717-410
                      <br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-red-800 mt-1">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Segunda à Sexta: 10h às 19h
                      <br />
                      Sábado: 10h às 16h
                      <br />
                      <span className="text-sm italic">Atendimento com hora marcada</span>
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white rounded-full px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-sm border border-rose-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.5762760736673!2d-46.4731!3d-23.9845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1f113cd9a327%3A0xf50eb929bd77a4ff!2sR.%20Ant%C3%B4nio%20Cardoso%20Ferreira%2C%20765%20-%20Nova%20Mirim%2C%20Praia%20Grande%20-%20SP%2C%2011717-410!5e0!3m2!1spt-BR!2sbr!4v1717410000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Lari França Body Piercer"
                  className="rounded-3xl"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 bg-white border-t border-rose-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">
                <span className="text-red-800 font-medium">Larissa França</span>
              </h3>
              <p className="text-gray-600 italic font-light text-base sm:text-lg">"Seu estilo começa no detalhe."</p>
            </motion.div>

            <div className="flex justify-center space-x-6 sm:space-x-8">
              <Button asChild variant="ghost" size="sm" className="text-gray-500 hover:text-red-800 transition-colors">
                <a href="https://www.instagram.com/larissa.piercing/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-gray-500 hover:text-red-800 transition-colors">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-light">
              © 2024 Larissa França. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
