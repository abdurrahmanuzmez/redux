
import { PlayersActionTypes as ActionTypes } from '../types/ActionTypes';

export const fetchPlayers = (searchQuery = '') => ({
    type: ActionTypes.fetch_players,
    searchQuery,
});

export const fetchPlayersResult = (hasError, players) => ({
    type: ActionTypes.fetch_players_result,
    hasError,
    players,
});

export const changeSearchQuery = (searchQuery) => ({
    type: ActionTypes.change_search_query,
    searchQuery,
});