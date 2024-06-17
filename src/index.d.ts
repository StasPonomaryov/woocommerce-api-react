type Product = {
  id: number
  name: string
  images: {
    src: string
  }[]
}

type PaginatedProducts = {
  products: Product[]
  hasMore?: boolean
}