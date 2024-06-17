# React + Woocommerce REST API (products)

Get products list from website by Woocommerce REST API.

## Development

Create `.env.local` file with three variables:

```
VITE_APP_API_USERNAME="<YOUR_REST_API_USERNAME>"
VITE_APP_API_PASSWORD="<YOUR_REST_API_PASSWORD>"
VITE_APP_API_URL="https://<YOUR_WEBSITE>/wp-json/wc/v3/products?per_page=100&status=publish&stock_status=instock&sort=menu_order&page="
```

To obtain API credentials check this: [Generating Keys](https://developer.woocommerce.com/docs/getting-started-with-the-woocommerce-rest-api/#3-generate-keys)

VITE_APP_API_URL must have `&per_page=` query if you want pagination. The last query patameter MUST BE `&page=` in this case.