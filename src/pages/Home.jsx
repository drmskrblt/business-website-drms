import LandingImage from "../assets/landing-image.jpg";
import ConsultingMeeting from "../assets/it-consulting-meeting.png";
import MonitorDigitalisation from "../assets/monitor-digitalisation-image.png";
import WebdesignImage from "../assets/monitor-webdesign.png"

const Home = () => {
  return (
    <>
      <section>
        <div>
          <div className="relative w-full md:w-full lg:w-full mx-auto">
            <img
              src={LandingImage}
              alt="Landing"
              className="w-full h-auto object-cover max-h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold text-white mb-4 md:text-4xl md:tracking-widest">
                Experten für maßgeschneiderte Lösungen
              </h2>
              <button className="bg-accent-1 text-white py-2 px-4 rounded">
                Jetzt anfragen
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-2 max-w-6xl mx-auto px-6 md:px-8 lg:px-8 text-primary-text">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="text-lg md:w-2/3 md:p-4">
            <h2 className="text-3xl py-4">
              IT-Consulting für nachhaltigen Unternehmenserfolg
            </h2>
            <p className="py-4">
              Unser IT-Consulting-Service bietet strategische Beratung, um Ihre
              Geschäftsprozesse durch Technologie zu optimieren. Wir analysieren
              Ihre IT-Struktur, identifizieren Verbesserungspotenziale und
              entwickeln maßgeschneiderte Lösungen, die Ihre operative Effizienz
              steigern. Mit einem Fokus auf Sicherheit und Skalierbarkeit
              unterstützen wir Sie bei der Umsetzung von IT-Strategien, die Ihre
              Wettbewerbsfähigkeit langfristig sichern.
            </p>
          </div>
          <div className="hidden md:block md:w-1/3 m-2">
            <img
              src={ConsultingMeeting}
              alt="IT Consulting"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="p-2 max-w-6xl mx-auto px-6 md:px-8 lg:px-8 text-primary-text">
        <div className="flex flex-col md:flex-row-reverse md:items-center">
          <div className="text-lg md:w-2/3 md:p-4">
            <h2 className="text-3xl py-4">Professionelle Webentwicklung</h2>
            <p className="py-4">
              Wir kreieren digitale Erlebnisse, die begeistern und konvertieren.
              Unsere Webentwicklungsdienste umfassen das Design und die
              Entwicklung von benutzerfreundlichen, responsiven Websites, die
              auf die Bedürfnisse und Ziele Ihrer Zielgruppe zugeschnitten sind.
              Vom Konzept bis zum Launch arbeiten wir eng mit Ihnen zusammen, um
              sicherzustellen, dass Ihre Online-Präsenz nicht nur ansprechend,
              sondern auch funktional und für Suchmaschinen optimiert ist.
            </p>
          </div>
          <div className="hidden md:block md:w-1/3 m-2">
            <img
              src={WebdesignImage}
              alt="Web Development"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="p-2 max-w-6xl mx-auto px-6 md:px-8 lg:px-8 text-primary-text">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="text-lg md:w-2/3 md:p-4">
            <h2 className="text-3xl py-4">
              Digitalisierungslösungen, die Wandel schaffen
            </h2>
            <p className="py-4">
              Entdecken Sie neue Geschäftsmöglichkeiten durch Digitalisierung.
              Unsere Experten unterstützen Sie bei der Integration modernster
              Technologien in Ihre bestehenden Systeme. Von der Automatisierung
              von Arbeitsabläufen bis hin zu fortgeschrittenen Datenanalysen,
              wir helfen Ihnen, die Effizienz zu steigern und bessere
              Entscheidungen durch datengestützte Einblicke zu treffen. Starten
              Sie Ihre digitale Transformation mit uns und bleiben Sie der
              Konkurrenz einen Schritt voraus.
            </p>
          </div>
          <div className="hidden md:block md:w-1/3 m-2">
            <img
              src={MonitorDigitalisation}
              alt="Digitalisation"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="p-2 max-w-6xl mx-auto px-6 md:px-8 lg:px-8 text-primary-text hidden">
        <h2 className="text-3xl">Section 1</h2>

        <p className="bg-primary-bg h-16">-</p>
        <p className="bg-secondary-bg h-16">-</p>
        <p className="bg-primary-text h-16">-</p>
        <p className="bg-secondary-text h-16">-</p>
        <p className="bg-accent-1 h-16">-</p>
        <p className="bg-accent-2 h-16">-</p>
        <p className="bg-border-divider h-16">-</p>
      </section>
    </>
  );
};

export default Home;
