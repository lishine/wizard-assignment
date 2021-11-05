import { h, ComponentChildren } from 'preact'

export type WithChildren<T = Record<string, unknown>> = T & { children?: ComponentChildren }
export type WithRequiredChildren<T = Record<string, unknown>> = T & { children: ComponentChildren }
export type WithStyle<T = Record<string, unknown>> = T & { style?: h.JSX.CSSProperties }
export type WithClass<T = Record<string, unknown>> = T & { class?: string }
