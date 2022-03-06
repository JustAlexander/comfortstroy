import { tw } from 'twind';
import Particles from 'react-tsparticles';
import Arrow from '@/constants/svg/arrow.svg';
import NextLink from 'next/link';
import Image from 'next/image';

const ParticleBg = () => (
  <Particles
    id="tsparticles"
    options={{
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: `push`,
          },
          onHover: {
            enable: true,
            mode: `repulse`,
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: `#ffffff`,
        },
        links: {
          color: `#ffffff`,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: `none`,
          enable: true,
          outMode: `bounce`,
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: `circle`,
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  />
);

const articles = [
  {
    title: `ЖК Черноморский`,
    content: ``,
    image: `/images/r2.avif`,
    alt: `Ремонт квартиры в Геленджике`,
  },
  {
    title: `ЖК Акварель`,
    content: ``,
    image: `/images/r3.avif`,
    alt: `Отделка квартиры в Геленджике`,
  },
  {
    title: `ЖК Реал`,
    content: ``,
    image: `/images/r16.avif`,
    alt: `Ремонт под ключ в Геленджике`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Примеры наших работ</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>При встрече, можем показать готовые квартиры в живую</p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <Image src={article.image} alt={article.alt} className={tw(`h-full w-full object-cover overflow-hidden rounded`)} width={400} height={300} />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.content}</p>
                </div>
              </div>
            ))}

            <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-yellow-400 cursor-pointer z-30 hover:text-yellow-600`,
              )}
            >
              <NextLink href="/foto" passHref>
                <a>Все фотографии</a>
              </NextLink>
              <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
