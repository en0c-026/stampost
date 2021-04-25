export function changeStyle(store, setter) {
  let current = store.get(setter)
  current == 'dark' ? store.do(setter, 'white') : store.do(setter, 'dark')
}
