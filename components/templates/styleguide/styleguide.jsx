window.Styleguide = function () {
  const componentNames = Object
    .keys(window)
    .filter((key) => { return key.indexOf('Sample') == 0; })
    .sort();

  const componentHighlights = [ 'SampleButton' ];

  const [ selected, setSelected ] = React.useState(componentHighlights[0]);

  const renderComponentNames = function (names) {
    return names.map(function (name, i) {
      return (
        <p
          title={name}
          key={i}
          onClick={() => {onSidebarItemClicked(name); }}>
          {name}
        </p>
      )
    });
  }

  const onSidebarItemClicked = function (key) { setSelected(key); };
  
  const getComponent = function (compName) { return window[compName] };

  const getDefaults = function (compName) {
    return window.STYLEGUIDE_DEFAULTS[compName] || {};
  }
  
  return (
    <div className="styleguide">

      <input id="styleguide-open-handle" type="checkbox" />
      <div className="styleguide-open">
        <label htmlFor="styleguide-open-handle">Open library</label>
      </div>

      <div className="styleguide-sidebar">
        <section>
          <h1>Highlights</h1>
          {renderComponentNames(componentHighlights)}
        </section>
        <section>
          <h1>All components</h1>
          {renderComponentNames(componentNames)}
        </section>
      </div>

      <div className="styleguide-showcase">
        {componentNames.map(function (name, i) {
          var style = { display: selected == name ? 'block' : 'none' };
          var props = getDefaults(name);
          var component = React.createElement(window[name], props);
          return <div key={i} style={style}>{component}</div>;
        })}
      </div>

    </div>
  )
}
