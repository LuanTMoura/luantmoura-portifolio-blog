import Head from "next/head";
import Link from "next/link";
import Header from "@components/header";
import Navigation from "@components/navigation";

import { getPostList } from "@shared/util"; // Assumindo que getPostList existe em um utilitário compartilhado
import { InferGetStaticPropsType } from "next";
import { Key } from "react";
import styles from '@components/pagestyles/home.module.css';


type PostList = string[];

// Componente Home que recebe a lista de posts como prop
function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Luan Tobias - Home</title>
      </Head>
      <main>
        <Navigation /> {/* Renderiza a navegação do site */}
        <img className={styles.imgconfig}
          width={styles.imgconfig}
          height={styles.imgconfig}
          src="/imgs/home.png"
          alt="Imagem da home"
        />

        {/* Renderiza a lista de posts se houver posts disponíveis */}
        {posts.length > 0 && (
          <ul className={styles.ul}>
            {posts.map((slug) => (
              <li key={slug} className={styles.postItem}>
                <Link href={`post/${slug}`} className={styles.postLink}>
                  <h3 className={styles.postTitle}>{slug.replace(/-/g, " ")}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

// Função exportada para busca prévia dos dados (Static Site Generation)
export const getStaticProps = async () => {
  const posts: PostList = getPostList();
  return {
    props: { posts },
  };
};

export default Home;
