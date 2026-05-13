export type ProjectPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type ProjectStatus = 'PLANNING' | 'IN_PROGRESS' | 'DONE' | 'ARCHIVED';

export type ProjectMemberRole = 'OWNER' | 'ADMIN' | 'MEMBER';

export interface CreateProjectRequest {
    title: string;
    description?: string;
    priority?: ProjectPriority;
    deadline: string;
    memberIds?: string[];
}

export interface ProjectUser {
    id: string;
    login: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
}

export interface ProjectMember {
    id: string;
    projectId: string;
    userId: string;
    role: ProjectMemberRole;
    createdAt: string;
    user: ProjectUser;
}

export interface ProjectResponse {
    id: string;
    title: string;
    description: string | null;
    status: ProjectStatus;
    priority: ProjectPriority;
    deadline: string | null;
    creatorId: string;
    createdAt: string;
    updatedAt: string;
    members: ProjectMember[];
    tasks: unknown[];
}
