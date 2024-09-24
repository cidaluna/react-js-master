import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import styles from './Post.module.css';

const Post = () => {
    const {id} = useParams();
    const {document: post, loading} = useFetchDocument("posts", id);

    console.log("Log Post: ",post);
  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.body}</p>
            <h3>Este post trata sobre:</h3>
            <div className={styles.tags}>
              {post.tagsArray && post.tagsArray.length > 0 && (
                post.tagsArray.map((tag) => (
                  <p key={tag}>
                    <span>#</span>
                    {tag}
                  </p>
                ))
              )}
            </div>
        </>
      )}
    </div>
  );
};

// Definindo as validações de props
Post.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    tagsArray: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired,
  }),
};

export default Post;
