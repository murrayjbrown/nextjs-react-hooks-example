require('@babel/register');
require('jsdom-global/register');

require.extensions['.css'] = () => {};
require.extensions['.jpg'] = () => {};
require.extensions['.png'] = () => {};
require.extensions['.scss'] = () => {};

