export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}

export interface SuccessResponse {
    success: boolean;
}
