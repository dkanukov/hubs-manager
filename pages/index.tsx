import {definePageMeta} from '#imports';

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'default'
        })

        return () => (
            <div>
                Page text
            </div>
        )
    },
})
