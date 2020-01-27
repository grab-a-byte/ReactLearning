import React from 'react';
import { render } from '@testing-library/react';
import { ToDoList } from './ToDoList';
import sinon from "sinon";

test('component renders without crashing', () => {
    var item = render(<ToDoList items={Array(0)} removeItem = {() => {}}/>)
    expect(item)
});

test('component calls removeItem when deleteing', () => { 
    var item = render(<ToDoList items={Array(0)} removeItem = {() => {}}/>)
    item.
})