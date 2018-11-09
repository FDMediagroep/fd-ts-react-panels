import TestRenderer from 'react-test-renderer';
import React from 'react';
import Panel from '../src/fd-panels';

describe('FD Panel', () => {

    it('should render correctly', () => {
        let panel = TestRenderer.create(<Panel/>);
        expect(panel.toJSON()).toMatchSnapshot();
        panel = TestRenderer.create(<Panel boxShadow={true}/>);
        expect(panel.toJSON()).toMatchSnapshot();
    });
});
