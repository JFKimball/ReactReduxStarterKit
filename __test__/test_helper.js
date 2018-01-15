import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import chai from 'chai'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../src/reducers'
import TestUtils from 'react-dom/test-utils';

global.cExpect = chai.expect
global.$ = $
renderComponent = renderComponent

// function genRenderers(options) {
// 	let { componentClass, defaultProps } = opts;

// 	function shallowRender(component) {
// 		const renderer = TestUtils.createRenderer();
// 		renderer.render(component);
// 		return renderer.getRenderOutput();
// 	}

// 	function renderWithProps(props = {}) {
// 		let mergedProps = Object.assign({}, defaultProps, props);
// 		return shallowRender(React.createElement(componentClass, mergedProps));
// 	}

// 	function shallowWithProps(props = {}) {
// 		let mergedProps = Object.assign({}, defaultProps, props);
// 		return shallowRender(React.createElement(componentClass, mergedProps));
// 	}

// 	return { renderWithProps, shallowRender, shallowWithProps }
// }

function renderComponent(ComponentClass, state = {}, props = {}) {
	const store = createStore(reducers, state)
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={store}>
			<ComponentClass {...props} />
		</Provider>
		);

	return $(ReactDOM.findDOMNode(componentInstance));
}

export { renderComponent };