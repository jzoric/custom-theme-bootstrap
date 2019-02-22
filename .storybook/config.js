import { configure, addDecorator } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';
import "../src/sass/my-theme.scss";
import '@fortawesome/fontawesome-free/css/all.css'
import "bootstrap";

addDecorator(withOptions({
    name: 'Custom theme',
    url: '#',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    selectedPanel: undefined,
    enableShortcuts: false,
}));

const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
