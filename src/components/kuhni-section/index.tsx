import { tw } from 'twind';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import Button from '@/components/button';
import NextLink from 'next/link';

const slideImages = [
  {
    url: '/images/kuhni-1.webp',
    caption: 'Кухня',
  },
  {
    url: '/images/kuhni-2.webp',
    caption: 'Кухня',
  },
  {
    url: '/images/kuhni-3.webp',
    caption: 'Кухня',
  },
  {
    url: '/images/kuhni-4.webp',
    caption: 'Кухня',
  },
  {
    url: '/images/kuhni-5.webp',
    caption: 'Кухня',
  },
];

const listItems = [
  {
    title: `Дизайн-проект для кухни`,
    description: `Поможем выбрать кухню, которая будет сочетаться с дизайном квартиры.`,
  },
  {
    title: `Подбираем качественные материалы`,
    description: `В производстве используем только качественные материалы, чтобы кухня служила долго.`,
  },
  {
    title: `Скидки для клиентов`,
    description: `Для клиентов, которые делают ремонт с нами, предоставляем скидки на кухни!`,
  },
];

const KuhniSection = () => (
  <section id="kuhni" className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Кухня вашей мечты</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Изготавливаем кухни на заказ</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-top`)}>
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
              <NextLink href="#survey" passHref>
                <a>
                  <Button primary modifier="mt-6 mx-6">
                    Рассчитать стоимость ремонта с кухней
                  </Button>
                </a>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default KuhniSection;
