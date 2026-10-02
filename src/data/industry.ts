import type { Locale } from './site';
export type IndustryItem = { title: string; company: string; industry: string; period: string; role: string; summary: string; responsibilities: string[]; technologies: string[]; status: string; images: string[]; video: string; links: string[]; confidential: boolean };
export const industry: Record<Locale, IndustryItem[]> = { zh: [], en: [] };
