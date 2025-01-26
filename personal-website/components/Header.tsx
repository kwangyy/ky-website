import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="relative w-8 h-8">
          <Image
            src="/logo.jpg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="https://linkedin.com/in/kwang-yang-chia" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://github.com/kwangyy" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://twitter.com/kwangyyinc" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:chia.kwang.yang@gmail.com">
            <Button 
              variant="outline"
              data-contact-button
              className="transition-all duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

