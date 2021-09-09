//apiden gelen verileri sınırlandırmak için interface kullandık.
export interface Product {
    productId: number;
    categoryId: number;
    productName: string;
    unitsInStock: number;
    unitPrice: number;
}