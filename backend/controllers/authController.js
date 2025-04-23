const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123' // In production, use environment variables and hashed passwords
};

const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
        success: true,
        user: {
            id: 1,
            username: ADMIN_CREDENTIALS.username
        }
    });
};


module.exports = {
    loginAdmin
    
};