import * as React from "react";

import Button from "../../components/Button";
import Block from "../../components/Block";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Icon from "../../components/Icon";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import Pill from "../../components/Pill";
import Progress from "../../components/Progress";
import Radio from "../../components/Radio";
import Select, {ISelectOption} from "../../components/Select";
import Tabs, {ITabsOption} from "../../components/Tabs";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
import Tooltip from "../../components/Tooltip";
import Upload from "../../components/Upload";
import TypeaheadInput, { ITypeaheadInputOption } from "../../components/TypeaheadInput";

import settingService from "../../services/settingService";

export interface IAppViewProps {
  portal?: JSX.Element[]
}

export interface IAppViewState {
  tabValue?: string;
  inputValue?: string;
  checked?: boolean;
  selected?: string;
  showModal?: boolean;
  count?: number;
  offset?: number;
  limit?: number;
  selectValue?: string;
  typeaheadValue?: string;
  typeaheadValue2?: string;
  typeaheadKey2?: string;
}

settingService.setIcons({
  "github": <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>,
  "checkbox": <svg viewBox="0 0 24 24"><path d="M20.785 5.745l-2.346-1.85c-.074-.06-.164-.103-.266-.103-.103 0-.197.043-.27.107L9.37 14.865s-3.356-3.227-3.45-3.32c-.094-.095-.218-.253-.406-.253-.188 0-.273.132-.37.23-.074.077-1.27 1.334-1.86 1.958-.035.04-.056.06-.086.09-.05.073-.085.155-.085.244 0 .094.034.17.085.244l.12.11s5.953 5.72 6.05 5.818c.1.098.22.222.395.222.17 0 .312-.184.393-.265L20.802 6.267c.05-.073.085-.154.085-.248 0-.108-.042-.198-.102-.275z" /></svg>,
  "radio": <svg viewBox="0 0 24 24"><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>,
  "pagination": <svg viewBox="0 0 24 24"><path d="M5.875 11.998l8.214-8.553c.205-.212.2-.56-.01-.777l-1.47-1.503c-.21-.216-.555-.22-.762-.01L1.818 11.6c-.11.108-.158.255-.15.398-.003.147.046.29.15.397l10.03 10.45c.207.21.55.206.762-.01l1.47-1.503c.21-.217.215-.565.01-.777l-8.215-8.557z"/></svg>,
  "drop-down": <svg viewBox="0 0 12 6"><path d="M12 0L6 6 0 0" /></svg>
});

export default class App extends React.Component<IAppViewProps, IAppViewState> {
  constructor(props: IAppViewProps) {
    super(props);

    this.state = {
      tabValue: "profile",
      inputValue: "",
      checked: false,
      selected: "",
      showModal: false,
      count: 100000,
      offset: 10,
      limit: 10,
      selectValue: "",
      typeaheadValue: "",
      typeaheadValue2: "",
    };
  }

  getTabOptions(): ITabsOption[] {
    return [
      {
        title: "Profile",
        value: "profile"
      }, {
        title: "Followers",
        value: "followers",
        count: 151,
        countColor: "primary"
      }, {
        title: "Following",
        value: "following",
        count: 1
      }
    ];
  }

  getTypeaheadOptions(): string[] {
    return [
      "Owl",
      "Coala",
      "Pinguin",
      "Bear",
      "Lion",
    ];
  }

  getTypeaheadOptions2(): ITypeaheadInputOption[] {
    return [
      {
        value: "Owl",
        key: "owl",
      },
      {
        value: "Coala",
        key: "coala",
      },
      {
        value: "Pinguin",
        key: "pinguin",
      },
      {
        value: "Bear",
        key: "bear",
      },
      {
        value: "Lion",
        key: "lion",
      },
    ];
  }

  getSelectOptions(): ISelectOption[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((item) => {
      return {
        title: `Option ${item}`,
        value: `option${item}`,
      }
    });
  }

  onChangeTab = (value: string) => {
    this.setState({
      tabValue: value,
    });
  }

  onChangeInput = (value: string) => {
    this.setState({
      inputValue: value
    });
  }

  onToggleChecked = (value: boolean) => {
    this.setState({
      checked: value,
    })
  }
  onChangeSelected = (value: string) => {
    this.setState({
      selected: value,
    })
  }
  onToggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  onChangeOffset = (offset: number) => {
    this.setState({
      offset: offset,
    });
  }

  onChangeSelect = (value: string) => {
    this.setState({
      selectValue: value,
    });
  }

  onChangeTypeahead = (value: string) => {
    this.setState({
      typeaheadValue: value,
    });
  }

  onChangeTypeahead2 = (option: ITypeaheadInputOption) => {
    this.setState({
      typeaheadKey2: option.key,
      typeaheadValue2: option.value,
    });
  }

  render() {
    return (
      <div className="app">
        <Block
          padding={{
            xsUp: "64 0",
            xsDown: "32 0"
          }}
        >
          <h1>React Modular UI</h1>
          <h2>Default buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24">default</Button>
              <Button size="32">default</Button>
              <Button size="48">default</Button>
              <Button size="48" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary">primary</Button>
              <Button size="32" color="primary">primary</Button>
              <Button size="48" color="primary">primary</Button>
              <Button size="48" color="primary" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success">success</Button>
              <Button size="32" color="success">success</Button>
              <Button size="48" color="success">success</Button>
              <Button size="48" color="success" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger">danger</Button>
              <Button size="32" color="danger">danger</Button>
              <Button size="48" color="danger">danger</Button>
              <Button size="48" color="danger" disabled>danger</Button>
            </Block>
            <div style={{backgroundColor:"#777777"}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                  <Button size="24" color="light">light</Button>
                  <Button size="32" color="light">light</Button>
                  <Button size="48" color="light">light</Button>
                  <Button size="48" color="light" disabled>light</Button>
              </Block>
            </div>
          </Block>
          <h2>Flat buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" view="flat">default</Button>
              <Button size="32" view="flat">default</Button>
              <Button size="48" view="flat">default</Button>
              <Button size="48" view="flat" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary" view="flat">primary</Button>
              <Button size="32" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success" view="flat">success</Button>
              <Button size="32" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger" view="flat">danger</Button>
              <Button size="32" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat" disabled>danger</Button>
            </Block>
            <div style={{backgroundColor:"#777777"}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light" view="flat">light</Button>
                <Button size="32" color="light" view="flat">light</Button>
                <Button size="48" color="light" view="flat">light</Button>
                <Button size="48" color="light" view="flat" disabled>light</Button>
              </Block>
            </div>
          </Block>
          <h2>Glass buttons</h2>
          <div style={{backgroundColor:"#777777"}}>
            <Block layout="horizontal" align="center" spaceHorizontal="8">
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" view="glass">default</Button>
                <Button size="32" view="glass">default</Button>
                <Button size="48" view="glass">default</Button>
                <Button size="48" view="glass" disabled>default</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="primary" view="glass">primary</Button>
                <Button size="32" color="primary" view="glass">primary</Button>
                <Button size="48" color="primary" view="glass">primary</Button>
                <Button size="48" color="primary" view="glass" disabled>primary</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="success" view="glass">success</Button>
                <Button size="32" color="success" view="glass">success</Button>
                <Button size="48" color="success" view="glass">success</Button>
                <Button size="48" color="success" view="glass" disabled>success</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="danger" view="glass">danger</Button>
                <Button size="32" color="danger" view="glass">danger</Button>
                <Button size="48" color="danger" view="glass">danger</Button>
                <Button size="48" color="danger" view="glass" disabled>danger</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light" view="glass">light</Button>
                <Button size="32" color="light" view="glass">light</Button>
                <Button size="48" color="light" view="glass">light</Button>
                <Button size="48" color="light" view="glass" disabled>light</Button>
              </Block>
            </Block>
          </div>
          <h2>Icons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" />
              <Icon name="github" size="32" />
              <Icon name="github" size="48" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" color="primary" />
              <Icon name="github" size="32" color="primary" />
              <Icon name="github" size="48" color="primary" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" color="success" />
              <Icon name="github" size="32" color="success" />
              <Icon name="github" size="48" color="success" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Icon name="github" size="24" color="danger" />
              <Icon name="github" size="32" color="danger" />
              <Icon name="github" size="48" color="danger" />
            </Block>
            <div style={{backgroundColor:"#777777"}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Icon name="github" size="24" color="light" />
                <Icon name="github" size="32" color="light" />
                <Icon name="github" size="48" color="light" />
              </Block>
            </div>
          </Block>
          <h2>Buttons with icons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24">
                <Icon name="github" size="16" color="light" />
                <div>default</div>
              </Button>
              <Button size="32">
                <Icon name="github" size="24" color="light" />
                <div>default</div>
              </Button>
              <Button size="48">
                <Icon name="github" size="32" color="light" />
                <div>default</div>
              </Button>
              <Button size="48" disabled>
                <Icon name="github" size="32" color="light" />
                <div>default</div>
              </Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary">
                <Icon name="github" size="16" color="light" />
                <div>primary</div>
              </Button>
              <Button size="32" color="primary">
                <Icon name="github" size="24" color="light" />
                <div>primary</div>
              </Button>
              <Button size="48" color="primary">
                <Icon name="github" size="32" color="light" />
                <div>primary</div>
              </Button>
              <Button size="48" color="primary" disabled>
                <Icon name="github" size="32" color="light" />
                <div>primary</div>
              </Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success">
                <Icon name="github" size="16" color="light" />
                <div>success</div>
              </Button>
              <Button size="32" color="success">
                <Icon name="github" size="24" color="light" />
                <div>success</div>
              </Button>
              <Button size="48" color="success">
                <Icon name="github" size="32" color="light" />
                <div>success</div>
              </Button>
              <Button size="48" color="success" disabled>
                <Icon name="github" size="32" color="light" />
                <div>success</div>
              </Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger">
                <Icon name="github" size="16" />
                <div>danger</div>
              </Button>
              <Button size="32" color="danger">
                <Icon name="github" size="24" />
                <div>danger</div>
              </Button>
              <Button size="48" color="danger">
                <Icon name="github" size="32" />
                <div>danger</div>
              </Button>
              <Button size="48" color="danger" disabled>
                <Icon name="github" size="32" />
                <div>danger</div>
              </Button>
            </Block>
            <div style={{backgroundColor:"#777777"}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light">
                  <Icon name="github" size="16" />
                  <div>light</div>
                </Button>
                <Button size="32" color="light">
                  <Icon name="github" size="24" />
                  <div>light</div>
                </Button>
                <Button size="48" color="light">
                  <Icon name="github" size="32" />
                  <div>light</div>
                </Button>
                <Button size="48" color="light" disabled>
                  <Icon name="github" size="32" />
                  <div>light</div>
                </Button>
              </Block>
            </div>
          </Block>
          <h2>Inputs</h2>
          <Block spaceVertical="8">
            <Input
              size="24"
              label="Login"
              placeholder="Enter your login"
              value={this.state.inputValue}
              onChange={(value) => this.onChangeInput(value)}
            />
            <Input
              size="32"
              label="Login"
              placeholder="Enter your login"
              value={this.state.inputValue}
              onChange={(value) => this.onChangeInput(value)}
            />
            <Input
              size="48"
              label="Login"
              placeholder="Enter your login"
              value={this.state.inputValue}
              onChange={(value) => this.onChangeInput(value)}
            />
          </Block>
          <h2>Loading</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" />
              <Loading size="24" />
              <Loading size="32" />
              <Loading size="48" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" color="primary" />
              <Loading size="24" color="primary" />
              <Loading size="32" color="primary" />
              <Loading size="48" color="primary" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" color="success" />
              <Loading size="24" color="success" />
              <Loading size="32" color="success" />
              <Loading size="48" color="success" />
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Loading size="16" color="danger" />
              <Loading size="24" color="danger" />
              <Loading size="32" color="danger" />
              <Loading size="48" color="danger" />
            </Block>
            <div style={{backgroundColor:"#777777"}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Loading size="16" color="light" />
                <Loading size="24" color="light" />
                <Loading size="32" color="light" />
                <Loading size="48" color="light" />
              </Block>
            </div>
          </Block>
          <h2>Tabs</h2>
          <Tabs
            size="24"
            options={this.getTabOptions()}
            value={this.state.tabValue}
            onChange={(value: string) => this.onChangeTab(value)}
          />
          <Tabs
            size="32"
            options={this.getTabOptions()}
            value={this.state.tabValue}
            onChange={(value: string) => this.onChangeTab(value)}
          />
          <Tabs
            size="48"
            options={this.getTabOptions()}
            value={this.state.tabValue}
            onChange={(value: string) => this.onChangeTab(value)}
          />
          <h2>Pills</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24" paddingRight="4"><div>default</div><Icon name="github" size="16" /></Pill>
              <Pill size="32">default</Pill>
              <Pill size="48">default</Pill>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24" color="primary">primary</Pill>
              <Pill size="32" color="primary">primary</Pill>
              <Pill size="48" color="primary">primary</Pill>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24" color="success">success</Pill>
              <Pill size="32" color="success">success</Pill>
              <Pill size="48" color="success">success</Pill>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Pill size="24" color="danger">danger</Pill>
              <Pill size="32" color="danger">danger</Pill>
              <Pill size="48" color="danger">danger</Pill>
            </Block>
            <div style={{backgroundColor:"#777777"}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Pill size="24" color="light">light</Pill>
                <Pill size="32" color="light">light</Pill>
                <Pill size="48" color="light">light</Pill>
              </Block>
            </div>
          </Block>
          <h2>Progress</h2>
          <Block spaceVertical="8" padding="8">
            <Block padding="8">
              <Progress size="4" value="40" />
            </Block>
            <Block padding="8">
              <Progress size="4" color="primary" value="40" />
            </Block>
            <Block padding="8">
              <Progress size="4" color="success" value="40" />
            </Block>
            <Block padding="8">
              <Progress size="4" color="danger" value="40" />
            </Block>
          </Block>
          <div style={{backgroundColor:"#777777"}}>
            <Block padding="8 16">
              <Progress size="4" color="light" value="40" />
            </Block>
          </div>
          <h2>Checkbox</h2>
          <Block layout="vertical" spaceVertical="8" align="start">
            <Checkbox size="16" checked={this.state.checked} onChange={(value) => this.onToggleChecked(value)}>checkbox</Checkbox>
            <Checkbox size="24" checked={this.state.checked} onChange={(value) => this.onToggleChecked(value)}>checkbox</Checkbox>
            <Checkbox size="32" checked={this.state.checked} onChange={(value) => this.onToggleChecked(value)}>checkbox</Checkbox>
            <Checkbox size="32" checked={this.state.checked} onChange={(value) => this.onToggleChecked(value)} disabled>checkbox</Checkbox>
          </Block>
          <h2>Radio</h2>
          <Block layout="vertical" spaceVertical="8" align="start">
            <Radio
              size="16"
              checked={this.state.selected === "first"}
              name="radio"
              value="first"
              onChange={(value: string) => this.onChangeSelected(value)}
            >
              Radio
            </Radio>
            <Radio 
              size="24"
              checked={this.state.selected === "second"}
              name="radio"
              value="second"
              onChange={(value: string) => this.onChangeSelected(value)}
            >
              Radio
            </Radio>
            <Radio 
              size="32"
              checked={this.state.selected === "third"}
              name="radio"
              value="third"
              onChange={(value: string) => this.onChangeSelected(value)}
            >
              Radio
              </Radio>
            <Radio 
              size="32"
              checked={this.state.selected === "fourth"}
              name="radio"
              value="fourth"
              onChange={(value: string) => this.onChangeSelected(value)} disabled
            >
            Radio
            </Radio>
          </Block>
          <Block>
            <h2>Tooltip</h2>
            <Block layout="horizontal" padding="   0" spaceHorizontal="16">
              <Tooltip title="Help" portal={this.props.portal}>
                <Button>Help</Button>
              </Tooltip>
              <Tooltip title="Help" portal={this.props.portal}>
                <Button>Help</Button>
              </Tooltip>
              <Tooltip title="Help" portal={this.props.portal}>
                <Button>Help</Button>
              </Tooltip>
              <Tooltip title="Help" portal={this.props.portal}>
                <Button>Help</Button>
              </Tooltip>
              <Tooltip title="Help" portal={this.props.portal}>
                <Button>Help</Button>
              </Tooltip>
              <Tooltip title="Help" portal={this.props.portal}>
                <Button>Help</Button>
              </Tooltip>
            </Block>
          </Block>
          <Block>
            <h2>Upload</h2>
            <Upload>
              Drug file here to upload
            </Upload>
          </Block>
          <Block>
            <h2>Text Area</h2>
            <TextArea label="Something" />
          </Block>
        </Block>
        <h2>Toggle</h2>
        <Block layout="vertical" spaceVertical="8" align="start">
          <Toggle size="24" checked={this.state.checked} onChange={(value) => this.onToggleChecked(value)}>toggle</Toggle>
          <Toggle size="32" checked={this.state.checked} onChange={(value) => this.onToggleChecked(value)}>toggle</Toggle>
          <Toggle size="32" checked={this.state.checked} disabled onChange={(value) => this.onToggleChecked(value)}>toggle</Toggle>
        </Block>
        <h2>Modal</h2>
        <Block layout="vertical" spaceVertical="8" align="start">
          <Button size="24" onClick={() => this.onToggleModal()}>Modal</Button>
          {this.state.showModal ? (
            <Modal portal={this.props.portal} onClose={() => this.onToggleModal()}>
              <div>This is a simple modal</div>
            </Modal>
          ) : null}
        </Block>
        <h2>Pagination</h2>
        <Block layout="vertical" spaceVertical="8" align="start">
          <Pagination
            count={this.state.count}
            offset={this.state.offset}
            limit={this.state.limit}
            onChange={(offset: number) => this.onChangeOffset(offset)}
          />
        </Block>
        <h2>Select</h2>
        <Block layout="horizontal" spaceHorizontal="8">
          <Select
            size="32"
            label="Select"
            placeholder="Select"
            value={this.state.selectValue}
            options={this.getSelectOptions()}
            onChange={(value: string) => this.onChangeSelect(value)}
          />
          <Select
            size="32"
            label="Select"
            placeholder="Select"
            value={this.state.selectValue}
            options={this.getSelectOptions()}
            onChange={(value: string) => this.onChangeSelect(value)}
          />
          <Input
            size="32"
            label="Input"
            placeholder="Input"
          />
        </Block>
        <h2>Typeahead Input</h2>
        <Block>          
          <TypeaheadInput
            value={this.state.typeaheadValue}
            options={this.getTypeaheadOptions()}
            onChange={this.onChangeTypeahead}
            matchingOptionsOnly
            hideInitialOptions
          />
        </Block>
        <h3>Typeahead Input With Keys</h3>
        <Block>          
          <TypeaheadInput
            value={this.state.typeaheadValue2}
            options={this.getTypeaheadOptions2()}
            onChange={this.onChangeTypeahead2}
            matchingOptionsOnly
            hideInitialOptions
          />
        </Block>
        <Block padding="8 0">Key: {this.state.typeaheadKey2}</Block>
      </div>
    );
  }
}
