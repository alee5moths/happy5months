import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer" // Importa el nuevo componente Footer

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-gray-900 relative z-10">
        {/* Sección de Bienvenida / Hero */}
        <section className="relative h-screen flex items-center justify-center text-center bg-custom-pink text-white p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-custom-pink to-pink-300 opacity-80"></div>{" "}
          {/* Ligeramente menos opaco */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-sm">
              {" "}
              {/* Sombra más suave */}
              Para mi amorcito, Ale {"❤️"}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Cada día a tu lado es un regalo. Esta página es un pequeño reflejo de todo lo que significas para mí.
            </p>
            <Image
                src="/images-ale/nosotros/foto-portada.jpg"
                alt="Foto de la pareja"
                width={300}
                height={300}
                className="rounded-full mx-auto shadow-md border-2 border-white" // Borde y sombra más sutiles
            />
          </div>
        </section>

        {/* Sección de Nuestras Conversaciones Favoritas */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-custom-pink">
            Nuestras Conversaciones {"💬"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-gray-100 shadow-sm">
              {" "}
              {/* Fondo blanco, borde sutil, sombra suave */}
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                    src="/images-ale/chats/chat-1.jpg"
                    alt="Captura de chat 1"
                    width={350}
                    height={200}
                    className="rounded-lg mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-800">
                  "Recuerdo cuando me dijiste esto, me hizo sonreír todo el día."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                    src="/images-ale/chats/chat-2.jpg"
                    alt="Captura de chat 2"
                    width={350}
                    height={200}
                    className="rounded-lg mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-800">"Nuestras bromas internas siempre me alegran el día."</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                    src="/images-ale/chats/chat-3.jpg"
                    alt="Captura de chat 3"
                    width={350}
                    height={200}
                    className="rounded-lg mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-800">
                  "Ese día comenzo nuestra historia de amor."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Momentos Inolvidables Juntos */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          {" "}
          {/* Fondo muy sutil */}
          <h2 className="text-4xl font-bold text-center mb-12 text-custom-pink">Momentos Juntos {"📸"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-gray-100 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                    src="/images-ale/nosotros/nosotros.jpg"
                    alt="Foto de pareja 1"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-800">"Los besos más bonitos no siempre se dan en los labios."</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                    src="/images-ale/nosotros/nosotros-1.jpg"
                    alt="Foto de pareja 2"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-800">"Te besare siempre donde el cielo besa el mar"</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                    src="/images-ale/nosotros/nosotros-2.jpg"
                    alt="Foto de pareja 3"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-800">"J & A, dos letras una historia."</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Mensajes de Mi Corazón para Ti */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-custom-pink">Mensajes de Mi Corazón para Ti {"💖"}</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white border-gray-100 shadow-sm p-6">
              {" "}
              {/* Fondo blanco, borde sutil, sombra suave */}
              <CardContent className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">
                  Mi amor, cada día que pasa me doy cuenta de lo afortunado que soy de tenerte a mi lado. Tu sonrisa
                  ilumina mis días y tu amor me da la fuerza para superar cualquier obstáculo. Eres mi compañera, mi mejor
                  amiga y el amor de mi vida. Gracias por ser tú.
                </p>
                <p>
                  Contigo, cada momento es una aventura y cada desafío se convierte en una oportunidad para crecer juntos.
                  Eres la persona más increíble que he conocido, y no puedo esperar a ver qué nos depara el futuro. Te amo
                  más de lo que las palabras pueden expresar.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-sm p-6">
              <CardContent className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">
                  Desde el primer día, supe que eras especial. Tu bondad, tu inteligencia y tu espíritu vibrante me
                  cautivaron por completo. Me inspiras a ser una mejor persona y me haces sentir completo.
                </p>
                <p>
                  Gracias por cada risa, cada abrazo y cada momento compartido. Eres mi refugio, mi alegría y mi paz.
                  Prometo amarte, cuidarte y valorarte cada día de nuestras vidas. Siempre tuyo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
  )
}
