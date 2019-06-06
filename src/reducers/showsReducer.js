// const moviesDefault = []

// const showsReducer = (state = moviesDefault, action) => {
//   switch (action.type) {
//     // * Looks for the current state of the array - adds on the new expense creating a new array that includes the expense.
//     case "ADD_EXPENSE":
//       return [...state, action.expense]
//     // * Filter is finding only IDs that are NOT the same to the id of the item being called to be removed (expenseOne). Therefore, it filters out expenseOne and will only return expenseTwo.
//     // * The IDs being compared are the ones currently stored, and the action.id (action is referring to our dispatch() call to remove an item). dispatch() is the actual action sent to the store.
//     case "REMOVE_EXPENSE":
//       return state.filter(({ id }) => id !== action.id)
//     case "EDIT_EXPENSE":
//       return state.map(expense => {
//         if (expense.id === action.id) {
//           return { ...expense, ...action.updates }
//         } else {
//           return expense
//         }
//       })
//     default:
//       return state
//   }
// }

// export default showsReducer
