"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Building2, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"

interface SignupFormProps {
  accountType: "customer" | "company"
  onBack: () => void
  onSuccess: (userData: any) => void
}

export function SignupForm({ accountType, onBack, onSuccess }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    companyName: "",
    contractId: "",
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) return

    if (accountType === "company" && !formData.contractId) {
      alert(t("signup.contractIdRequired"))
      return
    }

    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      const userData = {
        email: formData.email,
        name: accountType === "company" ? formData.companyName : `${formData.firstName} ${formData.lastName}`,
        points: accountType === "company" ? 500 : 100, // Different welcome bonus
        accountType,
        contractId: accountType === "company" ? formData.contractId : null,
      }
      onSuccess(userData)
    }, 1500)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {accountType === "customer" ? (
            <User className="w-5 h-5 text-blue-400" />
          ) : (
            <Building2 className="w-5 h-5 text-blue-400" />
          )}
          <span className="text-white font-medium">
            {accountType === "customer" ? t("signup.customer") : t("signup.company")}
          </span>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={onBack} className="text-blue-400 hover:text-blue-300">
          {t("signup.change")}
        </Button>
      </div>

      {accountType === "company" && (
        <div className="space-y-2">
          <Label htmlFor="contractId" className="text-white">
            {t("signup.contractId")} *
          </Label>
          <Input
            id="contractId"
            placeholder={t("signup.contractIdPlaceholder")}
            value={formData.contractId}
            onChange={(e) => handleInputChange("contractId", e.target.value)}
            required
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      )}

      {accountType === "company" ? (
        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-white">
            {t("signup.companyName")} *
          </Label>
          <Input
            id="companyName"
            placeholder={t("signup.companyNamePlaceholder")}
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            required
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-white">
              {t("signup.firstName")} *
            </Label>
            <Input
              id="firstName"
              placeholder={t("signup.firstNamePlaceholder")}
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white">
              {t("signup.lastName")} *
            </Label>
            <Input
              id="lastName"
              placeholder={t("signup.lastNamePlaceholder")}
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          {t("signup.email")} *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={t("signup.emailPlaceholder")}
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">
          {t("signup.phone")} *
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t("signup.phonePlaceholder")}
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          required
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          {t("signup.password")} *
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={t("signup.passwordPlaceholder")}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={agreedToTerms}
          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm text-gray-300">
          {t("signup.agreeToTerms")}{" "}
          <Link href="/terms" className="text-blue-400 hover:text-blue-300">
            {t("signup.termsOfService")}
          </Link>{" "}
          {t("signup.and")}{" "}
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
            {t("signup.privacyPolicy")}
          </Link>
        </Label>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
          disabled={isLoading || !agreedToTerms}
        >
          {isLoading ? t("signup.creatingAccount") : t("signup.createAccount")}
        </Button>
      </motion.div>
    </form>
  )
}
