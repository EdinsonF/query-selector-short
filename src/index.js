/**
 * Select all the nodes of the dom. you can indicate which one is the parent, otherwise it will be from the document
 * @param {String} nodes - ClassList with DOM reference
 * @param {HTMLElement} parent - Parent of nodes
 * @returns {Array} Array of nodes in DOM
 */
const $Qll = (
  nodes,
  parent) => [...(parent || document).querySelectorAll(nodes)]

/**
 * Select one only node of the dom. you can indicate which one is the parent, otherwise it will be from the document
 * @param {HTMLElement} node - ClassName with DOM reference
 * @param {HTMLElement} parent - Parent of nodes
 * @returns {Node} Node in DOM
 */
const $Q = (node, parent) => (parent || document).querySelector(node)

module.exports = {
  $Qll,
  $Q,
}
