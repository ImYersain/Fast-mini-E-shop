export interface IItem {
    id: number,
    title: string,
    img: string,
    desc: string,
    category: string,
    price: string,
    finalPrice: number,
    count: number
}

export interface ICategory {
    key: string,
    name: string
}