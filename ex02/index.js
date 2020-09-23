module.exports.compose = middlewares => {
    return function () {
        const dispatch = (i) => {
            let fn = middlewares[i]
            if(!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(() => {
                    return dispatch(i + 1)
                })
            )
        }

        return dispatch(0);
    }
}







