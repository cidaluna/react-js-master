import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../contexts/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import styles from './EditPost.module.css';

const EditPost = () => {
  // pegar os parâmetros da URL
  const {id} = useParams();
  const {document:post} = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]); // Mantém como string
  const [formError, setFormError] = useState("");

  // fill form data
  useEffect(()=> {
    if(post){
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response} = useUpdateDocument("posts"); // passando o nome da colection do banco
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(""); // zerar erros do formulário

    // validar a url da imagem
    try{
      new URL(image);
    }catch(error){
      setFormError("A imagem precisa ser uma URL.", error);
      return;
    }

    // criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    console.log(user);
    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tagsArray,
    });

    const data = {
      title, image, body, tagsArray
    };

    updateDocument(id, data);

    // redirect to home page
    navigate("/dashboard");
    console.log("Log EditPost: ",post);

  };
  
  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h1>Bora editar o post ?</h1>
          <h3>Editando post: {post.title}</h3>
          <p>Altere o que deseja e compartilhe o seu conhecimento.</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título: </span>
              <input type="text" name="title" required 
              placeholder="Pense num bom título... "
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              />
            </label>
            <label>
              <span>URL da imagem: </span>
              <input type="text" name="image" required 
              placeholder="Insira uma imagem que represente o seu post "
              onChange={(e) => setImage(e.target.value)}
              value={image}
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem atual: </p>
            <img className={styles.image_preview} src={post.image} alt={post.title} />
            <label>
              <span>Conteúdo: </span>
              <textarea name="body" required placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              ></textarea>
            </label>
            <label>
              <span>Tags: </span>
              <input type="text" name="tags" required 
              placeholder="Insira as tags separadas por vírgula "
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              />
            </label>
            
            {!response.loading && <button className="btn">Salvar</button>}
            {response.loading && <button className="btn" disabled>Aguarde...</button>}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
            
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
