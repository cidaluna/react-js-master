import PostDetail from '../../components/PostDetail';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styles from './Home.module.css';

// hooks
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // nao recarregar a página

    if(query){
      return navigate(`/search?q=${query}`);
    }
    console.log("Log Home: ",posts);

  };
  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Ou busque por tags...'
            onChange={(e) => setQuery(e.target.value)}
            />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        <h1>Posts...</h1>
        {loading && <p>Carregando... </p>}
        {!loading && posts && posts.length > 0 ? (
          posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))
        ) : (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">Criar primeiro post!</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
