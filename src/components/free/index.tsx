import { tw } from 'twind';
import Image from 'next/image';
import Button from '@/components/button';
import NextLink from 'next/link';
import Toggle from '../Toggle';

const Discount = () => (
  <section id="free" className={tw(`bg-gray-100 shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto pb-10 mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none`)}>
        <div className={tw(`py-8 px-6 md:px-0 text-center`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>
            <span className={tw(`bg-yellow-600 text-gray-100`)}> 0 рублей </span>  за монтаж дверей
          </h2>
          <div className={tw(`h-64 z-20 relative mb-5`)}>
            <Image src="/images/doors.webp" alt="Монтаж дверей" className={tw(`h-full w-full object-contain overflow-hidden rounded`)} layout="fill" />
          </div>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>Если вам требуется ремонт под ключ в новостройке, то монтаж входной и всех межкомнатных дверей мы выполним бесплатно</p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 pl-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-yellow-600`,
                )}
              >
                Выберите ваш подарок
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-1 justify-items-center`)}>
              <li className={tw(`flex items-center lg:col-span-1 my-3`)}>
                <div className={tw(`flex-shrink-0`)}>
                  <Toggle type="radio" name="toggle1" checked={true} className={tw(`mr-3`)} />
                </div>
                <p className={tw(`text-gray-600`)}>Бесплатная установка входной и межкомнатных дверей</p>
              </li>

              <li className={tw(`flex items-center lg:col-span-1 justify-center`)}>
                <NextLink href="#survey" passHref>
                  <a>
                    <Button primary modifier="mt-6">
                      Оставить заявку
                    </Button>
                  </a>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Discount;
