export interface RegisterRequest {
    login: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthUser {
    id: string;
    login: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
}

export interface AuthResponse {
    user: AuthUser;
}

export interface MeResponse {
    id: string;
    login: string;
}

export interface LogoutResponse {
    success: boolean;
}
