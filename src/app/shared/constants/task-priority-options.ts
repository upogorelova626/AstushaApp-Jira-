export enum ProjectPriority {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH',
    Critical = 'CRITICAL'
}

export interface ProjectPriorityOption {
    readonly label: string;
    readonly value: ProjectPriority;
}

export const PROJECT_PRIORITY_OPTIONS: readonly ProjectPriorityOption[] = [
    {label: 'Низкий', value: ProjectPriority.Low},
    {label: 'Средний', value: ProjectPriority.Medium},
    {label: 'Высокий', value: ProjectPriority.High},
    {label: 'Критический', value: ProjectPriority.Critical}
];
