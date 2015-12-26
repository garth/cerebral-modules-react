import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Container, Decorator as State } from 'cerebral-react';
import { _getModules } from 'cerebral-modules';

@State({
  activeModule: ['activeModule']
})
class ModuleSwitch extends Component {

  static displayName = 'ModuleSwitch';

  static propTypes = {
    activeModule: PropTypes.string
  };

  render() {
    const {
      activeModule
    } = this.props;

    if (!activeModule) {
      return (
        <div>Loading...</div>
      );
    }

    const modules = _getModules();
    const ModuleComponent = modules[activeModule] && modules[activeModule].Component;

    return ModuleComponent ? (
      <ModuleComponent/>
    ) : (
      <div>No component found for {activeModule} module</div>
    );
  }
}

export default function render(controller) {
  // start the app
  const container = document.body.appendChild(document.createElement('div'));
  ReactDOM.render(<Container controller={controller} app={ModuleSwitch}/>, container);
}
