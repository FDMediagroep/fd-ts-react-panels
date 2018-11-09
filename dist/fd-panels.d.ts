import React from 'react';
export interface Props {
    boxShadow?: boolean;
}
export default class Panel extends React.PureComponent<Props & any, any> {
    static defaultProps: {
        boxShadow: boolean;
    };
    render(): JSX.Element;
}
