import React from 'react';
import Image from 'next/image'

function ProductBanner({product,loader}) {
    return (
        <div>
            <Image src={product?.attributes?.coverImg?.data?.attributes?.url}
                   alt={'product title'}
                    width={400} height={400}
                   className={`rounded-lg h-[20rem]`}
            />
        </div>
    );
}

export default ProductBanner;