class ProductManager {
    static IdProduct =0;

    constructor () {
        this.products= []; 
    }

    addProduct(title,description,price,thumbnail,code,stock){
        const CodeDuplicado = this.products.find(item => item.code == code)
        if (CodeDuplicado){
            console.error(`El Código : ${code}, ya se encuentra registrado. Verifique`)
            return
        }
        
        ProductManager.IdProduct++;

        const productNew={
            id: ProductManager.IdProduct,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        } ;

        let valores = Object.values(productNew)
        let validarValores = valores.filter(i => i !== undefined)
        if(validarValores.length < 7){
            console.error('Falta ingresar valores al producto')
            return
        }

        this.products.push(productNew);
        console.log(productNew);
    }

    getProducts(){ 
        console.log(this.products); 
        return this.products;     
    }
    getProductById(idProduct){
        const idExiste = this.products.find(p => p.id===idProduct)
        if (!idExiste){
            console.error ("El Producto no se Encuentra");
            return;
        }
        console.log(idExiste);
        return idExiste;
    }
}

