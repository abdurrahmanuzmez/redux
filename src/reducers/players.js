import { PlayersActionTypes as ActionTypes } from '../types/ActionTypes';

const initialState = {
    players: [],
    searchQuery: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.fetch_players_result:
            if (action.hasError)
                return state;
            return {
                ...state,
                players: action.players,
            };

        case ActionTypes.change_search_query:
            return {
                ...state,
                searchQuery: action.searchQuery,
            };

        default:
            return state;
    }
}
