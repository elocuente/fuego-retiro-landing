import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Sunrise, Bike, Heart, MapPin, Calendar, Users, Clock, Phone } from "lucide-react";
import heroImage from "@/assets/hero-retreat.jpg";
import yogaImage from "@/assets/yoga-sunrise.jpg";
import temazcalImage from "@/assets/temazcal-ceremony.jpg";
import meditationImage from "@/assets/meditation-fire.jpg";

const Index = () => {
  const whatsappNumber = "+5493512420145"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hola! Me interesa reservar mi lugar en el retiro de Yoga, Meditación y Bicicleteada";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-minimal-dark hover:bg-minimal-dark/90 text-white rounded-full w-14 h-14 shadow-lg"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Renace en el Fuego: <br />
            Yoga, Meditación y Bicicleteada
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Espacio Natural – Localidad
            </p>
            <p className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Sábado 1 & Domingo 2 de Agosto
            </p>
            <p className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Cupo limitado: 12 personas
            </p>
          </div>
          
           <Button 
             onClick={handleWhatsAppClick}
             className="bg-minimal-dark hover:bg-minimal-dark/90 text-white px-8 py-6 text-lg rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
           >
             Reserva tu lugar ahora
           </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-minimal-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-minimal-dark">
              Un espacio íntimo para renacer
            </h2>
            <p className="text-xl text-minimal-gray mb-12 leading-relaxed">
              "Un espacio íntimo para desconectar de la rutina, reconectar contigo mismo y renacer a través del poder transformador de la naturaleza."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-minimal-light border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-minimal-dark flex items-center justify-center">
                    <Sunrise className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-minimal-dark mb-2">Yoga al amanecer</h3>
                  <div className="w-8 h-8 mx-auto">
                    <Check className="w-full h-full text-minimal-accent" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-minimal-light border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-minimal-accent flex items-center justify-center">
                    <Bike className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-minimal-dark mb-2">Bicicleteada</h3>
                  <div className="w-8 h-8 mx-auto">
                    <Check className="w-full h-full text-minimal-accent" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-minimal-light border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-minimal-dark flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-minimal-dark mb-2">Meditación + Ritual de Fuego</h3>
                  <div className="w-8 h-8 mx-auto">
                    <Check className="w-full h-full text-minimal-accent" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-minimal-light border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-minimal-accent flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-minimal-dark mb-2">Alojamiento y alimentación consciente</h3>
                  <div className="w-8 h-8 mx-auto">
                    <Check className="w-full h-full text-minimal-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-minimal-dark">
              Vive la experiencia
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={yogaImage} 
                  alt="Yoga al amanecer" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-minimal-dark/20 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center">Yoga al amanecer</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={temazcalImage} 
                  alt="Bicicleteada" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-minimal-dark/20 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center">Bicicleteada</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={meditationImage} 
                  alt="Meditación y Ritual de Fuego" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-minimal-dark/20 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center">Meditación y Ritual de Fuego</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-minimal-dark">
              Tu viaje día a día
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Day 1 */}
              <Card className="bg-minimal-light border-none shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-minimal-dark mb-6 text-center">
                    Día 1 – Sábado 1 de Agosto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">17:00</span>
                      <span className="text-minimal-gray">Llegada y check-in</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">18:00</span>
                      <span className="text-minimal-gray">Ronda de bienvenida</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">19:00</span>
                      <span className="text-minimal-gray">Meditación guiada</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">20:00</span>
                      <span className="text-minimal-gray">Cena consciente</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">21:30</span>
                      <span className="text-minimal-gray">Silencio nocturno y descanso</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Day 2 */}
              <Card className="bg-minimal-light border-none shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-minimal-dark mb-6 text-center">
                    Día 2 – Domingo 2 de Agosto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">07:30</span>
                      <span className="text-minimal-gray">Yoga al amanecer</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">08:30</span>
                      <span className="text-minimal-gray">Desayuno nutritivo</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">10:00</span>
                      <span className="text-minimal-gray">Bicicleteada</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">12:00</span>
                      <span className="text-minimal-gray">Caminata meditativa</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">16:30</span>
                      <span className="text-minimal-gray">Snack e integración</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">17:30</span>
                      <span className="text-minimal-gray">Círculo de cierre</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-minimal-accent" />
                      <span className="font-semibold text-minimal-dark">18:00</span>
                      <span className="text-minimal-gray">Despedida</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-minimal-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-minimal-dark">
              Lo que incluye tu experiencia
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center gap-4 bg-minimal-light p-6 rounded-2xl shadow-sm">
                <Check className="w-6 h-6 text-minimal-accent flex-shrink-0" />
                <span className="text-minimal-dark font-semibold">Bicicleteada</span>
              </div>
              <div className="flex items-center gap-4 bg-minimal-light p-6 rounded-2xl shadow-sm">
                <Check className="w-6 h-6 text-minimal-accent flex-shrink-0" />
                <span className="text-minimal-dark font-semibold">Clases de Yoga</span>
              </div>
              <div className="flex items-center gap-4 bg-minimal-light p-6 rounded-2xl shadow-sm">
                <Check className="w-6 h-6 text-minimal-accent flex-shrink-0" />
                <span className="text-minimal-dark font-semibold">Meditación + Ritual de Fuego</span>
              </div>
              <div className="flex items-center gap-4 bg-minimal-light p-6 rounded-2xl shadow-sm">
                <Check className="w-6 h-6 text-minimal-accent flex-shrink-0" />
                <span className="text-minimal-dark font-semibold">Alojamiento 1 noche</span>
              </div>
              <div className="flex items-center gap-4 bg-minimal-light p-6 rounded-2xl shadow-sm">
                <Check className="w-6 h-6 text-minimal-accent flex-shrink-0" />
                <span className="text-minimal-dark font-semibold">Cena + Desayuno + Snack</span>
              </div>
            </div>
            
            <Card className="bg-minimal-dark text-white shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <p className="text-lg opacity-80">Valor total real: $180.000</p>
                  <p className="text-3xl font-bold">Precio especial: $95.000</p>
                  <p className="text-xl opacity-90">Reserva tu lugar con $45.000</p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-white text-minimal-dark hover:bg-minimal-light px-8 py-3 text-lg rounded-2xl shadow-lg mt-6"
                  >
                    Quiero reservar mi lugar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-minimal-dark">
              Conoce a tus guías
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="bg-minimal-light border-none shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-minimal-dark flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">F</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-minimal-dark mb-4">Facu</h3>
                  <p className="text-minimal-gray mb-4">@facuenviaje</p>
                  <p className="text-minimal-dark leading-relaxed">
                    Soy viajero y anfitrión. Me mueve diseñar y sostener espacios donde la naturaleza, el encuentro y la introspección abren nuevas posibilidades. Hoy quiero encender la chispa de lo que podemos crear en los años que vienen.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-minimal-light border-none shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-minimal-accent flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-minimal-dark mb-4">Sole</h3>
                  <p className="text-minimal-gray mb-4">@soleobieta___</p>
                  <p className="text-minimal-dark leading-relaxed">
                    Instructora de yoga y meditación, especializada en prácticas conscientes y 
                    rituales de sanación. Guía de procesos de autoconocimiento y bienestar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-minimal-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-minimal-dark">
              Experiencias que transforman
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-minimal-light border-none shadow-sm">
                <CardContent className="p-8">
                  <p className="text-minimal-dark italic mb-4">
                    "La bicicleteada fue increíble, conectamos con la naturaleza de una forma muy especial. 
                    El yoga y la meditación completaron una experiencia transformadora."
                  </p>
                  <p className="text-minimal-gray font-semibold">- María G.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-minimal-light border-none shadow-sm">
                <CardContent className="p-8">
                  <p className="text-minimal-dark italic mb-4">
                    "El yoga al amanecer y la aventura en bicicleta fueron momentos mágicos. 
                    Regresé a casa con una sensación de renovación que aún conservo."
                  </p>
                  <p className="text-minimal-gray font-semibold">- Juan P.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-minimal-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Los cupos son súper limitados (solo 12 lugares)
            </h2>
            <p className="text-xl mb-12 opacity-80">
              Conecta con tu esencia y reserva ahora.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-minimal-dark hover:bg-minimal-light px-12 py-6 text-xl rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Reservar ahora vía WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
