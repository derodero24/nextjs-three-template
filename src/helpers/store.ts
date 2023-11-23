import { MutableRefObject } from 'react'
import create from 'zustand'
import shallow from 'zustand/shallow'

const useStoreImpl = create(() => ({
  dom: null as MutableRefObject<HTMLElement>,
}))

const useStore = <T>(sel: {
  (state: { dom: MutableRefObject<HTMLElement> }): T
}) => useStoreImpl<T>(sel, shallow)
Object.assign(useStore, useStoreImpl)

const { getState, setState } = useStoreImpl

export { getState, setState }
export default useStore
