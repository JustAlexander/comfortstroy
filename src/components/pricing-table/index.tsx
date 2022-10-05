import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import NextLink from 'next/link';

const features = [`Разводка и монтаж сантех. узлов`, `Гидроизоляция`, `Стяжка`, `Электромонтажные работы`, `Заделка штраб`, `Грунтовка, штукатурка, шпатлевка стен`, `Устройство откосов`, `Укладка напольного покрытия`, `Оклейка стен обоями`, `Установка дверей`, `Установка сантехники, вентиляции`, `Натяжной потолок`, `Доставка, подъем материалов`, `Вынос и вывоз строительного мусора`];

export default function PricingTable(props) {
  return (
    <section id="price" className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
      <div className={tw(`relative max-w-7xl mx-auto mb-24 sm:p-6 lg:p-8`)}>
        <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
          <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
            <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Цена на ремонт в {props.jk}</h2>
            <p className={tw(`text-gray-500 leading-loose pb-2`)}>
              Средняя цена ремонта квартиры в {props.jk} от нашей компании Комфорт Строй Про, составляет от 10000 руб. за квадратный метр. Ниже представлен полный перечень работ и стоимость. Обратите внимание, что здесь указана цена ремонта квартиры в {props.jk} с учётом материалов.
            </p>
            <div className={tw(`mt-8`)}>
              <div className={tw(`flex items-center`)}>
                <h3
                  className={tw(
                    `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-yellow-600`,
                  )}
                >
                  Что включено
                </h3>
                <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
              </div>
              <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
                {features.map((feature) => (
                  <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                    <div className={tw(`flex-shrink-0`)}>
                      <Check fill="currentColor" className={tw(`h-8 w-8 mr-3 mb-1 text-yellow-500`)} />
                    </div>
                    <p className={tw(`text-gray-600`)}>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={tw(
              `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
            )}
          >
            <p className={tw(`text-lg font-medium text-gray-800`)}>
              <b>Цена за м2</b>
            </p>
            <p className={tw(`text-lg font-medium text-gray-800`)}>с учётом материалов от</p>
            <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>10 000 ₽</div>
            <NextLink href="/zamer" passHref>
              <a>
                <Button primary modifier="mt-6">
                  Оставить заявку
                </Button>
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
