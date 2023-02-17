import {definePageMeta} from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'default'
        })

        return () => (
            <div>
                1
                <v-avatar color="surface-variant"></v-avatar>
            </div>
        )
    },
})
