
const Fragment = ({propFrag}) => {
  return (
    <>  {/* Tags vazias representam o uso do fragment, o h2,h3 e h4 
            serão renderizados sem usar um elemento wrapper, simplificando o DOM.
        */}
      <h2>Primeiro título</h2>
      <h3>Segundo título</h3>
      <h4>{propFrag}</h4>
    </>
  )
}

export default Fragment
