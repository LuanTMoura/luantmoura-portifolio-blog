import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@components/navigation";
import Head from "next/head";
import styles from "@components/pagestyles/projects.module.css";
import Image from "next/image";

// URL da API
const API_URL = "https://api.github.com/users/LuanTMoura/repos?per_page=100";

export default function Projects() {
  // ## Estados

  // Armazena a lista de repositórios
  const [repos, setRepos] = useState([]);

  // Armazena a página atual
  const [currentPage, setCurrentPage] = useState(1);

  // Número de repositórios por página
  const [perPage, setPerPage] = useState(10);

  // Armazena o número total de páginas
  const [totalPages, setTotalPages] = useState(0);

  // ## Efeito para buscar repositórios

  // Busca os repositórios da API do GitHub quando o componente é montado
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter((repo: { description: any; }) => repo.description));
        setTotalPages(Math.ceil(data.filter((repo: { description: any; }) => repo.description).length / perPage));
      });
  }, []);

  // ## Função para trocar página

  // Altera a página atual
  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  // ## Renderização da paginação

  // Cria a navegação entre as páginas
  const renderPagination = () => {
    return (
      <ul className={styles.pagination}>
        <li>
          <Link href={`/projects?page=${currentPage - 1}`}>
            &lt;
          </Link>
        </li>
        <li>
          <Link href={`/projects?page=${currentPage + 1}`}>
            &gt;
          </Link>
        </li>
      </ul>
    );
  };

  // ## Renderização dos repositórios

  // Mostra os repositórios da página atual
  const renderRepos = () => {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    return repos.slice(start, end).map((repo) => (
      <li key={repo.name} className={styles.repoItem}>
        <h3 className={styles.title}>
          <Link href={repo.html_url}>{repo.name}</Link>
        </h3>
        <div className={styles.descriptionBox}>{repo.description}</div>
      </li>
    ));
  };

  // ## Retorno da página

  // Renderiza a página completa com cabeçalho, navegação, repositórios e paginação
  return (
    <>
      {/* ## Cabeçalho */}
      <Head>
        <title>Luan Tobias - Projects</title>
      </Head>
      {/* ## Navegação */}
      <Navigation />
      <div>
        <Image
          width={480}
          height={220}
          src="/imgs/repositories.png"
          alt="Imagem de repositórios"
        />
      </div>
      {/* ## Seção de repositórios */}
      {repos.length === 0 && (
        <div className={styles.loading}>
          <div className={styles.loadingOverlay} />
          <div className={styles.loadingContent}>
            <div className={styles.spinner}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <p>Carregando repositórios...</p>
          </div>
        </div>
      )}
      {repos.length > 0 && (
        <>
          <ul className={styles.ul}>{renderRepos()}</ul>
          {renderPagination()}
        </>
      )}
    </>
  );
};
