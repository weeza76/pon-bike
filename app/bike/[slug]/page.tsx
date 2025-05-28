import React from 'react'

type ProductPageProps = {
    params: Promise<{ slug: string }>
}

const ProductPage = ({params}: ProductPageProps) => {
    const {slug} = React.use(params)

    const product = {
        name: slug,
        description: 'test description',
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>Inhalt 1</div>

            <div>Inhalt 2</div>
        </div>
    )
}

export default ProductPage
