var React = require('react');

var SearchText = React.createClass({

  render: function() {
    return (
      <span>
      &ldquo;
      <span style={{ paddingX: '0 4px 0 2px', fontStyle: 'italic' }}>{ this.props.children }</span>
      {' '}&rdquo;
      </span>
    );
  }

});

module.exports = SearchText;