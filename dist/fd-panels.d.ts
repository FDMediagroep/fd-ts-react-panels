import React from 'react';
export interface Props {
    /**
     * Optional. Set a box-shadow. This effect replaces the default 1 pixel border.
     */
    boxShadow?: boolean;
}
export default class Panel extends React.PureComponent<Props & any, any> {
    static defaultProps: {
        boxShadow: boolean;
    };
    render(): JSX.Element;
}
