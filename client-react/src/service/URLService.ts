import api from '../http-common';
import URL from '../model/URL';

class URLService {
    create(url: URL) {
        return api.post('/url', url);
    }

    getURLById(id: string) {
        return api.get(`/url/${id}`);
    }

    deleteUrl(id: string) {
        return api.delete(`/url/${id}`);
    }

    updateUrl(id: string, url: URL) {
        return api.put(`/url/${id}`, url);
    }
}

export default new URLService();