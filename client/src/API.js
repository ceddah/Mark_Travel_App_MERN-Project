const API_URL = 'http://localhost:1337';

export async function listLogEntries() {
    const resp = await fetch(API_URL + '/api/logs');
    return resp.json()
}