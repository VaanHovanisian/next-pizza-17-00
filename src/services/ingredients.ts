
import { ApiRoutes } from "./constans"
import { axsiosInstance } from "./instences"

export const getIngredients = async () =>{
    return (await axsiosInstance.get(ApiRoutes.INGREDIENTS)).data
}