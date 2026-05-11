export interface UserProfile {
    id: string;
    login: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    position: string | null;
    about: string | null;
    avatarUrl: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface UserProfileRequest {
    email?: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    about?: string;
    avatarUrl?: string;
}
