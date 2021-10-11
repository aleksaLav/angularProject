export interface Course{
    id:number
    nameCourse:string
    category:Category
    price:number
    description:string
    image:Image

}
export interface APIResponse<T>{
    [x: string]: any;
    result:Array<T> 
}
interface Image{
    imagePath:string
    imageAlt:string
}

interface Category{
    id:number
    name:string
}
