import { createAction } from '@reduxjs/toolkit';
import { Robot } from '../types/robot';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<Robot>>(actionTypes.load);

export const addActionCreator = createAction<Robot>(actionTypes.add);

export const updateActionCreator = createAction<Robot>(actionTypes.update);

export const deleteActionCreator = createAction<Robot>(actionTypes.delete);
