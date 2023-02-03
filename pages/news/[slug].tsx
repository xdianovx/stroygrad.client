import Head from "next/head";
import Image from "next/image";
import { CallbackForm } from "../../src/components";
import MainLayout from "../../src/layouts/MainLayout";
import { LinkCircle } from "../../src/ui";
import HeroJpg from "./1.jpg";
import SecondJpg from "./2.jpg";

export default function Team() {
  return (
    <>
      <Head>
        <title>Стройград | Новость</title>
      </Head>

      <MainLayout>
        <section className="hero">
          <div className="container">
            <div className="text-[20px] mt-[320px]">21.10.2022</div>

            <div className="flex items-end mt-[28px]">
              <h1 className="text-[90px] leading-[100px]">
                Жк Абрикос литер 1 - сдан
              </h1>
              <LinkCircle size="lg" link="/" className="ml-auto">
                Перейти к проекту
              </LinkCircle>
            </div>

            <div className="flex gap-[16px] mt-12 text-grayDark">
              <p>#заселение</p>
              <p>#жизньвстройграде</p>
              <p>#праздник</p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto h-[900px] mt-[38px]">
          <Image
            src={HeroJpg}
            fill
            alt="title"
            className="object-cover block"
          />
        </section>

        {/* First */}
        <section className="mt-[170px]">
          <div className="container">
            <div className="grid grid-cols-[1fr_980px]">
              <div className="" />
              <div className="">
                <h2 className="text-[90px] leading-[105%]">
                  Уважаемые участники долевого строительства!
                </h2>
                <p className="mt-20 text-[40px] leading-[52px]">
                  29 декабря 2018 года был введен в эксплуатацию многоквартирный
                  дом по адресу г. Краснодар, ул. 5-я Дорожная, 68 корпус 1.
                  Всего в доме насчитывается 384 квартиры. Также застройщик
                  благоустроил придомовую территорию и установил большую детскую
                  площадку. Жк Абрикос один из ярких проектов микрорайона
                  молодежный, который находится в самом его сердце. На первом
                  этаже в доме располагаются коммерческие помещения.
                </p>

                <div className="mt-20">
                  <div className="relative h-[680px] ">
                    <Image
                      src={SecondJpg}
                      alt="text"
                      fill
                      className="object-cover block"
                    />
                  </div>
                  <p className="mt-3">В первый день начала монолитных работ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second */}
        <section className="mt-[300px]">
          <div className="container">
            <div className="grid grid-cols-[490px_1fr]">
              <div>
                <div className="relative h-[680px] ">
                  <Image
                    src={SecondJpg}
                    alt="text"
                    fill
                    className="object-cover block"
                  />
                </div>
                <p className="mt-3">В первый день начала монолитных работ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Third */}
        <section className="mt-24">
          <div className="container">
            <div className="grid grid-cols-[1fr_980px]">
              <div></div>
              <div>
                <div>
                  <div className="relative h-[680px] ">
                    <Image
                      src={SecondJpg}
                      alt="text"
                      fill
                      className="object-cover block"
                    />
                  </div>
                  <p className="mt-3">В первый день начала монолитных работ</p>
                </div>

                <p className="mt-[120px] text-[40px] leading-[52px]">
                  У нас хорошие новости! Открытие строительства и продаж Жк
                  Достояние. Уютный жилой комплекс по ул. Апанасенковской,
                  практически в центре города Ставрополь. Просторные планировки,
                  яркий фасад, качество строительства - вот главные особенности
                  нового дома. Более подробно - в наших отедалх продаж. Ждем вас
                  в гости.
                </p>

                <div className="mt-[270px]">
                  <div className="relative h-[680px] ">
                    <Image
                      src={SecondJpg}
                      alt="text"
                      fill
                      className="object-cover block"
                    />
                  </div>
                  {false && (
                    <p className="mt-3">
                      В первый день начала монолитных работ
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second */}
        <section className="mt-[300px]">
          <div className="container">
            <div className="grid grid-cols-[490px_1fr]">
              <div>
                <div className="relative h-[680px] ">
                  <Image
                    src={SecondJpg}
                    alt="text"
                    fill
                    className="object-cover block"
                  />
                </div>
                <p className="mt-3">В первый день начала монолитных работ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Third */}
        <section className="mt-24">
          <div className="container">
            <div className="grid grid-cols-[1fr_980px]">
              <div></div>
              <div>
                <p className="mt-[120px] text-[40px] leading-[52px]">
                  У нас хорошие новости! Открытие строительства и продаж Жк
                  Достояние. Уютный жилой комплекс по ул. Апанасенковской,
                  практически в центре города Ставрополь. Просторные планировки,
                  яркий фасад, качество строительства - вот главные особенности
                  нового дома. Более подробно - в наших отедалх продаж. Ждем вас
                  в гости.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CallbackForm />
      </MainLayout>
    </>
  );
}
