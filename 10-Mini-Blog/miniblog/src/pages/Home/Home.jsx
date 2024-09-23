import PostDetail from '../../components/PostDetail';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styles from './Home.module.css';

// hooks
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...' />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        <h1>Posts...</h1>
        {loading && <p>Carregando... </p>}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))
        }
        {posts && posts.length === 0 && (
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
