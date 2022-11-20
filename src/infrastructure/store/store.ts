import { configureStore } from '@reduxjs/toolkit';
import { robotReducer } from '../../features/robots/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        robots: robotReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
