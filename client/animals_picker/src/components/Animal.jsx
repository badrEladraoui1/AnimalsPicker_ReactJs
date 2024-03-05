/* eslint-disable react/prop-types */
const Animal = ({ name, imgSrc, imgAlt }) => {
  return (
    <article>
      <h1>{name}</h1>
      <img src={`http://localhost:3000/${imgSrc}`} alt={imgAlt} />
    </article>
  );
};

export default Animal;
