import { tw } from 'twind';
import Image from 'next/image';
import Button from '@/components/button';
import NextLink from 'next/link';

export default function DogovorSection(props) {
  return (
    <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto px-6 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`text-base pb-2 text-yellow-600 font-semibold tracking-wide uppercase`)}>Цена не меняется</p>
          <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>На отделку квартиры в {props.jk}</h2>
        </div>
        <div className={tw(`flex flex-wrap items-center`)}>
          <p className={tw(`text-gray-500 leading-loose pb-2 mx-auto`)}>
            Так как мы работаем только по договору подряда, то в нем официально закрепляется сумма отделки квартиры в {props.jk} и она не меняется в ходе работы. У нас нет скрытых расходов. Ремонт вам обойдется ровно в столько, сколько будет прописано в смете и договоре на отделку квартиры в {props.jk}.
          </p>
          <div className={tw(`w-full lg:w-1/2 py-6 text-center mx-auto`)}>
            <Image width="70%" height="100%" src="/images/dogovor-na-otdelku-kravtiry-v-gelengzhike.avif" layout="responsive" alt="Смета на ремонт квартиры в Краснодаре" />
            <NextLink href="/zamer" passHref>
              <a className={tw(`object-none object-center`)}>
                <Button primary modifier="mt-10">
                  Получить образец договора
                </Button>
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
