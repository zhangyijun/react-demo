requirejs.config({
	baseUrl: 'node_modules/',
	jsx: {
		fileExtension: '.jsx',
		harmony: true,
		stripTypes: true
    },
	paths: {
		'jquery': 'jquery/jquery',
		'$': 'jquery/jquery',
		'bootstrap': 'bootstrap/dist/js/bootstrap',
		'react': 'react/dist/react',
		'JSXTransformer': 'react/dist/JSXTransformer',
		'jsx': 'requirejs-jsx/requirejs-jsx',
		'react-bootstrap': 'react-bootstrap/amd/react-bootstrap',

		'app': 'apps/app'
	},
	shim: {
		'$': {exports: 'jQuery'},
		'jquery': {exports: 'jQuery'},
		'bootstrap': {
			deps: ["jquery"],
			exports: '$.fn.alert'
		},
		'react': {
			exports: 'React',
		},
		'JSXTransformer': {
            exports: "JSXTransformer"
        },
		'react-bootstrap': {
			deps: ['react', 'bootstrap']
		},
		'app': {
			deps: ['react', 'react-bootstrap'],
			exports: 'buttonsInstance'
		}
	}
});

require(['react', 'react-bootstrap', 'jsx!app'], function(React, reactbootstrap, buttons) {
	var mountNode = document.getElementById('mainDiv');
	React.render(buttons, mountNode);
});
