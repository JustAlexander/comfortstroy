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
import Free from '@/components/free';
import PriceWithMaterials from '@/components/price-with-materials';
import Smeta from '@/components/smeta';
import Dogovor from '@/components/dogovor';
import Sroki from '@/components/sroki';
import Equipment from '@/components/equipment';
import Sklad from '@/components/sklad-section';
import KuhniSection from '@/components/kuhni-section';
import FormStoimost from '@/components/form-stoimost';
import ChatButton from '@/components/chatButton';
const CasesSection = dynamic(() => import('@/components/cases-section'));
const SurveyComponent = dynamic(() => import('@/components/survey'), {
  ssr: false,
});

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  const jk = 'Геленджике';
  return (
    <Page>
      <NextSeo title="Ремонт квартир в Геленджике под ключ, строительство домов — Комфорт Строй Про" description="Сделать ремонт квартиры под ключ в новостройке Геленджика по договору, с оплатой в 3 этапа." additionalMetaTags={[{ name: 'yandex-verification', content: '3cac6bd75276b8d1' }]} />
      <HeaderNew />
      <FormStoimost />
      {/* <SurveyComponent /> */}
      <main>
        <VideoSection />
        <ListSection />
{/*         <Free /> */}
        <div ref={observe}>
          <FeatureSection />
        </div>
        <Equipment />
        <Sklad />
        {inView && <CasesSection />}
        <KuhniSection />
        <SocialProof />
        <PricingTable />
        <PriceWithMaterials />
        <Smeta />
        <Dogovor />
        <Sroki />
        <ChatButton />
      </main>
      <Footer />
    </Page>
  );
}
