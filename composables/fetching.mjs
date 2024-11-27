export const $useFetch = (request, opts) => {
    const config = useRuntimeConfig()

    return useFetch(request, { baseURL: config.public.apiBaseUrl, ...opts })
}

export const $useLazyFetch = (request, opts) => {
    const config = useRuntimeConfig()

    return useLazyFetch(request, { baseURL: config.public.apiBaseUrl, ...opts })
}