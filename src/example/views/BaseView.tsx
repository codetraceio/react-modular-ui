import * as React from 'react';

interface IBaseViewProps {
  styles: string;
  scripts: string;
  title: string;
  html: string;
}

export default class BaseView extends React.Component<IBaseViewProps, {}> {
  renderStyle() {
    return this.props.styles ? (
      <link rel="stylesheet" href={this.props.styles} />
    ) : null;
  }

  renderScript() {
    return this.props.scripts ? (
      <script src={this.props.scripts} />
    ) : null;
  }

  render() {
    return (
      <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>{this.props.title}</title>
        <base href="/" />

        <meta name="title" content={this.props.title} />

        {this.renderStyle()}
      </head>
      <body>
        {this.props.html ? (
          <div dangerouslySetInnerHTML={{__html: this.props.html}} />
        ) : null}
        {this.props.children}
        {this.renderScript()}
      </body>
      </html>
    );
  }
}
