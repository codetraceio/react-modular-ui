import 'raf/polyfill';

const components = [
  'Block',
  'Button',
  'Checkbox',
  'Form',
  'Icon',
  'Input',
  'Loading',
  'Modal',
  'Pagination',
  'Pill',
  'Portal',
  'Progress',
  'Radio',
  'Select',
  'Tabs',
  'TextArea',
  'Toggle',
  'Tooltip',
  'Upload'
];

const services = [
  'clickOutsideService',
  'dropDownService',
  'settingService',
  'tooltipService',
  'utilService',
  'componentService'
];

components.forEach((component) => {
  jest.mock(`../src/components/${component}`, () => {
    return {
      default: {}
    };
  });
});

services.forEach((service) => {
  jest.mock(`../src/services/${service}`, () => {
    return {
      default: {}
    };
  });
});

describe('index', () => {
  const index = require('../src/index');
  components.forEach((component) => {
    it(`should contain ${component}`, () => {
      expect(index[component]).toBeDefined();
    });
  });

  services.forEach((service) => {
    it(`should contain ${service}`, () => {
      expect(index[service]).toBeDefined();
    });
  });
});
