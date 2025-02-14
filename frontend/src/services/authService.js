// Simulated authentication service (replace with backend or blockchain logic as needed)
const authService = {
    login: async (role) => {
      // Simulate a login process (replace this with actual logic)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (role === 'patient' || role === 'doctor') {
            resolve({
              success: true,
              role: role,
              message: `Logged in as ${role}`,
            });
          } else {
            reject({
              success: false,
              message: 'Invalid role. Please select "patient" or "doctor".',
            });
          }
        }, 1000); // Simulate a delay
      });
    },
  
    logout: async () => {
      // Simulate a logout process (clear local storage, etc.)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Successfully logged out',
          });
        }, 500); // Simulate a delay
      });
    },
  
    checkAuth: () => {
      // Check if user is authenticated (from localStorage or backend)
      const authData = JSON.parse(localStorage.getItem('auth'));
      if (authData && authData.isAuthenticated) {
        return {
          isAuthenticated: true,
          userRole: authData.userRole,
        };
      }
      return {
        isAuthenticated: false,
        userRole: null,
      };
    },
  };
  
  export default authService;
  