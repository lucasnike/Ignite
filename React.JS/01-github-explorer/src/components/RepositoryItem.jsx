export function RepositoryItem(props) {

  return (
    <li>
      <strong>{props.repository.name}</strong>

      <p>{props.repository.description || 'App web'}</p>

      <a href={props.repository.html_url} target='_blank' >
        Acessar repositório
      </a>
    </li>
  );
}