import { writable } from 'svelte/store';

export type Pane = 'content' | 'style' | 'preview';

export const pane = writable<Pane>('content');
