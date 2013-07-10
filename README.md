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
- **Bonus!** No need to trigger the random `.trigger("liszt:updated")` for syncing Chosen with the default select. Just pass a `value` property to the component and it'll sync after every component update. If you creep up and change the select value under the hood using jQuery, you'll still have to manually do `mySelect.val(myValue).trigger("liszt:updated")`.
- This README is longer than the source code, go check it out.

**Example**

```
<script type="text/jsx">
  /**
  * @jsx React.DOM
  */
  React.renderComponent(
    <Chosen noResultText="No result" value="Harvest" onChange={doSomething}>
      <option value="Facebook">Facebook</option>
      <option value="Harvest">Harvest</option>
    </Chosen>
  , document.body);
</script>
```

**License**

MIT.
