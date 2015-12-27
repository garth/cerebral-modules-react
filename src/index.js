import React, { PropTypes } from 'react';
import Component from 'cerebral-react'

const ModuleSwitch = (props) => {
  const {
    activeModule,
    modules
  } = props;

  const loadingComponent = props.loadingComponent || 'Loading...';
  const notFoundComponent = props.notFoundComponent || `No component found for ${activeModule} module`;

  if (!activeModule) {
    return (<div>{ loadingComponent }</div>);
  }

  const ModuleComponent = modules[activeModule] && modules[activeModule].Component;

  return ModuleComponent ? (
    // see https://github.com/cerebral/cerebral-react/issues/15
    <ModuleComponent basePath={[activeModule]} />
  ) : (
    <div>{ notFoundComponent }</div>
  );
};

ModuleSwitch.propTypes = {
  activeModule: PropTypes.string,
  loadingComponent: PropTypes.node,
  modules: PropTypes.object,
  notFoundComponent: PropTypes.node
};

export default Component(ModuleSwitch, {
  activeModule: ['activeModule']
});
