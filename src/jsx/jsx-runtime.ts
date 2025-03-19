import type { Type, VNode, Props } from "./jsx-runtime.type"
import { isNullOrUndefined, isTextNode } from "./jsx-runtime.util"

/* h => HyperScript */
function h(type: Type, props: Props = null, ...children: VNode[]) {
  return { type, props: props ?? {}, children: children.flat() }
}

function createElement(node: VNode) {
  if (isNullOrUndefined(node)) {
    return document.createDocumentFragment()
  }

  if (isTextNode(node)) {
    return document.createTextNode(String(node))
  }

  /* VDOM */
  const element = document.createElement(node.type)

  node.children.map(createElement).forEach((childrenElement) => element.appendChild(childrenElement))

  return element
}

// h("div", { className: "on" }, "HelloWorld")

// h(
//   "section",
//   null,
//   h(
//     "div",
//     null, //
//     h(
//       "div",
//       null, //
//       h("div", null, "zz") //
//     )
//   )
// )
