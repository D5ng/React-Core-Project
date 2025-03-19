export type Type = keyof HTMLElementTagNameMap

export type Props = Record<string, any> | null

export type VNode = string | number | null | undefined | VDOM

export interface VDOM {
  type: Type
  props: Record<string, any>
  children: VNode[]
}
