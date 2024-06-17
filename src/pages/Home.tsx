import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchProductsData from "../lib/fetchProducts";
import ProductsList from "../components/ProductsList";
import Search from "../components/Search";
import { useMemo, useState } from "react";

function Home() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isPending, isError, error, isFetching,
    isPlaceholderData } = useQuery({
      queryKey: ['products', page],
      queryFn: () => fetchProductsData(page),
      placeholderData: keepPreviousData
    });

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = useMemo(() => {
    if (!data) return null;
    
    return data.products.filter((p: Product) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [data, searchQuery]);

  return (
    <>
      <h1>Товари</h1>
      {isPending ? (
        <div>Завантаження...</div>
      ) : isError ? (
        <div>Something went wrong, try later, please!..
          <br />{error.message}
        </div>
      ) : (
        <div>
          {filteredProducts && filteredProducts.length ? (
            <>
              <Search query={searchQuery} onChange={handleSearchQuery} />
              <ProductsList products={filteredProducts} />
            </>
          ) : (
            <>не знайдено</>
          )}
        </div>
      )}
      {filteredProducts && (filteredProducts.length / 100) > 0 ? (
      <div className="pagination">
        <span>Сторінка: {page}</span>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          назад
        </button>{' '}
        <button
          onClick={() => {
            if (!isPlaceholderData && data?.hasMore) {
              setPage((old) => old + 1)
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPlaceholderData || !data?.hasMore}
        >
          вперед
        </button>
      </div>
      ) : null}
      {isFetching ? <div>Оновлюю дані...</div> : null}
    </>
  )
}

export default Home;
