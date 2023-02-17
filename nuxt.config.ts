// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true,
        typeCheck: true,
    },
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    components: [
        {
            path: '~/components',
            extensions: ['.tsx'],
            pathPrefix: false,
        }
    ],
    ssr: false,
})
