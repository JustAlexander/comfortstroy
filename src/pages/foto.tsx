import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import GalleryProjets from '@/components/gallery';
import Footer from '@/components/footer';
import FormFoto from '@/components/form-foto';

export default function Foto() {
  return (
    <Page>
      <NextSeo title="Фото ремонта квартир в Краснодаре — Комфорт Строй Про" description="Фотографии наших проектов, отделки квартир в Краснодаре" />
      <main>
        <GalleryProjets />
        <FormFoto />
      </main>
      <Footer />
    </Page>
  );
}
