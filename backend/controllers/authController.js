const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = []; // Mock database (replace with actual DB logic)

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// User Login
const login = (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Find user by email
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check password
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate token
  const token = generateToken(user);
  res.status(200).json({ message: 'Login successful', token, user });
};

// User Registration
const register = (req, res) => {
  const { email, password, role } = req.body;

  // Validate input
  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Email, password, and role are required' });
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create new user
  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword,
    role, // 'patient' or 'doctor'
  };
  users.push(newUser);

  // Generate token
  const token = generateToken(newUser);
  res.status(201).json({ message: 'Registration successful', token, user: newUser });
};

// User Logout
const logout = (req, res) => {
  // Invalidate the token (optional, depending on your implementation)
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
  login,
  register,
  logout,
};
