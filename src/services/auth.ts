export interface User {
    id: string;
    email: string;
    name: string;
    role: string; // Added role field
}

export class AuthService {
    private static instance: AuthService;
    private currentUser: User | null = null;

    static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    async login(email: string, password: string): Promise<User> {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email === 'test@example.com' && password === 'password') {
            this.currentUser = {
                id: '1',
                email,
                name: 'Test User'
            };
            return this.currentUser;
        }

        throw new Error('Invalid credentials');
    }

    async logout(): Promise<void> {
        this.currentUser = null;
    }

    getCurrentUser(): User | null {
        return this.currentUser;
    }

    isAuthenticated(): boolean {
        return this.currentUser !== null;
    }

    hasRole(role: string): boolean {
        return this.currentUser?.role === role;
    }
} 