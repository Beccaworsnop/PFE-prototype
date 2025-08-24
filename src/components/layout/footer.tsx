import { Recycle, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Reteck Solutions</span>
            </div>
            <p className="text-gray-400">
              Leading the way in sustainable e-waste recycling and environmental responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/latest" className="block text-gray-400 hover:text-white transition-colors">
                Latest News
              </Link>
              <Link href="/locations" className="block text-gray-400 hover:text-white transition-colors">
                Locations
              </Link>
              <Link href="/rewards" className="block text-gray-400 hover:text-white transition-colors">
                Rewards
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2">
              <Link href="/pickup" className="block text-gray-400 hover:text-white transition-colors">
                Pickup Service
              </Link>
              <Link href="/data-destruction" className="block text-gray-400 hover:text-white transition-colors">
                Data Destruction
              </Link>
              <Link href="/corporate" className="block text-gray-400 hover:text-white transition-colors">
                Corporate Solutions
              </Link>
              <Link href="/certificates" className="block text-gray-400 hover:text-white transition-colors">
                Certificates
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">info@retecksolutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">123 Green Street, Eco City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Reteck Solutions. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
