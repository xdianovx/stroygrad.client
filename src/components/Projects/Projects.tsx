import { LinkCircle, Title } from "../../ui";
import s from "./Projects.module.scss";

export const Projects = () => {
  const projectTitle = "Наши\nпроекты";
  return (
    <section className={s.section}>
      <div className="container">
        <div className="flex items-end">
          <Title tag="lg">{projectTitle}</Title>
          <LinkCircle link="/projects" className="ml-auto">Все проекты</LinkCircle>
        </div>
      </div>
    </section>
  );
};
