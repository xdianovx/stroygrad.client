import Head from "next/head";
import MainLayout from "../src/layouts/MainLayout";
import {
  ComplexSolutions,
  ImageSection,
  IndexHero,
  LifeSection,
  NumberList,
  Projects,
  Services,
  TextBlock,
} from "../src/components";

export default function Home() {
  const numbersData = [
    { id: 1, num: "01", title: "Опыт компании ", number: "10 лет" },
    { id: 2, num: "02", title: "Опыт компании ", number: "16" },
    { id: 3, num: "03", title: "Построенного жилья ", number: "20203" },
    { id: 4, num: "04", title: "Заселённых квартир", number: "4512" },
  ];
  return (
    <>
      <Head>
        <title>{process.env.SITE_TITLE}</title>
      </Head>

      <MainLayout>
        <main>
          <IndexHero
            className="mt-[290px]"
            title="Мы строим счастливое будущее"
          />
          <ImageSection />
          <TextBlock
            className="mt-[290px]"
            title="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального и международного уровня. "
            text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
          />
          <Projects />
          <Services />
          {/* <ComplexSolutions/>  */}
          <TextBlock
            className="mt-[290px]"
            title="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального и международного уровня. "
            text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
          />

          <NumberList data={numbersData} />
          <LifeSection />
        </main>
      </MainLayout>
    </>
  );
}
