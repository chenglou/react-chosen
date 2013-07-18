# React-treeview

Easy, light, flexible tree view made with [React](http://facebook.github.io/react/).

## install

```sh
bower install react-treeview
```

Or simply drop the script somewhere on your page (after React of course):

```html
<script src="path/to/react-treeview.js"></script>
```

## API

(This README uses the [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) syntax. If you prefer the JavaScript version, try the [JSX Compiler](http://facebook.github.io/react/jsx-compiler.html) any time.)

### &lt;TreeView />
The tag for declaring the tree view. A self-closing tag.

#### source
The only attribute. It takes an array with the following format:

```js
[

];
```

## Example

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

Check out the [examples](https://github.com/chenglou/react-treeview/tree/master/examples) folder for more sophisticated demos!

## License

MIT.
