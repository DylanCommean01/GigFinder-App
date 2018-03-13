import * as baseService from './base';

async function insert(data) {
    return baseService.post('/api/message', data);
}

export { insert };