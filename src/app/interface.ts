export interface simlifiedproduct {
    _id : "string",
    imageUrl:"string",
    price:"string",
    slug:"string",
    categoryName:"string"
    name:"string",


};

export interface fullproduct {
    length: number
    _id : "string",
    images:any,
    price:number,
    slug:"string",
    categoryName:"string"
    name:"string",
    description:"string",
    price_id:"string"
}

interface PageProps {
    params: {
      category: string;
    };
  }