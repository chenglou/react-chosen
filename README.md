[React](http://facebook.github.io/react/) wrapper for [Chosen](http://harvesthq.github.io/chosen/) jQuery

**install**

```sh
bower install react-chosen
```

Or simply drop the script somewhere on your page (after React and Chosen of course)

```html
<script src="path/to/react-chosen.js"></script>
```

**API**

Please refer to [Chosen](http://harvesthq.github.io/chosen/)'s API. It's pretty much the same, except:

- Every Chosen option employs camelCase, e.g. disable_search_threshold -> disableSearchThreshold.
- Bonus little wrapper for `selectNode.trigger("liszt:updated")` -> `chosenComponent.update();`.
- This README is longer than the code, go check out the source code.

**Example**

```
<script type="text/jsx">
  /**
  * @jsx React.DOM
  */
  React.renderComponent(
    <Chosen noResultText="No result" onChange={doSomething}>
      <option value="Facebook">Facebook</option>
      <option value="Harvest">Harvest</option>
    </Chosen>
  , document.body);
</script>
```
