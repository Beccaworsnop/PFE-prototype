"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Recycle, Moon, Sun, Globe, ChevronDown, Wrench, Building2 } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/providers/providers"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Reteck Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors">
              {t("home")}
            </Link>
            <Link href="/latest" className="text-gray-300 hover:text-white font-medium transition-colors">
              {t("latest")}
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-gray-800 border-gray-700 w-48">
                <Link href="/services/customer">
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer">
                    <Wrench className="mr-2 w-4 h-4" />
                    Customer Services
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/company">
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer">
                    <Building2 className="mr-2 w-4 h-4" />
                    Company Services
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/community" className="text-gray-300 hover:text-white font-medium transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white font-medium transition-colors">
              {t("about")}
            </Link>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`text-gray-300 hover:text-white ${language === "en" ? "bg-blue-600" : ""}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("fr")}
                  className={`text-gray-300 hover:text-white ${language === "fr" ? "bg-blue-600" : ""}`}
                >
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("ar")}
                  className={`text-gray-300 hover:text-white ${language === "ar" ? "bg-blue-600" : ""}`}
                >
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-gray-300 hover:text-white"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Auth Buttons */}
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                {t("login")}
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full">
                {t("signUp")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gray-900 border-gray-800">
              <div className="flex flex-col space-y-6 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {t("home")}
                </Link>
                <Link
                  href="/latest"
                  className="text-lg font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {t("latest")}
                </Link>

                {/* Mobile Services */}
                <div className="space-y-2">
                  <span className="text-lg font-medium text-gray-300">Services</span>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/services/customer"
                      className="block text-gray-400 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Customer Services
                    </Link>
                    <Link
                      href="/services/company"
                      className="block text-gray-400 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Company Services
                    </Link>
                  </div>
                </div>

                <Link
                  href="/community"
                  className="text-lg font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Community
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {t("about")}
                </Link>

                <div className="pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-gray-300">
                          <Globe className="w-5 h-5 mr-2" />
                          {language === "en" ? "English" : language === "fr" ? "Français" : "العربية"}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-gray-800 border-gray-700">
                        <DropdownMenuItem onClick={() => setLanguage("en")} className="text-gray-300">
                          English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("fr")} className="text-gray-300">
                          Français
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("ar")} className="text-gray-300">
                          العربية
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="text-gray-300"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-gray-300">
                        {t("login")}
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full">
                        {t("signUp")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
