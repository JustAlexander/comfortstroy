import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import Button from '@/components/button';
import NextLink from 'next/link';

const slideImages = [
  {
    url: '/images/sk-1.webp',
    caption: 'Склад',
  },
  {
    url: '/images/sk-2.webp',
    caption: 'Склад',
  },
  {
    url: '/images/kv-1.webp',
    caption: 'Квартира',
  },
  {
    url: '/images/kv-2.webp',
    caption: 'Квартира',
  },
];

const listItems = [
  {
    title: `Доставка и выкуп материалов`,
    description: `На объект завозим материалы с запасом в 5%. Остальные материалы выкупаем и отправляем на склад.`,
  },
  {
    title: `Привозим на объект за 1 день`,
    description: `Собственная служба доставки оперативно доставляет материалы в квартиру, что позволяет начать ремонт без задержек.`,
  },
  {
    title: `Свой автопарк`,
    description: `В собственности компании - свой автопарк, быстро доставляющий необходимые материалы.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Поможем с выбором и доставкой до квартиры</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Собственный склад с материалами в Геленджике</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-top`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-6`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-yellow-50 text-yellow-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-2 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
            <li className={tw(`flex -mx-4 place-content-center`)}>
              <NextLink href="/zamer" passHref>
                <a>
                  <Button primary modifier="mt-6 mx-6">
                    Рассчитать стоимость с нашими материалами
                  </Button>
                </a>
              </NextLink>
            </li>
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-4`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <div className="slide-container">
              <Slide slidesToShow={1}>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div className={tw(`h-96 relative`)}>
                      <Image src={slideImage.url} alt={slideImage.caption} className={tw(`h-full w-full object-contain overflow-hidden rounded`)} layout="fill" />
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
