import { getDependency } from '../dependency.js';

export default async function checkAuthorizationTokenMiddleware(req, res, next) {
    const authHeadeer = req.headers['authorization'];
    if (authHeadeer) {
        const schema = authHeadeer.split(' ')[0];
        const token = authHeadeer.split(' ')[1];

        if (schema.toLowerCase() !== 'bearer') 
            throw new Error('Invalid authorization schema');

        if (!token)
            throw new Error('Missing authorization token');

        const sessionService = getDependency('sessionService');
        const session = await sessionService.getByToken(token);
        if (!session)
            throw new Error('Invalid authorization token');
        
        req.session = session;

        console.log(session);
    }

    next();
}