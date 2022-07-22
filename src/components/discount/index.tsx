import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import NextLink from 'next/link';
import Toggle from '../Toggle';

const features = [`Разводка и монтаж сантех. узлов`, `Гидроизоляция`, `Стяжка`, `Электромонтажные работы`, `Заделка штраб`, `Грунтовка, штукатурка, шпатлевка стен`, `Устройство откосов`, `Укладка напольного покрытия`, `Оклейка стен обоями`, `Установка дверей`, `Установка сантехники, вентиляции`, `Натяжной потолок`, `Доставка, подъем материалов`, `Вынос и вывоз строительного мусора`];

const Discount = () => (
  <section id="price" className={tw(`bg-gray-100 shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto pb-10 mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none`)}>
        <div className={tw(`py-8 px-6 md:px-0 text-center`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>
            <span className={tw(`bg-yellow-600 text-gray-100`)}> Акция </span>  для новостроек
          </h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>Если вам требуется ремонт в новостройке, то вы можете участвовать в акции и выбрать теплый пол или входную дверь в подарок.</p>
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
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-3 justify-items-center`)}>
              <li className={tw(`flex items-center lg:col-span-1 my-3`)}>
                <div className={tw(`flex-shrink-0`)}>
                  <Toggle type="radio" name="toggle1" checked={true} className={tw(`mr-3`)} />
                </div>
                <p className={tw(`text-gray-600`)}>Теплый пол на 2 контура</p>
              </li>
              <li className={tw(`flex items-center lg:col-span-1`)}>
                <div className={tw(`flex-shrink-0`)}>
                  <Toggle type="radio" name="toggle2" className={tw(`mr-3`)} />
                </div>
                <p className={tw(`text-gray-600`)}>Входная дверь</p>
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
