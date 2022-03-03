import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";
import { api } from "../services/axios";

export function RepositoryList() {

  const [repositoryList, setRepositoryList] = useState([])

  useEffect(() => {
    api.get('lucasnike/repos').then(result => {
      setRepositoryList(result.data)
    })

    fetch('https://api.github.com/users/lucasnike/repos')
      .then(response => response.json())
      .then(repositories => console.info(repositories))
  }, [])

  return (
    <section className='repository-list'>

      <h1>Lista de repositórios</h1>

      <ul id='repository-list'>

        {repositoryList.map((repository) => {
          return <RepositoryItem
            repository={repository}
            key={repository.full_name}
          />
        })}


      </ul>
    </section>
  );
}