const Pagination = ({ pages, curPage }) => {
  const fivePages = Array.from({ length: 5 });
  return (
    <div>
      {fivePages.map((page, i) => {
        return <button key={i}>{i + curPage}</button>;
      })}
    </div>
  );
};

export default Pagination;
