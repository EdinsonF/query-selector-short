# $Q and $Qll

This package simplifies the usage of `document.querySelector()` and `document.querySelectorAll()`. Now you can simply use `$Q("one-selector")` or `$Qll("all-selector")`, which will save you time and make your code look much cleaner.

## Installation

To install this package, you can use NPM:
```javascript
  npm i query-selector-short
```

## Usage

To use this package, follow the example below:

```javascript
import { $Qll, $Q } from 'query-selector-short';

// Select a single node from the DOM
const node = $Q('.my-selector');

// Select all nodes from the DOM that match the class "my-selector"
const nodes = $Qll('.my-selector');
```

API
This package provides two methods to select nodes in the DOM:

$Qll(nodes, parent)
Selects all nodes in the DOM that match the specified selector.

nodes (String): Class or ID of the element to select.
parent (HTMLElement) (optional): Parent of the nodes to select. Defaults to document.
Returns an array of nodes in the DOM.

$Q(node, parent)
Selects a single node from the DOM that matches the specified selector.

node (String): Class or ID of the element to select.
parent (HTMLElement) (optional): Parent of the node to select. Defaults to document.
Returns the node in the DOM.