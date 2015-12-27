import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';

export default function moduleSwitch({
  props = {},
  modules = []
} = {}) {

  const moduleComponents = modules.reduce((components, mod) => {
    if (mod && mod.name && mod.Component) {
      components[mod.name] = mod.Component;
    }
    return components;
  }, {});

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

      const ModuleComponent = moduleComponents[activeModule];

      return ModuleComponent ? (
        <ModuleComponent {...props}/>
      ) : (
        <div>No component found for {activeModule} module</div>
      );
    }
  }

  return ModuleSwitch;
}
