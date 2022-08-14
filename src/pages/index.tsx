import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import HeaderNew from '@/components/header-new';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';
import Discount from '@/components/discount';
import PriceWithMaterials from '@/components/price-with-materials';
import Smeta from '@/components/smeta';
import Dogovor from '@/components/dogovor';
import Sroki from '@/components/sroki';
import Equipment from '@/components/equipment';
import Sklad from '@/components/sklad-section';
import KuhniSection from '@/components/kuhni-section';
const CasesSection = dynamic(() => import('@/components/cases-section'));
const SurveyComponent = dynamic(() => import('@/components/survey'), {
  ssr: false,
});

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  const jk = 'Краснодаре';
  return (
    <Page>
      <NextSeo title="Ремонт квартир в Краснодаре под ключ, строительство домов — Комфорт Строй Про" description="Сделать ремонт квартиры под ключ в новостройке Краснодара по договору, с оплатой в 3 этапа." additionalMetaTags={[{ name: 'yandex-verification', content: '3cac6bd75276b8d1' }]} />
      <HeaderNew jk={jk} />
      <SurveyComponent />
      <main>
        <VideoSection />
        <ListSection />
        <Discount />
        <div ref={observe}>
          <FeatureSection jk={jk} />
        </div>
        <Equipment />
        <Sklad />
        {inView && <CasesSection />}
        <KuhniSection />
        <SocialProof />
        <PricingTable jk={jk} />
        <PriceWithMaterials jk={jk} />
        <Smeta />
        <Dogovor jk={jk} />
        <Sroki />
      </main>
      <Footer />
    </Page>
  );
}
