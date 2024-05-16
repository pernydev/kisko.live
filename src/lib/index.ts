// place files you want to import through the `$lib` alias in this folder.

import { writable } from "svelte/store";

export const nerdmode = writable(false);

export function formatStrDate(dateStr: string | undefined) {
    if (!dateStr) {
        return "";
    }

    const date = new Date(dateStr);
    return formatDate(date);
}

export function formatTimeNumber(time: number) {
    return time < 10 ? "0" + time : time.toString();
}

export function formatDate(date: Date) {
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
        return `${formatTimeNumber(date.getHours())}:${formatTimeNumber(date.getMinutes())}`
    }

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}

