import TodoItemsComponent from "./todo-items.component";
import * as React from "react";
import {shallow} from 'enzyme';

test('should show first todo item', () => {
    const items = [
        { id: "1", description: "First todo item" }
    ];

    const component = shallow(<TodoItemsComponent items={items}/>);

    expect(component.find('ul').childAt(0).text()).toEqual(items[0].description);
});
