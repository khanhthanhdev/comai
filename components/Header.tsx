'use client'

import Link from "next/link";
import GithubIcon from "./github-icon";
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Github, Twitter, Moon, Sun, Facebook } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {

  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="container flex items-center justify-between py-6 px-4 md:px-0">
      <Link href="/">
        <div className="flex items-baseline gap-2">
          <span className="text-[#3ABEF9] font-regular text-xl">ComAI</span>
          <span className="text-[10px] px-1.5 py-0 rounded bg-black/10 dark:bg-white/10">BETA</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>

        <a href="https://facebook.com/khanhthanhdev" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Button>
        </a>
        <a href="https://github.com/khanhthanhdev" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Button>
        </a>
      </div>
    </header>
  );
}
