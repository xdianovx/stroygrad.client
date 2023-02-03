import s from "./news.module.scss";

import Head from "next/head";
import MainLayout from "../../src/layouts/MainLayout";
import Marquee from "react-fast-marquee";
import cn from "classnames";

import { Title } from "../../src/ui";
import { CallbackForm, NewsCard } from "../../src/components";

export default function Team() {
  const title = "Новости\nкомпании";
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const tags = [
    "жизнь в стройграде",
    "заселение",
    "жилые комплексы",
    "праздник",
    "жизнь в стройграде",
    "заселение",
    "жилые комплексы",
    "праздник",
    "жизнь в стройграде",
    "заселение",
    "жилые комплексы",
    "праздник",
  ];
  const newsPosts = [
    {
      id: 1,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "/img/news/1.png",
      link: "/news/test",

      dark: true,
    },
    {
      id: 2,
      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      link: "/news/test",
      dark: true,
    },
    {
      id: 3,
      link: "/news/test",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: false,
    },
    {
      id: 4,
      link: "/news/test",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "/img/news/2.jpg",
      dark: true,
    },
    {
      id: 5,
      link: "/news/test",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: false,
    },
    {
      id: 6,
      link: "/news/test",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: true,
    },
    {
      id: 7,
      link: "/news/test",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "/img/news/3.jpg",
      dark: true,
    },
    {
      id: 8,
      link: "/news/test",

      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "",
      dark: true,
    },
    {
      id: 9,
      link: "/news/test",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: false,
    },
    {
      id: 10,
      link: "/news/test",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "/img/news/4.jpg",
      dark: true,
    },
    {
      id: 11,
      link: "/news/test",
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "/img/news/5.jpg",
      dark: true,
    },
    {
      id: 12,
      link: "/news/test",

      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "",
      dark: true,
    },
    {
      id: 13,
      link: "/news/test",

      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "",
      dark: false,
    },
  ];
  return (
    <>
      <Head>
        <title>Стройград | Новости</title>
      </Head>
      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              {title}
            </Title>
          </div>
        </section>

        <section className="mt-[78px]">
          <div>
            <div className="container">
              <div className="flex flex-col items-end ">
                <p>Выберите год:</p>
                <div className="flex gap-[22px] mt-[20px] text-gray font-light text-[28px]">
                  <div className="cursor-pointer duration-200 hover:text-black">
                    Все года
                  </div>
                  {years.map((item, idx) => (
                    <div
                      className="cursor-pointer duration-200 hover:text-black"
                      key={idx}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-[78px]">
              <div className="container">
                <p className="text-right">Выберите тему:</p>
              </div>
              <div className="flex gap-[22px] mt-[20px] ">
                <Marquee loop={20} gradient={false}>
                  {tags.map((item, idx) => (
                    <div
                      className="text-3xl cursor-pointer mx-12 font-light text-gray duration-200 hover:text-black"
                      key={idx}
                    >
                      #{item}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[75px]">
          <div className="container">
            <p className="leading-[120%] text-[120px]">2022</p>
            <div className={cn(s.cards, "grid grid-cols-4 gap-5  mt-[37px]")}>
              {newsPosts.map((item) => (
                <NewsCard key={item.id} data={item} className={s.card} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-[320px]">
          <div className="container">
            <p className="leading-[120%] text-[120px]">2021</p>
            <div className={cn(s.cards, "grid grid-cols-4 gap-5  mt-[37px]")}>
              {newsPosts.map((item) => (
                <NewsCard key={item.id} data={item} className={s.card} />
              ))}
            </div>
          </div>
        </section>

        <CallbackForm />
      </MainLayout>
    </>
  );
}
