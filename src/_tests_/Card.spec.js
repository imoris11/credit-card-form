import React from 'react';
import {shallow} from 'enzyme';
import { Card } from '../Components/Cards';

describe('Card component tests', ()=> {
    const details = (card) => {
        console.log(card);
    }
    const wrapper = shallow(<Card onChange={details} />);

    it('should have a card number input field', () => {
        expect(wrapper.find('.card_number')).toHaveLength(1);
    })
});