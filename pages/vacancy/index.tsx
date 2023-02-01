// @ts-nocheck
import s from "./vacancy.module.scss";

import Head from "next/head";
import Image from "next/image";
import cn from "classnames";

import MainLayout from "../../src/layouts/MainLayout";
import { Title } from "../../src/ui";
import { NumberList, TextBlock, VacancySection } from "../../src/components";
import { useEffect, useState } from "react";
import { vacancyList } from "./vacancyData";

export default function Vacancy() {
  const pageTitle = "Свободные\nвакансии";
  const numbersData = [
    { id: 1, num: "01", title: "Опыт компании ", number: "10 лет" },
    { id: 2, num: "02", title: "Опыт компании ", number: "16" },
    { id: 3, num: "03", title: "Построенного жилья ", number: "20203" },
    { id: 4, num: "04", title: "Заселённых квартир", number: "4512" },
  ];

  const [vacancyData, setVacancyData] = useState([]);

  useEffect(() => {
    setVacancyData(vacancyList);
  }, []);

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

          <div className={cn(s.hero__image, "mt-[130px]")}>
            <Image src="/img/vacancy/hero.jpg" fill alt={pageTitle} />
          </div>
        </section>

        <TextBlock
          className="mt-[195px]"
          title="Мы стремимся стать одним
из крупнейших строительно-инвестиционных холдингов федерального и международного уровня. "
          text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
        />

        <NumberList data={numbersData} />
        <VacancySection className="mt-[452px]" data={vacancyData} />
      </MainLayout>
    </>
  );
}
