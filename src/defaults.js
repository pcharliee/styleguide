window.STYLEGUIDE_DEFAULTS = (function () {
  var defaults = {};

  defaults['SampleButton'] = {
    onClick: () => console.log('Button Clicked'),
    text: 'Sample'
  }

  defaults['SampleTitle'] = {
    text: 'Init FTW'
  }

  return defaults;
})();
