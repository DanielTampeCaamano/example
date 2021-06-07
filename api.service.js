import axios from 'axios';

class ApiService {
    constructor(route) {
        this.resource = axios.create({
            baseURL: 'http://localhost:3000/'
        })
        this.route = route
    }

    all() {
        return this.resource.get(this.route)
    }

    getById(id) {
        return this.resource.get(`${this.route}/${id}`)
    }

    save(payload) {
        return this.resource.post(this.route, payload)
    }

    update(id, payload) {
        return this.resource.put(`${this.route}/${id}`, payload)
    }

    destroy(id) {
        return this.resource.delete(`${this.route}/${id}`)
    }
}

export default ApiService