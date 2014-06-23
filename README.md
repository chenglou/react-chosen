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

The npm build works, but unfortunately not well:

```sh
npm install react-chosen
```

Due to the awkwardness of Chosen and jQuery on npm, you'll still have to include jQuery as a global dependency. Installing via npm is not recommended.

## API

Please refer to [Chosen](http://harvesthq.github.io/chosen/)'s API. It's pretty much the same, except:

- Every Chosen option employs camelCase, e.g. disable_search_threshold -> disableSearchThreshold.

- Just like React's [controlled component](http://facebook.github.io/react/docs/forms.html#controlled-components), `value` controls your select and makes it immune to changes unless you specify so.

## Example

```html
/** @jsx React.DOM */
React.renderComponent(
  <Chosen noResultsText="No result" value="Harvest" onChange={doSomething}>
    <option value="Facebook">Facebook</option>
    <option value="Harvest">Harvest</option>
  </Chosen>
, document.body);

// or multi-select
React.renderComponent(
  <Chosen defaultValue={["Apple"]} width="92px" data-placeholder="Select..." multiple>
    <option value="Apple">Apple</option>
    <option value="Facebook">Facebook</option>
    <option value="Harvest">Harvest</option>
  </Chosen>
, document.body);
```

## License

MIT.
