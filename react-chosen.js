var Chosen = React.createClass({
  displayName: 'Chosen',
  componentDidUpdate: function() {
    // chosen doesn't refresh the options by itself, babysit it
    $(this.getDOMNode()).trigger('liszt:updated');
  },
  componentDidMount: function(select) {
    $(select)
      .chosen({
        disable_search_threshold: this.props.disableSearchThreshold,
        no_results_text: this.props.noResultsText,
        max_selected_options: this.props.maxSelectedOptions,
        allow_single_deselect: this.props.allowSingleDeselect,
        width: this.props.width
      })
      .on('liszt:maxselected', this.props.onMaxSelected)
      .change(this.props.onChange);
  },
  componentWillUnmount: function() {
    $(this.getDOMNode()).off('liszt:maxselected change');
  },
  render: function() {
    return this.transferPropsTo(React.DOM.select(null, this.props.children));
  }
});
