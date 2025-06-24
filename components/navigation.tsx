"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappLink = "https://api.whatsapp.com/send/?phone=5513997239689&text&type=phone_number&app_absent=0"

const menuItems = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Localização", href: "#localizacao" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("#inicio")}
          >
            <div className="h-12 flex items-center">
              <img
                src="/images/lari-franca-logo-new.png"
                alt="Lari França Body Piercer"
                className="h-10 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-light relative group"
              >
                {item.name}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-800 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              size="sm"
              className="hidden lg:flex bg-red-800 hover:bg-red-700 text-white rounded-full px-6 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsApp className="w-4 h-4 mr-2" />
                Agendar
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-rose-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-700 hover:text-red-800 transition-colors duration-200 font-light py-2 border-b border-rose-100 last:border-b-0"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-red-800 hover:bg-red-700 text-white rounded-full py-3 font-medium"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <WhatsApp className="w-4 h-4 mr-2" />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
