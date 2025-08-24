"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/ui/animatedbackground"
import { AccountTypeSelector } from "@/components/ui/account-type-selector"
import { SignupForm } from "@/components/ui/signup-form"

export function SignupPage() {
  const [accountType, setAccountType] = useState<"customer" | "company" | null>(null)
  const router = useRouter()
  const { t } = useLanguage()

  const handleSignupSuccess = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData))
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative z-10"
      >
        <Card className="w-full max-w-md bg-gray-800/40 backdrop-blur-lg border border-gray-700">
          <CardHeader className="text-center">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Recycle className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-2xl font-bold text-white">{t("signup.title")}</CardTitle>
            <CardDescription className="text-gray-300">{t("signup.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            {!accountType ? (
              <AccountTypeSelector onSelect={setAccountType} />
            ) : (
              <SignupForm
                accountType={accountType}
                onBack={() => setAccountType(null)}
                onSuccess={handleSignupSuccess}
              />
            )}

            {accountType && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-300">
                  {t("signup.alreadyHaveAccount")}{" "}
                  <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                    {t("signup.signInLink")}
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
