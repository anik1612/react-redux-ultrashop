import { ActionTypes } from '../constants/actionTypes';

const initialState = {
	product: [
		{
			id: 1,
			title: 'Anik Sarker',
			category: 'Programmer',
		},
	],
};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			return state;
	}
};
