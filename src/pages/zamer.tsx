import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import FormZamer from '@/components/form-zamer';
import Footer from '@/components/footer';

export default function Zamer() {
  return (
    <Page>
      <NextSeo title="Узнать стоимость для ремонта квартиры — Комфорт Строй Про" description="Сделать заявку на вывоз замерщика бесплатно" />
      <main>
        <FormZamer />
      </main>
      <Footer />
    </Page>
  );
}
