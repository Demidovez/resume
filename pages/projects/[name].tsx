import { GetServerSideProps, GetStaticProps } from "next";

interface IProps {
  name: string;
}

export default function Project({ name }: IProps) {
  return <div>{name}</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      name: params?.name,
    },
  };
};
