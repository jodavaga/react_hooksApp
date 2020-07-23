import React from 'react';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp';

describe('Tests on <HookApp />', () => {

    test('Should render <Hook />', () => {
        const wrapper = shallow( <HookApp /> );

        expect(wrapper).toMatchSnapshot();
    });
})