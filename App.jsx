App = React.createClass({
  render() {
    cx = React.addons.classSet;
    classses = cx({
      'mdl-button':true,
      'mdl-js-button':true,
      'mdl-button--fab':true,
      'mdl-button--colored':true,
    })
    style = {
        color: '#fff',
        height: '176px',
        background: 'url("http://media2.giga.de/2014/02/psycho-pass.jpg") center / cover'
    }
    return (
      <div>
        <button className={classses}>
          <i className="material-icons">add</i>
        </button>
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div style={style} className="mdl-card__title">
            <h2 className="mdl-card__title-text">PSYCHO-PASS</h2>
          </div>
          <div className="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>
            </button>
          </div>
        </div>
        <h1>MDL in meteor-react</h1>
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
