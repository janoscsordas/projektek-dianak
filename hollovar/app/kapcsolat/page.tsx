
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import ContactForm from "./ContactForm"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Company Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Információk rólunk</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>Budapest XVII. kerület, Szentendre u. 13.</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>+36 1 234 5678</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>info@hollovar.hu</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>Hétfő - Péntek: 9:00 - 17:00</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kövess minket</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Vedd fel velük a kapcsolatot</h2>
          <ContactForm />
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">A Hollóvár tulajdonosairól</h2>
          <p className="text-muted-foreground">
            A Hollóvárat egy magáncég vette át 2019-ben, amikor is megkezdődött a restaurálás. Ma már megtekinthető formába hozták. A Hollóvár a JaniBT tulajdonába tartozik.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">A Mi Érdemeink Ezzel</h2>
          <p className="text-muted-foreground">
            Be akarjuk mutatni az embereknek ezt a csodálatos építményt, amit senki nem tud ki építtetett oly régen. Közben pedig azt szeretnénk, hogy az emberek jól érezzék magukat, amíg itt vannak így mindenre felkészültünk, hogy vágyaikat kielégítsük.
          </p>
        </div>
      </div>
    </div>
  )
}
