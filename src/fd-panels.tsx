import React from 'react';
import styled from 'styled-components';

export interface Props {
    /**
     * Optional. Set a box-shadow. This effect replaces the default 1 pixel border.
     */
    boxShadow?: boolean;
}

export default class Panel extends React.PureComponent<Props&any, any> {
    static defaultProps = {
        boxShadow: false
    };

    render() {
        return (
            <StyledDiv {...this.props}>{this.props.children}</StyledDiv>
        );
    }
}

const StyledDiv = styled('div')`
    font-family: ProximaNovaRegular,sans-serif;
    background-color: rgba(0, 0, 0, 0.04);
    padding: 1rem;
    margin-bottom: 1rem;
    ${(props: any) => {
        if (props.boxShadow) {
            return 'box-shadow: 0 2px 0.2px rgba(0, 0, 0, 0.1)';
        }
        return 'border: 1px solid rgba(0, 0, 0, 0.1)';
    }}
`;
