export function loadPoniesReducer(
  state = {
    poniesList: []
  },
  action
) {
  switch (action.type) {
    case 'LOAD_DATA_STARTED':
      return state;
    case 'LOAD_DATA_SUCCESS':
      const nextPoniesList = Array.prototype.concat(
        state.poniesList,
        action.data
      );
      return nextPoniesList;

    case 'LOAD_DATA_FAILED':
      console.log(action.error);
      return state;

    default:
      return state;
  }
}