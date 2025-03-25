import { MapPin, Clock, Mail, Phone } from "lucide-react";
import Footer from "../../core/components/templates/footer/Footer";

export default function ContactInfo() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="grow">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-fade-in mb-12 text-center">
            <h1 className="bg-blue-900 bg-clip-text pb-2 text-4xl font-bold text-transparent dark:text-gray-300 md:text-6xl">
              Bogʻlanish
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="h-[700px]">
              <div className="h-full overflow-auto rounded-xl bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
                <div className="pb-100 mb-8 space-y-4 border-b border-gray-200 pb-5 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                  <p>
                    Oʻzbekiston Respublikasining "Jismoniy va yuridik
                    shaxslarning murojaatlari toʻgʻrisida"gi Qonuni ijrosini
                    taʼminlash maqsadida murojaat yo'llashdan oldin unutmang:
                  </p>
                  <p>
                    Murojaatda familiya, ism, yashash joyi va murojaat mohiyati
                    bayon etilishi lozim. Aks holda murojaatlar anonim bo'lib,
                    ko'rib chiqilmaydi.
                  </p>
                  <p>
                    Fuqaro murojaatini shaxsan yoki aloqa vositasi orqali taqdim
                    qilish huquqiga ega.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
                      <MapPin className="size-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                        Manzil
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        Toshkent shahar, Mirobod tumani, Taras Shevchenko
                        koʻchasi, 20
                      </p>
                      <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Metro: Ming O'rik
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
                      <Clock className="size-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                        Ish vaqti
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        Dushanba - Juma
                      </p>
                      <p className="mt-2 text-gray-500 dark:text-gray-400">
                        9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
                      <Phone className="size-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                        Bog'lanish
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        <a
                          href="tel:+998712035511"
                          className="transition-colors hover:text-blue-500"
                        >
                          71-203-55-11
                        </a>
                      </p>
                      <div className="mt-2 flex items-center space-x-2">
                        <Mail className="size-5 text-blue-500" />
                        <a
                          href="mailto:info@csec.uz"
                          className="text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300"
                        >
                          info@csec.uz
                        </a>
                        <span className="text-gray-400">|</span>
                        <a
                          href="mailto:csec@exat.uz"
                          className="text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300"
                        >
                          csec@exat.uz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[700px]">
              <div className="h-full overflow-hidden rounded-xl bg-white/80 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
                <div className="relative size-full">
                  <iframe
                    src="https://maps.google.com/maps?q=41.3019177,69.2735863&z=20&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
