# React-chosen

[React](http://facebook.github.io/react/) wrapper for [Chosen](http://harvesthq.github.io/chosen/) jQuery.

## install

```sh
bower install react-chosen
```

Or simply drop the script somewhere on your page (after React and Chosen of course):

```html
<script src="path/to/react-chosen.js"></script>
```

## API

Please refer to [Chosen](http://harvesthq.github.io/chosen/)'s API. It's pretty much the same, except:

- Every Chosen option employs camelCase, e.g. disable_search_threshold -> disableSearchThreshold.

- **Bonus!** No need to trigger the random `.trigger("liszt:updated")` for syncing Chosen with the native select. Just pass a `value` property to the component like you would normally do on a React select component. If you creep up and change the select value under the hood using jQuery, you'll still have to manually do `mySelect.trigger("liszt:updated")`.

- This README is longer than the source code, go check it out.

## Example

```html
/**
* @jsx React.DOM
*/
React.renderComponent(
  <Chosen noResultsText="No result" value="Harvest" onChange={doSomething}>
    <option value="Facebook">Facebook</option>
    <option value="Harvest">Harvest</option>
  </Chosen>
, document.body);

// or multi-select
React.renderComponent(
  <Chosen value={["Apple"]} width="92px" data-placeholder="Select..." multiple>
    <option value="Apple">Apple</option>
    <option value="Facebook">Facebook</option>
    <option value="Harvest">Harvest</option>
  </Chosen>
, document.body);
```

## License

MIT.
