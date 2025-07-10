// Import required dependencies
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create axios instance with custom base URL
const instance = axios.create({
    baseURL : 'https://2eb7-2409-40c2-110-bf59-3c5b-4391-66f-3199.ngrok-free.app '
})

// Add request interceptor to handle authentication
instance.interceptors.request.use(
    async (config) => {
        // Get authentication token from storage
        const token = await AsyncStorage.getItem('token');
        // If token exists, add it to request headers
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    // Handle any errors in the interceptor
    (err) => {
        return Promise.reject(err);
    }
)

// Export the configured axios instance
export default instance;

/*
This is a reusable API configuration setup that can be used in different applications:

1. Authentication System:
   - Can be used in any app requiring token-based auth (e.g. social media, e-commerce)
   - Just change the baseURL to your auth server endpoint
   - Token handling logic remains the same

2. E-commerce Platform:
   - Use for product APIs, order management, cart operations
   - Add additional interceptors for handling shopping cart tokens
   
3. Content Management System:
   - Perfect for CMS admin panels requiring authenticated API calls
   - Can add role-based auth headers in the interceptor

4. Mobile Banking:
   - Secure API calls with token authentication
   - Add additional security headers in interceptor

5. Social Network:
   - Handle user authentication for social features
   - Add social tokens and user context in headers
*/