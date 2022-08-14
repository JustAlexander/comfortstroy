import { tw } from 'twind';
import Image from 'next/image';
import Button from '@/components/button';
import NextLink from 'next/link';

const ListSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto py-4 px-6 sm:p-6 lg:p-8`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`text-base pb-2 text-yellow-600 font-semibold tracking-wide uppercase`)}>Пример расчета</p>
        <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Сметы на ремонт квартиры</h2>
      </div>
      <div className={tw(`flex flex-wrap items-center`)}>
        <p className={tw(`text-gray-500 leading-loose pb-2 mx-auto`)}>Предлагаем ознакомиться с примером сметы на ремонт квартиры. Общая площадь квартиры 50 кв.м.</p>
        <div className={tw(`w-full lg:w-1/2 py-6 text-center mx-auto`)}>
          <Image width="70%" height="100%" src="/images/smeta-na-remont-kvartiry-v-gelendjike.avif" layout="responsive" alt="Смета на ремонт квартиры в Краснодаре" />
          <NextLink href="/zamer" passHref>
            <a className={tw(`object-none object-center`)}>
              <Button primary modifier="mt-10">
                Получить смету
              </Button>
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
