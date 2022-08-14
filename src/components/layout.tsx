import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  return (
    <Page>
      <NextSeo title="Ремонт квартир в Краснодаре под ключ, строительство домов — Комфорт Строй Про" description="Сделать ремонт квартиры под ключ в новостройке Краснодара по договору, с оплатой в 3 этапа." />
      <Header />
      <main>{children}</main>
      <Footer />
    </Page>
  );
}
