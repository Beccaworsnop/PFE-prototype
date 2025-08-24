"use client"

import { Button } from "@/components/ui/button"
import { User, Building2 } from "lucide-react"
import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"

interface AccountTypeSelectorProps {
  onSelect: (type: "customer" | "company") => void
}

export function AccountTypeSelector({ onSelect }: AccountTypeSelectorProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white text-center mb-6">{t("signup.accountType")}</h3>
      <div className="grid grid-cols-1 gap-4">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="button"
            variant="outline"
            className="w-full h-20 bg-gray-700/50 border-gray-600 text-white hover:bg-blue-600/20 hover:border-blue-500 flex flex-col items-center justify-center space-y-2"
            onClick={() => onSelect("customer")}
          >
            <User className="w-8 h-8 text-blue-400" />
            <span className="font-semibold">{t("signup.customer")}</span>
            <span className="text-xs text-gray-400">{t("signup.customerDesc")}</span>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="button"
            variant="outline"
            className="w-full h-20 bg-gray-700/50 border-gray-600 text-white hover:bg-blue-600/20 hover:border-blue-500 flex flex-col items-center justify-center space-y-2"
            onClick={() => onSelect("company")}
          >
            <Building2 className="w-8 h-8 text-blue-400" />
            <span className="font-semibold">{t("signup.company")}</span>
            <span className="text-xs text-gray-400">{t("signup.companyDesc")}</span>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}