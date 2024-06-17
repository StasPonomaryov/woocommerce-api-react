const fetchProductsData = async (page: number): Promise<PaginatedProducts> => {
  const username = import.meta.env.VITE_APP_API_USERNAME;
  const password = import.meta.env.VITE_APP_API_PASSWORD;
  const url = import.meta.env.VITE_APP_API_URL;
  const authString = `${username}:${password}`;
  const headers = new Headers();

  headers.set('Authorization', 'Basic ' + btoa(authString));

  const response = await fetch(url + page, { method: 'GET', headers: headers });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const totalProducts = response.headers.get('X-WP-Total');
  const products = await response.json();
  let hasMore = true;
  if (totalProducts) {
    hasMore = (page * 100) < Number(totalProducts);
  }
  
  return {
    products,
    hasMore
  }
};

export default fetchProductsData;
