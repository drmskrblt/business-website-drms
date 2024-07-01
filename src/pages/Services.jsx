import { serviceCards } from "../data/serviceData";


const Services = () => {
  // Styling of the section
  const STYLE = {
    sectionContainer: `bg-primary-bg w-full p-6 text-white`,
  };

  const CARD = {
    container: `grid gap-6 py-4 md:grid-cols-2 lg:grid-cols-3`,
    box: `bg-secondary-bg flex flex-col items-center p-3 rounded-lg shadow-md text-center text-white tracking-wide`,
    icon: `text-[50px]`,
    title: `text-2xl text-white font-bold m-2`,
    button: `btn block mt-4 py-2 px-4 text-blue-200 font-bold border-2 border-blue-200 bg-transparent rounded-md text-center tracking-normal`,
  };

  return (
    <>
      {/* CARD SECTION */}
      <section className={STYLE.sectionContainer}>
        <div className={CARD.container}>
          {serviceCards.map((card, index) => {
            return (
              <div key={index} >
                <div className={CARD.box}>
                  <div className={CARD.icon}>{card.icon}</div>
                  <h3 className={CARD.title}>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href={CARD.link} className={CARD.button}>
                    {card.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default Services
