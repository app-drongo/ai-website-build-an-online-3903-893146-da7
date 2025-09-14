import ProductCatalogPageheader from '@/components/sections/ProductCatalogPageheader'
import ProductCatalogProductgrid from '@/components/sections/ProductCatalogProductgrid'
import ProductCatalogFeatures from '@/components/sections/ProductCatalogFeatures'
import ProductCatalogGallery from '@/components/sections/ProductCatalogGallery'

export default function ProductCatalogPage() {
  return (
    <>
      <ProductCatalogPageheader />
      <ProductCatalogProductgrid />
      <ProductCatalogFeatures />
      <ProductCatalogGallery />
    </>
  )
}