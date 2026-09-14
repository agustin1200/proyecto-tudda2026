import { getDependency } from '../dependency.js';

export class SessionService {
    constructor() {
        this.sessionRepo = getDependency('sessionRepo');
    }

    createToken() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    async createForUser(user) {
        var authorizationToken;
        do {
            authorizationToken = this.createToken();
        } while (await this.getByToken(authorizationToken));

        const session = {
            username: user.username,
            authorizationToken: authorizationToken,
            open: new Date().toISOString(),
            role: user.roles[0]
        };

        return await this.sessionRepo.create(session);
    }

    async getByToken(token) {
        return await this.sessionRepo.findOne({ authorizationToken: token });
    }
}