import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';
import Discount from '@/components/discount';
const CasesSection = dynamic(() => import('@/components/cases-section'));

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <Page>
      <NextSeo title="Ремонт квартир в Геленджике под ключ, строительство домов — Комфорт Строй Про" description="Сделать ремонт квартиры под ключ в новостройке Геленджика по договору, с оплатой в 3 этапа." />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <Discount />
        <div ref={observe}>
          <FeatureSection />
        </div>
        {inView && <CasesSection />}
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
