import TodoItemsComponent from "./todo-items.component";
import * as React from "react";
import {shallow} from 'enzyme';


test('it should show todo items', () => {
    const items = [
        {id: '1', todo: 'First Todo Item', isComplete: false},
        {id: '2', todo: 'Second Todo Item', isComplete: false}
    ];

    const component = shallow(<TodoItemsComponent items={items}/>);

    expect(component.find('ul').childAt(0).childAt(0).text()).toEqual(items[0].todo);
    expect(component.find('ul').childAt(1).childAt(0).text()).toEqual(items[1].todo);
});

test('it should remove todo from list on delete button click', () => {
    const items = [
        {id: '1', todo: 'First Todo Item', isComplete: false},
        {id: '2', todo: 'Second Todo Item', isComplete: false}
    ];

    const component = shallow(<TodoItemsComponent items={items}/>);
    expect(component.find('ul').length).toEqual(1);
    component.find('#btn-success1').simulate('click');

    expect(component.find('ul').length).toEqual(0);
});
