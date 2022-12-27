import { GetServerSideProps } from "next";
import Head from "next/head";
import { ISkill } from "../../types";

interface IProps {
  stack: ISkill[];
}

export default function Stack({ stack }: IProps) {
  return (
    <>
      <Head>
        <title>Стек | Демидовец Николай</title>
        <meta
          name="description"
          content="Стек технологий и библиотек Николая Демидовца"
        />
      </Head>
      <main>
        <p>Стек технологий</p>
        {stack.map((skill) => (
          <div key={skill.label}>
            - {skill.label}
            {`${skill.staples ? " (" + skill.staples + ")" : ""}`}
            {`${skill.description ? " - " + skill.description : ""}`}
          </div>
        ))}
      </main>
    </>
  );
}

export const getServerSideProps = (context: GetServerSideProps) => {
  const stack: ISkill[] = [
    {
      label: "Next.js",
      staples: "React.js",
      description: "",
    },
    {
      label: "TypeScript",
      staples: "",
      description: "",
    },
    {
      label: "Авторизация",
      staples: "JWT",
      description: "",
    },
    {
      label: "Тестирование",
      staples: "Jest, react-testting-library",
      description: "",
    },
    {
      label: "Вебсокеты",
      staples: "",
      description: "",
    },
    {
      label: "Docker",
      staples: "Docker-Compose",
      description: "",
    },
    {
      label: "Redux",
      staples: "RTK",
      description: "",
    },
    {
      label: "React Query",
      staples: "",
      description: "",
    },
    {
      label: "ESLint",
      staples: "",
      description: "",
    },
    {
      label: "React hook form",
      staples: "c Yup",
      description: "",
    },
    {
      label: "SCSS",
      staples: "CSS modules",
      description: "",
    },
    {
      label: "Nest.js",
      staples: "Node.js",
      description: "серверная часть",
    },
    {
      label: "MongoDB",
      staples: "Mongoose",
      description: "серверная часть",
    },
  ];

  return {
    props: { stack },
  };
};
