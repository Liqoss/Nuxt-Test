export interface Products {
    id: number | string,
    title: string,
    image: string,
    price: string | number,
    rating : {
        rate: number
    }
}

export interface ProductCart {
    data: Products,
    quantity: number
}
