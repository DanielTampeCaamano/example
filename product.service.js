import Api from './api.service';

// al extender de Api, nuestra clase Product recibe todas sus propiedades y metodos
class ProductService extends Api {
    // Métodos personalizados aquí
    // all () {
    //   this.axios.get('products')
    // }
    // getById (id) {
    //   this.axios.get(`products/${id}`)
    // }
    // save (payload) {
    //   this.axios.post('products', payload)
    // }
    // update (id, payload) {
    //   this.axios.get(`products/${id}`, payload)
    // }
    // destroy (id) {
    //   this.axios.delete(`products/${id}`)
    // }
}

export default new ProductService('products');