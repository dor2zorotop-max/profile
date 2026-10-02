import type { Locale } from './site';
type Experience = {period:string;title:string;organization:string;description?:string};
export const experience: Record<Locale, Experience[]> = {zh: [], en: []};
