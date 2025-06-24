"use client"

import { motion } from "framer-motion"
import { Share2, MessageCircle, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SocialSharingProps {
  url?: string
  title?: string
  description?: string
}

export default function SocialSharing({
  url = "https://larifranca.com",
  title = "Promoção Dia dos Namorados - Lari França Body Piercer",
  description = "Perfurações com joia básica: 1 por R$30, 2 por R$50! Dias 12, 13 e 14 de junho.",
}: SocialSharingProps) {
  const [isOpen, setIsOpen] = useState(false)

  const shareData = {
    title,
    text: description,
    url,
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      url: `https://wa.me/?text=${encodeURIComponent(`${title}\n\n${description}\n\n${url}`)}`,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/larissafranca.piercer",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
  ]

  return (
    <div className="relative">
      <Button
        onClick={handleNativeShare}
        variant="outline"
        size="sm"
        className="border-white/30 text-white hover:bg-white/20 rounded-full"
      >
        <Share2 className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">Compartilhar</span>
      </Button>

      {isOpen && !navigator.share && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg p-3 z-50 min-w-[200px]"
        >
          <div className="space-y-2">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-white transition-all duration-200 ${link.color}`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
