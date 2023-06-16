// let us create a class in models we create the models or logic of the backend
// in this we are storing the products

const product=[]
module.exports=class Products{   //this is a class

constructor(t){              //constructor 
    this.title=t
}
save(){                             //methods
    product.push()
}
static fetchdata(){
    return product
}

}