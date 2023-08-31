export type Task = {
    title: string;
    description: string;
    date?: string[];
    date_start: string | null;
    date_end: string | null;
    date_time?: string | null;
}