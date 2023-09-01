export type Task = {
    id?: number
    title: string;
    description: string;
    date?: string[];
    date_start: string | null;
    date_end: string | null;
    date_time?: string | null;
    checked: boolean;

}
export type Pages = {
    [key: number]: string;
}