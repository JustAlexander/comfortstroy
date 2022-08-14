import { tw } from 'twind';
import Image from 'next/image';

const ListSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto px-6 sm:p-6 lg:p-8`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`text-base pb-2 text-yellow-600 font-semibold tracking-wide uppercase`)}>Сроки</p>
        <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Ремонта квартиры в новостройке Краснодара</h2>
      </div>
      <div className={tw(`flex flex-wrap items-center`)}>
        <p className={tw(`text-gray-500 leading-loose pb-2 mx-auto`)}>Сроки ремонта квартиры в новостройке Краснодара зависят от объёма и сложности работ, но в среднем варьируются от 2 до 3 месяцев. Мы не нарушаем сроки и гарантируем сдачу объекта вовремя. К тому же, дата начала и окончания ремонта квартиры новостройки в Краснодаре зафиксирована в договоре.</p>
        <div className={tw(`w-full py-6 text-center mx-auto`)}>
          <Image width="100%" height="40%" src="/images/sroki-remonta-kvartiry-novostroyki-v-gelengjike1.avif" layout="responsive" alt="Сроки на ремонт квартиры в Краснодаре" />
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
