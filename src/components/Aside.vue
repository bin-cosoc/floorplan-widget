<template>
    <aside>
        <div class="floorplan-container">
            <h2>FLOOR PLANS</h2>
            <Suspense>
                <Floor 
                    :id="data.id"
                    :title="data.title"
                    :url="data.svgUrl"
                    v-for="data in $floorplan.floors"
                />
            </Suspense>
        </div>
        <Details class="not-in-mobile" />
    </aside>
    
</template>
<script>
import useStore from '@/store.js';
import Floor from './Floor.vue';
import Details from './Details.vue';

export default {
    components: {Floor, Details},
    setup() {
        return {
            store: useStore()
        }
    }
}
</script>