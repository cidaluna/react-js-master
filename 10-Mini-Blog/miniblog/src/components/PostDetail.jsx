import PropTypes from "prop-types"; // Importando PropTypes
import { Link } from "react-router-dom";
import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  console.log("Log PostDetail: ",post);
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
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
      <Link to={`/posts/${post.id}`} className="btn btn-outline-ler">
        Ler
      </Link>
    </div>
  );
};

// Definindo as validações de props
PostDetail.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    tagsArray: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired,
  }).isRequired,
};


export default PostDetail;