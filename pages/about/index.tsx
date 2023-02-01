import Head from "next/head";
import Image from "next/image";
import MainLayout from "../../src/layouts/MainLayout";
import { TextMd, Title } from "../../src/ui";
import s from "./about.module.scss";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { CreateSection, HeadStuff } from "../../src/components";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageTitle = "Компания\nCтройград";

  return (
    <>
      <Head>
        <title>Стройград | О компании</title>
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              {pageTitle}
            </Title>
          </div>

          <div className={s.hero__image}>
            <Image src="/img/about/hero.jpg" fill alt={pageTitle} />
          </div>
        </section>

        <CreateSection />

        <HeadStuff />
      </MainLayout>
    </>
  );
}
