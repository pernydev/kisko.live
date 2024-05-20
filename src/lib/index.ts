// place files you want to import through the `$lib` alias in this folder.

import { writable } from "svelte/store";

export const nerdmode = writable(false);

export function formatStrDate(dateStr: string | undefined, seconds: boolean = false) {
    if (!dateStr) {
        return "";
    }

    const date = new Date(dateStr);
    return formatDate(date, seconds);
}

export function formatTimeNumber(time: number) {
    return time < 10 ? "0" + time : time.toString();
}

function formatTime(date: Date, seconds: boolean) {
    return `${formatTimeNumber(date.getHours())}:${formatTimeNumber(date.getMinutes())}${seconds ? ":" + formatTimeNumber(date.getSeconds()) : ""}`
}

export function formatDate(date: Date, seconds: boolean) {
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
        return formatTime(date, seconds);
    }

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${formatTime(date, seconds)}`;
}

