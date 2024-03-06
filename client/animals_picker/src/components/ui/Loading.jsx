/* eslint-disable react/prop-types */
const Loading = ({ message }) => {
  return (
    <section className="w-1/2 flex items-center gap-2 justify-center">
      <h1 className="text-2xl font-bold">{message}</h1>
      <span className="loading loading-spinner text-neutral"></span>
    </section>
  );
};

export default Loading;
