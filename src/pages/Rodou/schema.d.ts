export const SITE: string;
export const PLAY_URL: string;
export function pageUrl(lang: string): string;
export function playUrl(hl: string): string;
export function ogImage(lang: string): string;
export function screenshot(lang: string, n: number): string;
export function buildSchemas(lang: string, t: any): object[];
