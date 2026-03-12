import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Please login again.' });
        }

        const token = authHeader.split(' ')[1];
        
        // Verify token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET || 'secret123');
        
        // Attach user ID to the request object
        req.body = req.body || {};
        req.body.userId = tokenDecode.id; 
        
        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error);
        res.status(401).json({ success: false, message: 'Invalid or Expired Token' });
    }
};

export default authUser;
