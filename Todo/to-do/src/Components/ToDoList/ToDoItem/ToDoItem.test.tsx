import React from 'react';
import { render } from '@testing-library/react';
import { ToDoItem } from './ToDoItem';
import { ToDoItemModel } from '../../../Models/ToDoItemModel';


test('component renders without crashing', () => {
    var item = render(<ToDoItem item={new ToDoItemModel("test")}/>)
    expect(item)
});