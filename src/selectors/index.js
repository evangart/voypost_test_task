import { createSelector } from "reselect"

const travelers = (state) => state.travelers
const filters = (state) => state.filters

export const filteredMainTableBody = createSelector(
  travelers,
  filters,
  (travelers, filters) => {
    return travelers.filter((traveler) => {
      const fromValue = traveler.fromName.toLowerCase()
      const toValue = traveler.toName.toLowerCase()
      const fromFilter = filters.fromName.toLowerCase()
      const toFilter = filters.toName.toLowerCase()

      if (fromFilter !== "" && !fromValue.includes(fromFilter)) return false
      if (toFilter !== "" && !toValue.includes(toFilter)) return false

      return true
    })
  }
)
