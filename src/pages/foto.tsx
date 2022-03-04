import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import GalleryProjets from '@/components/gallery';
import Footer from '@/components/footer';

export default function Foto() {
  return (
    <Page>
      <NextSeo title="Фото ремонта квартир в Геленджике и Новороссийске — Комфорт Строй Про" description="Фотографии наших проектов, отделки квартир в Геленджике и Новороссийске" />
      <main>
        <GalleryProjets />
      </main>
      <Footer />
    </Page>
  );
}
