const components = [
  'AbstractComponent', 'Block', 'Button', 'Checkbox', 'Icon', 'Input', 'Form', 'Loading', 'Pill',
  'Tabs', 'Tooltip', 'Portal', 'Progress'
];

components.forEach((component) => {
  jest.mock(`../src/components/${component}`, () => {
    return {
      default: {}
    };
  });
});

jest.mock('../src/settings', () => {
  return {
    default: {}
  };
});

describe('index', () => {
  const index = require('../src/index.js');
  it('should contain AbstractComponent', () =>{
    expect(index.AbstractComponent).toBeDefined();
  });

  it('should contain Block', () =>{
    expect(index.Block).toBeDefined();
  });

  it('should contain Button', () =>{
    expect(index.Button).toBeDefined();
  });

  it('should contain Checkbox', () =>{
    expect(index.Checkbox).toBeDefined();
  });

  it('should contain Icon', () =>{
    expect(index.Icon).toBeDefined();
  });

  it('should contain Input', () =>{
    expect(index.Input).toBeDefined();
  });

  it('should contain Form', () =>{
    expect(index.Form).toBeDefined();
  });

  it('should contain Loading', () =>{
    expect(index.Loading).toBeDefined();
  });

  it('should contain Pill', () =>{
    expect(index.Pill).toBeDefined();
  });

  it('should contain Tabs', () =>{
    expect(index.Tabs).toBeDefined();
  });

  it('should contain Tooltip', () =>{
    expect(index.Tooltip).toBeDefined();
  });

  it('should contain Portal', () =>{
    expect(index.Portal).toBeDefined();
  });

  it('should contain Progress', () =>{
    expect(index.Progress).toBeDefined();
  });

  it('should contain settings', () =>{
    expect(index.settings).toBeDefined();
  });
});
