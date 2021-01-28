import useMethods from './useMethods'

const visibleMethods = {
    openVisible() {
        return true
    },
    closeVisible() {
        return false
    },
}

const useVisible = (initialValue = false) => {
    const [value, {openVisible, closeVisible}] = useMethods(initialValue, visibleMethods)
    return [value, openVisible, closeVisible]
}

export default useVisible
