"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Button_1 = require("../../components/Button");
const Block_1 = require("../../components/Block");
const Checkbox_1 = require("../../components/Checkbox");
const Radio_1 = require("../../components/Radio");
const Input_1 = require("../../components/Input");
const Icon_1 = require("../../components/Icon");
const Loading_1 = require("../../components/Loading");
const Pill_1 = require("../../components/Pill");
const Tabs_1 = require("../../components/Tabs");
const TextArea_1 = require("../../components/TextArea");
const Toggle_1 = require("../../components/Toggle");
const Tooltip_1 = require("../../components/Tooltip");
const Pagination_1 = require("../../components/Pagination");
const Progress_1 = require("../../components/Progress");
const Upload_1 = require("../../components/Upload");
const Modal_1 = require("../../components/Modal");
const settings_1 = require("../../settings");
settings_1.default.setIcons({
    github: React.createElement("svg", { viewBox: "0 0 16 16" },
        React.createElement("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" })),
    checkbox: React.createElement("svg", { viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M20.785 5.745l-2.346-1.85c-.074-.06-.164-.103-.266-.103-.103 0-.197.043-.27.107L9.37 14.865s-3.356-3.227-3.45-3.32c-.094-.095-.218-.253-.406-.253-.188 0-.273.132-.37.23-.074.077-1.27 1.334-1.86 1.958-.035.04-.056.06-.086.09-.05.073-.085.155-.085.244 0 .094.034.17.085.244l.12.11s5.953 5.72 6.05 5.818c.1.098.22.222.395.222.17 0 .312-.184.393-.265L20.802 6.267c.05-.073.085-.154.085-.248 0-.108-.042-.198-.102-.275z" })),
    radio: React.createElement("svg", { height: "24", width: "24", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" })),
    pagination: React.createElement("svg", { viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M5.875 11.998l8.214-8.553c.205-.212.2-.56-.01-.777l-1.47-1.503c-.21-.216-.555-.22-.762-.01L1.818 11.6c-.11.108-.158.255-.15.398-.003.147.046.29.15.397l10.03 10.45c.207.21.55.206.762-.01l1.47-1.503c.21-.217.215-.565.01-.777l-8.215-8.557z" }))
});
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tabValue: 'profile',
            inputValue: '',
            checked: false,
            selected: '',
            showModal: false,
            count: 100000,
            offset: 10,
            limit: 10
        };
    }
    getTabOptions() {
        return [
            {
                title: 'Profile',
                value: 'profile'
            }, {
                title: 'Followers',
                value: 'followers',
                count: 151,
                countColor: 'primary'
            }, {
                title: 'Following',
                value: 'following',
                count: 1
            }
        ];
    }
    onChangeTab(value) {
        this.setState({
            tabValue: value
        });
    }
    onChangeInput(value) {
        this.setState({
            inputValue: value
        });
    }
    onToggleChecked(value) {
        this.setState({
            checked: value
        });
    }
    onChangeSelected(value) {
        this.setState({
            selected: value
        });
    }
    onToggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    onChangeOffset(offset) {
        this.setState({
            offset: offset
        });
    }
    render() {
        return (React.createElement("div", { className: "app" },
            React.createElement(Block_1.default, { padding: {
                    xsUp: '64 0',
                    xsDown: '32 0'
                } },
                React.createElement("h1", null, "React Modular UI"),
                React.createElement("h2", null, "Default buttons"),
                React.createElement(Block_1.default, { layout: "horizontal", align: "center", spaceHorizontal: "8" },
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24" }, "default"),
                        React.createElement(Button_1.default, { size: "32" }, "default"),
                        React.createElement(Button_1.default, { size: "48" }, "default"),
                        React.createElement(Button_1.default, { size: "48", disabled: true }, "default")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "primary" }, "primary"),
                        React.createElement(Button_1.default, { size: "32", color: "primary" }, "primary"),
                        React.createElement(Button_1.default, { size: "48", color: "primary" }, "primary"),
                        React.createElement(Button_1.default, { size: "48", color: "primary", disabled: true }, "primary")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "success" }, "success"),
                        React.createElement(Button_1.default, { size: "32", color: "success" }, "success"),
                        React.createElement(Button_1.default, { size: "48", color: "success" }, "success"),
                        React.createElement(Button_1.default, { size: "48", color: "success", disabled: true }, "success")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "danger" }, "danger"),
                        React.createElement(Button_1.default, { size: "32", color: "danger" }, "danger"),
                        React.createElement(Button_1.default, { size: "48", color: "danger" }, "danger"),
                        React.createElement(Button_1.default, { size: "48", color: "danger", disabled: true }, "danger")),
                    React.createElement("div", { style: { backgroundColor: '#777777' } },
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", color: "light" }, "light"),
                            React.createElement(Button_1.default, { size: "32", color: "light" }, "light"),
                            React.createElement(Button_1.default, { size: "48", color: "light" }, "light"),
                            React.createElement(Button_1.default, { size: "48", color: "light", disabled: true }, "light")))),
                React.createElement("h2", null, "Flat buttons"),
                React.createElement(Block_1.default, { layout: "horizontal", align: "center", spaceHorizontal: "8" },
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", view: "flat" }, "default"),
                        React.createElement(Button_1.default, { size: "32", view: "flat" }, "default"),
                        React.createElement(Button_1.default, { size: "48", view: "flat" }, "default"),
                        React.createElement(Button_1.default, { size: "48", view: "flat", disabled: true }, "default")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "primary", view: "flat" }, "primary"),
                        React.createElement(Button_1.default, { size: "32", color: "primary", view: "flat" }, "primary"),
                        React.createElement(Button_1.default, { size: "48", color: "primary", view: "flat" }, "primary"),
                        React.createElement(Button_1.default, { size: "48", color: "primary", view: "flat", disabled: true }, "primary")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "success", view: "flat" }, "success"),
                        React.createElement(Button_1.default, { size: "32", color: "success", view: "flat" }, "success"),
                        React.createElement(Button_1.default, { size: "48", color: "success", view: "flat" }, "success"),
                        React.createElement(Button_1.default, { size: "48", color: "success", view: "flat", disabled: true }, "success")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "danger", view: "flat" }, "danger"),
                        React.createElement(Button_1.default, { size: "32", color: "danger", view: "flat" }, "danger"),
                        React.createElement(Button_1.default, { size: "48", color: "danger", view: "flat" }, "danger"),
                        React.createElement(Button_1.default, { size: "48", color: "danger", view: "flat", disabled: true }, "danger")),
                    React.createElement("div", { style: { backgroundColor: '#777777' } },
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", color: "light", view: "flat" }, "light"),
                            React.createElement(Button_1.default, { size: "32", color: "light", view: "flat" }, "light"),
                            React.createElement(Button_1.default, { size: "48", color: "light", view: "flat" }, "light"),
                            React.createElement(Button_1.default, { size: "48", color: "light", view: "flat", disabled: true }, "light")))),
                React.createElement("h2", null, "Glass buttons"),
                React.createElement("div", { style: { backgroundColor: '#777777' } },
                    React.createElement(Block_1.default, { layout: "horizontal", align: "center", spaceHorizontal: "8" },
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", view: "glass" }, "default"),
                            React.createElement(Button_1.default, { size: "32", view: "glass" }, "default"),
                            React.createElement(Button_1.default, { size: "48", view: "glass" }, "default"),
                            React.createElement(Button_1.default, { size: "48", view: "glass", disabled: true }, "default")),
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", color: "primary", view: "glass" }, "primary"),
                            React.createElement(Button_1.default, { size: "32", color: "primary", view: "glass" }, "primary"),
                            React.createElement(Button_1.default, { size: "48", color: "primary", view: "glass" }, "primary"),
                            React.createElement(Button_1.default, { size: "48", color: "primary", view: "glass", disabled: true }, "primary")),
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", color: "success", view: "glass" }, "success"),
                            React.createElement(Button_1.default, { size: "32", color: "success", view: "glass" }, "success"),
                            React.createElement(Button_1.default, { size: "48", color: "success", view: "glass" }, "success"),
                            React.createElement(Button_1.default, { size: "48", color: "success", view: "glass", disabled: true }, "success")),
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", color: "danger", view: "glass" }, "danger"),
                            React.createElement(Button_1.default, { size: "32", color: "danger", view: "glass" }, "danger"),
                            React.createElement(Button_1.default, { size: "48", color: "danger", view: "glass" }, "danger"),
                            React.createElement(Button_1.default, { size: "48", color: "danger", view: "glass", disabled: true }, "danger")),
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", color: "light", view: "glass" }, "light"),
                            React.createElement(Button_1.default, { size: "32", color: "light", view: "glass" }, "light"),
                            React.createElement(Button_1.default, { size: "48", color: "light", view: "glass" }, "light"),
                            React.createElement(Button_1.default, { size: "48", color: "light", view: "glass", disabled: true }, "light")))),
                React.createElement("h2", null, "Icons"),
                React.createElement(Block_1.default, { layout: "horizontal", align: "center", spaceHorizontal: "8" },
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Icon_1.default, { name: "github", size: "24" }),
                        React.createElement(Icon_1.default, { name: "github", size: "32" }),
                        React.createElement(Icon_1.default, { name: "github", size: "48" })),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Icon_1.default, { name: "github", size: "24", color: "primary" }),
                        React.createElement(Icon_1.default, { name: "github", size: "32", color: "primary" }),
                        React.createElement(Icon_1.default, { name: "github", size: "48", color: "primary" })),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Icon_1.default, { name: "github", size: "24", color: "success" }),
                        React.createElement(Icon_1.default, { name: "github", size: "32", color: "success" }),
                        React.createElement(Icon_1.default, { name: "github", size: "48", color: "success" })),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Icon_1.default, { name: "github", size: "24", color: "danger" }),
                        React.createElement(Icon_1.default, { name: "github", size: "32", color: "danger" }),
                        React.createElement(Icon_1.default, { name: "github", size: "48", color: "danger" })),
                    React.createElement("div", { style: { backgroundColor: '#777777' } },
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Icon_1.default, { name: "github", size: "24", color: "light" }),
                            React.createElement(Icon_1.default, { name: "github", size: "32", color: "light" }),
                            React.createElement(Icon_1.default, { name: "github", size: "48", color: "light" })))),
                React.createElement("h2", null, "Buttons with icons"),
                React.createElement(Block_1.default, { layout: "horizontal", align: "center", spaceHorizontal: "8" },
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24" },
                            React.createElement(Icon_1.default, { name: "github", size: "16", color: "light" }),
                            React.createElement("div", null, "default")),
                        React.createElement(Button_1.default, { size: "32" },
                            React.createElement(Icon_1.default, { name: "github", size: "24", color: "light" }),
                            React.createElement("div", null, "default")),
                        React.createElement(Button_1.default, { size: "48" },
                            React.createElement(Icon_1.default, { name: "github", size: "32", color: "light" }),
                            React.createElement("div", null, "default")),
                        React.createElement(Button_1.default, { size: "48", disabled: true },
                            React.createElement(Icon_1.default, { name: "github", size: "32", color: "light" }),
                            React.createElement("div", null, "default"))),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "primary" },
                            React.createElement(Icon_1.default, { name: "github", size: "16", color: "light" }),
                            React.createElement("div", null, "primary")),
                        React.createElement(Button_1.default, { size: "32", color: "primary" },
                            React.createElement(Icon_1.default, { name: "github", size: "24", color: "light" }),
                            React.createElement("div", null, "primary")),
                        React.createElement(Button_1.default, { size: "48", color: "primary" },
                            React.createElement(Icon_1.default, { name: "github", size: "32", color: "light" }),
                            React.createElement("div", null, "primary")),
                        React.createElement(Button_1.default, { size: "48", color: "primary", disabled: true },
                            React.createElement(Icon_1.default, { name: "github", size: "32", color: "light" }),
                            React.createElement("div", null, "primary"))),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "success" },
                            React.createElement(Icon_1.default, { name: "github", size: "16", color: "light" }),
                            React.createElement("div", null, "success")),
                        React.createElement(Button_1.default, { size: "32", color: "success" },
                            React.createElement(Icon_1.default, { name: "github", size: "24", color: "light" }),
                            React.createElement("div", null, "success")),
                        React.createElement(Button_1.default, { size: "48", color: "success" },
                            React.createElement(Icon_1.default, { name: "github", size: "32", color: "light" }),
                            React.createElement("div", null, "success")),
                        React.createElement(Button_1.default, { size: "48", color: "success", disabled: true },
                            React.createElement(Icon_1.default, { name: "github", size: "32", color: "light" }),
                            React.createElement("div", null, "success"))),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Button_1.default, { size: "24", color: "danger" },
                            React.createElement(Icon_1.default, { name: "github", size: "16" }),
                            React.createElement("div", null, "danger")),
                        React.createElement(Button_1.default, { size: "32", color: "danger" },
                            React.createElement(Icon_1.default, { name: "github", size: "24" }),
                            React.createElement("div", null, "danger")),
                        React.createElement(Button_1.default, { size: "48", color: "danger" },
                            React.createElement(Icon_1.default, { name: "github", size: "32" }),
                            React.createElement("div", null, "danger")),
                        React.createElement(Button_1.default, { size: "48", color: "danger", disabled: true },
                            React.createElement(Icon_1.default, { name: "github", size: "32" }),
                            React.createElement("div", null, "danger"))),
                    React.createElement("div", { style: { backgroundColor: '#777777' } },
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Button_1.default, { size: "24", color: "light" },
                                React.createElement(Icon_1.default, { name: "github", size: "16" }),
                                React.createElement("div", null, "light")),
                            React.createElement(Button_1.default, { size: "32", color: "light" },
                                React.createElement(Icon_1.default, { name: "github", size: "24" }),
                                React.createElement("div", null, "light")),
                            React.createElement(Button_1.default, { size: "48", color: "light" },
                                React.createElement(Icon_1.default, { name: "github", size: "32" }),
                                React.createElement("div", null, "light")),
                            React.createElement(Button_1.default, { size: "48", color: "light", disabled: true },
                                React.createElement(Icon_1.default, { name: "github", size: "32" }),
                                React.createElement("div", null, "light"))))),
                React.createElement("h2", null, "Inputs"),
                React.createElement(Block_1.default, { spaceVertical: "8" },
                    React.createElement(Input_1.default, { size: "24", label: "Login", placeholder: "Enter your login", value: this.state.inputValue, onChange: (value) => this.onChangeInput(value) }),
                    React.createElement(Input_1.default, { size: "32", label: "Login", placeholder: "Enter your login", value: this.state.inputValue, onChange: (value) => this.onChangeInput(value) }),
                    React.createElement(Input_1.default, { size: "48", label: "Login", placeholder: "Enter your login", value: this.state.inputValue, onChange: (value) => this.onChangeInput(value) })),
                React.createElement("h2", null, "Loading"),
                React.createElement(Block_1.default, { layout: "horizontal", align: "center", spaceHorizontal: "8" },
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Loading_1.default, { size: "16" }),
                        React.createElement(Loading_1.default, { size: "24" }),
                        React.createElement(Loading_1.default, { size: "32" }),
                        React.createElement(Loading_1.default, { size: "48" })),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Loading_1.default, { size: "16", color: "primary" }),
                        React.createElement(Loading_1.default, { size: "24", color: "primary" }),
                        React.createElement(Loading_1.default, { size: "32", color: "primary" }),
                        React.createElement(Loading_1.default, { size: "48", color: "primary" })),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Loading_1.default, { size: "16", color: "success" }),
                        React.createElement(Loading_1.default, { size: "24", color: "success" }),
                        React.createElement(Loading_1.default, { size: "32", color: "success" }),
                        React.createElement(Loading_1.default, { size: "48", color: "success" })),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Loading_1.default, { size: "16", color: "danger" }),
                        React.createElement(Loading_1.default, { size: "24", color: "danger" }),
                        React.createElement(Loading_1.default, { size: "32", color: "danger" }),
                        React.createElement(Loading_1.default, { size: "48", color: "danger" })),
                    React.createElement("div", { style: { backgroundColor: '#777777' } },
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Loading_1.default, { size: "16", color: "light" }),
                            React.createElement(Loading_1.default, { size: "24", color: "light" }),
                            React.createElement(Loading_1.default, { size: "32", color: "light" }),
                            React.createElement(Loading_1.default, { size: "48", color: "light" })))),
                React.createElement("h2", null, "Tabs"),
                React.createElement(Tabs_1.default, { size: "24", options: this.getTabOptions(), value: this.state.tabValue, onChange: (value) => this.onChangeTab(value) }),
                React.createElement(Tabs_1.default, { size: "32", options: this.getTabOptions(), value: this.state.tabValue, onChange: (value) => this.onChangeTab(value) }),
                React.createElement(Tabs_1.default, { size: "48", options: this.getTabOptions(), value: this.state.tabValue, onChange: (value) => this.onChangeTab(value) }),
                React.createElement("h2", null, "Pills"),
                React.createElement(Block_1.default, { layout: "horizontal", align: "center", spaceHorizontal: "8" },
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Pill_1.default, { size: "24" }, "default"),
                        React.createElement(Pill_1.default, { size: "32" }, "default"),
                        React.createElement(Pill_1.default, { size: "48" }, "default")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Pill_1.default, { size: "24", color: "primary" }, "primary"),
                        React.createElement(Pill_1.default, { size: "32", color: "primary" }, "primary"),
                        React.createElement(Pill_1.default, { size: "48", color: "primary" }, "primary")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Pill_1.default, { size: "24", color: "success" }, "success"),
                        React.createElement(Pill_1.default, { size: "32", color: "success" }, "success"),
                        React.createElement(Pill_1.default, { size: "48", color: "success" }, "success")),
                    React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                        React.createElement(Pill_1.default, { size: "24", color: "danger" }, "danger"),
                        React.createElement(Pill_1.default, { size: "32", color: "danger" }, "danger"),
                        React.createElement(Pill_1.default, { size: "48", color: "danger" }, "danger")),
                    React.createElement("div", { style: { backgroundColor: '#777777' } },
                        React.createElement(Block_1.default, { layout: "vertical", align: "center", spaceVertical: "8", padding: "8" },
                            React.createElement(Pill_1.default, { size: "24", color: "light" }, "light"),
                            React.createElement(Pill_1.default, { size: "32", color: "light" }, "light"),
                            React.createElement(Pill_1.default, { size: "48", color: "light" }, "light")))),
                React.createElement("h2", null, "Progress"),
                React.createElement(Block_1.default, { spaceVertical: "8", padding: "8" },
                    React.createElement(Progress_1.default, { size: "4", value: "40" }),
                    React.createElement(Progress_1.default, { size: "4", color: "primary", value: "40" }),
                    React.createElement(Progress_1.default, { size: "4", color: "success", value: "40" }),
                    React.createElement(Progress_1.default, { size: "4", color: "danger", value: "40" })),
                React.createElement("div", { style: { backgroundColor: '#777777' } },
                    React.createElement(Block_1.default, { spaceVertical: "8", padding: "8" },
                        React.createElement(Progress_1.default, { size: "4", color: "light", value: "40" }))),
                React.createElement("h2", null, "Checkbox"),
                React.createElement(Block_1.default, { layout: "vertical", spaceVertical: "8", align: "start" },
                    React.createElement(Checkbox_1.default, { size: "16", checked: this.state.checked, onChange: (value) => this.onToggleChecked(value) }, "checkbox"),
                    React.createElement(Checkbox_1.default, { size: "24", checked: this.state.checked, onChange: (value) => this.onToggleChecked(value) }, "checkbox"),
                    React.createElement(Checkbox_1.default, { size: "32", checked: this.state.checked, onChange: (value) => this.onToggleChecked(value) }, "checkbox"),
                    React.createElement(Checkbox_1.default, { size: "32", checked: this.state.checked, onChange: (value) => this.onToggleChecked(value), disabled: true }, "checkbox")),
                React.createElement("h2", null, "Radio"),
                React.createElement(Block_1.default, { layout: "vertical", spaceVertical: "8", align: "start" },
                    React.createElement(Radio_1.default, { size: "16", checked: this.state.selected === 'first', name: "radio", value: "first", onChange: (value) => this.onChangeSelected(value) }, "Radio"),
                    React.createElement(Radio_1.default, { size: "24", checked: this.state.selected === 'second', name: "radio", value: "second", onChange: (value) => this.onChangeSelected(value) }, "Radio"),
                    React.createElement(Radio_1.default, { size: "32", checked: this.state.selected === 'third', name: "radio", value: "third", onChange: (value) => this.onChangeSelected(value) }, "Radio"),
                    React.createElement(Radio_1.default, { size: "32", checked: this.state.selected === 'fourth', name: "radio", value: "fourth", onChange: (value) => this.onChangeSelected(value), disabled: true }, "Radio")),
                React.createElement(Block_1.default, null,
                    React.createElement("h2", null, "Tooltip"),
                    React.createElement(Block_1.default, { layout: "horizontal", padding: "   0", spaceHorizontal: "16" },
                        React.createElement(Tooltip_1.default, { title: "Help", portal: this.props.portal },
                            React.createElement(Button_1.default, null, "Help")),
                        React.createElement(Tooltip_1.default, { title: "Help", portal: this.props.portal },
                            React.createElement(Button_1.default, null, "Help")),
                        React.createElement(Tooltip_1.default, { title: "Help", portal: this.props.portal },
                            React.createElement(Button_1.default, null, "Help")),
                        React.createElement(Tooltip_1.default, { title: "Help", portal: this.props.portal },
                            React.createElement(Button_1.default, null, "Help")),
                        React.createElement(Tooltip_1.default, { title: "Help", portal: this.props.portal },
                            React.createElement(Button_1.default, null, "Help")),
                        React.createElement(Tooltip_1.default, { title: "Help", portal: this.props.portal },
                            React.createElement(Button_1.default, null, "Help")))),
                React.createElement(Block_1.default, null,
                    React.createElement("h2", null, "Upload"),
                    React.createElement(Upload_1.default, null, "Drug file here to upload")),
                React.createElement(Block_1.default, null,
                    React.createElement("h2", null, "Text Area"),
                    React.createElement(TextArea_1.default, { label: "Something" }))),
            React.createElement("h2", null, "Toggle"),
            React.createElement(Block_1.default, { layout: "vertical", spaceVertical: "8", align: "start" },
                React.createElement(Toggle_1.default, { size: "24", checked: this.state.checked, onChange: (value) => this.onToggleChecked(value) }, "toggle"),
                React.createElement(Toggle_1.default, { size: "32", checked: this.state.checked, onChange: (value) => this.onToggleChecked(value) }, "toggle"),
                React.createElement(Toggle_1.default, { size: "32", checked: this.state.checked, disabled: true, onChange: (value) => this.onToggleChecked(value) }, "toggle")),
            React.createElement("h2", null, "Modal"),
            React.createElement(Block_1.default, { layout: "vertical", spaceVertical: "8", align: "start" },
                React.createElement(Button_1.default, { size: "24", onClick: () => this.onToggleModal() }, "Modal"),
                React.createElement(Modal_1.default, { show: this.state.showModal, portal: this.props.portal, onClose: () => this.onToggleModal() },
                    React.createElement("div", null, "This is a simple modal"))),
            React.createElement("h2", null, "Pagination"),
            React.createElement(Block_1.default, { layout: "vertical", spaceVertical: "8", align: "start" },
                React.createElement(Pagination_1.default, { count: this.state.count, offset: this.state.offset, limit: this.state.limit, onChange: (offset) => this.onChangeOffset(offset) }))));
    }
}
exports.default = App;
