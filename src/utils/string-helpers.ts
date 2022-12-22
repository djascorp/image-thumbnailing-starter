export const isNull = (value: string | number | object): boolean => {
  if (value !== null && value !== '' && value !== undefined && value !== 0) {
    return false
  }

  return true
}
