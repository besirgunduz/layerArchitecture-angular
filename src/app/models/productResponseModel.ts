import { Product } from "./product";
import { ResponseModel } from "./responseModel";

//apiden gelen datanın modellenmesi
export interface ProductResponseModel extends ResponseModel{
    data:Product[],
}