
const Challenge4UserDetails = ({myList}) => {
  return (
    <>
      <ul>
        {myList.map((person) => (
          <li key={person.id}>
            {person.nome}, possui o id {person.id}, tem {person.idade} anos e atua como {person.profissao},
            sobre a carteira de habilitação: {person.idade >= 18 ? ('já pode tirar CNH!!!') : ('ainda não pode tirar CNH.')}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Challenge4UserDetails
