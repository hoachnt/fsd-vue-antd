export interface Task {
    id?: number
    title: string;
    description: string;
    date?: string[];
    date_start: string | null;
    date_end: string | null;
    date_time?: string | null;
    checked: boolean;
}
export interface TaskCardItem extends Task {
    // Переопределите только те поля, которые вам нужно изменить
    date_start: string;
    date_end: string;
    date_time: string;
}
export type Pages = {
    [key: number]: string;
}
export interface RouteTransition {
    transition: string
}