import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import Features from "@site/src/components/Features";
import Roadmap from "@site/src/components/Roadmap";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`MockLay - ${siteConfig.title}`}
      description="デザインの校正・チェック作業をサポートするアプリケーション"
    >
      <Hero />
      <Features />
      <Roadmap />
    </Layout>
  );
}
