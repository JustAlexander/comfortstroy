import { tw } from 'twind';
import Image from 'next/image';
import Button from '@/components/button';
import NextLink from 'next/link';

const listItems = [
  {
    title: `Цена`,
    description: `Не меняется на протяжении всего ремонта, т.к. у нас нет дополнительных или скрытых расходов. К тому же, общая сумма ремонта закреплена в договоре.`,
  },
  {
    title: `Специалисты`,
    description: `На каждом объекте у нас работают от 15 узконаправленных специалистов.`,
  },
  {
    title: `Гарантия`,
    description: `12 месяцев согласно СНиП и ГОСТ`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto py-4 px-6 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`text-base pb-2 text-yellow-600 font-semibold tracking-wide uppercase`)}>Цена с материалами на примере</p>
        <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Ремонта однокомнатной квартиры в Новороссийске</h2>
      </div>
      <div className={tw(`flex flex-wrap items-center`)}>
        <div className={tw(`w-full lg:w-1/2`)}>
          <p className={tw(`text-gray-500 leading-loose pb-2`)}>Стоимость ремонта однокомнатной квартиры в Новороссийске с материалами, общей площадью 50 кв.м., класса комфорт (5500 руб./кв.м), составит примерно 550 000 руб.</p>
          <p className={tw(`text-gray-500 leading-loose pb-2`)}> В эту сумму входят все работы, весь малярный и расходный материал, натяжные потолки (работа + материалы), разводка и монтаж сантехнических узлов, установка сантехники и санфаянса, механическая стяжка полов, электромонтаж (развода и монтаж электроточек, точек освещеия, ТВ и интернет каналов), установка электроприборов, система вентиляции, гидроизоляция, разгрузка и подъем отделочных материалов, вывоз строительного мусора, уборка после ремонта.</p>
          <p className={tw(`text-gray-500 leading-loose pb-2`)}>В эту сумму ремонта однокомнатной квартиры в Новороссийске не вошли материалы, которые заказчик выбирает на свой вкус (обои, люстры, смесители и т.п.)</p>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <Image width="100%" height="100%" src="/images/remont-odnokomnatnoj-kvartiry-gelendzhik.webp" layout="responsive" alt="Ремонт однокомнатной квартир в Новороссийске под ключ" />
          </div>
        </div>
        <div className={tw(`w-full py-6 text-center`)}>
          <p className={tw(`text-gray-500 pb-2`)}>Вы можете рассчитать стоимость ремонта с материалами онлайн:</p>
          <NextLink href="/calculator" passHref>
            <a className={tw(`object-none object-center`)}>
              <Button primary modifier="mt-2">
                Рассчитать в калькуляторе
              </Button>
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
