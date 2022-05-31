window.SampleButton = function SampleButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "sample-button",
    onClick: props.onClick
  }, props.text);
};

window.SampleTitle = function SampleTitle(props) {
  return /*#__PURE__*/React.createElement("h1", {
    className: "sample-title"
  }, props.text);
};

window.Styleguide = function () {
  const componentNames = Object.keys(window).filter(key => {
    return key.indexOf('Sample') == 0;
  }).sort();
  const componentHighlights = ['SampleButton'];
  const [selected, setSelected] = React.useState(componentHighlights[0]);

  const renderComponentNames = function (names) {
    return names.map(function (name, i) {
      return /*#__PURE__*/React.createElement("p", {
        title: name,
        key: i,
        onClick: () => {
          onSidebarItemClicked(name);
        }
      }, name);
    });
  };

  const onSidebarItemClicked = function (key) {
    setSelected(key);
  };

  const getComponent = function (compName) {
    return window[compName];
  };

  const getDefaults = function (compName) {
    return window.STYLEGUIDE_DEFAULTS[compName] || {};
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "styleguide"
  }, /*#__PURE__*/React.createElement("input", {
    id: "styleguide-open-handle",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("div", {
    className: "styleguide-open"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "styleguide-open-handle"
  }, "Open library")), /*#__PURE__*/React.createElement("div", {
    className: "styleguide-sidebar"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, "Highlights"), renderComponentNames(componentHighlights)), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, "All components"), renderComponentNames(componentNames))), /*#__PURE__*/React.createElement("div", {
    className: "styleguide-showcase"
  }, componentNames.map(function (name, i) {
    var style = {
      display: selected == name ? 'block' : 'none'
    };
    var props = getDefaults(name);
    var component = React.createElement(window[name], props);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: style
    }, component);
  })));
};