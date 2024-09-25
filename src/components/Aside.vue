<template>
    <aside>
        <h2>FLOOR PLANS</h2>
            <div class="floorplan-container">
            <p style="color: #9E8E82; margin-bottom: 2rem; font-size: 85%;">Please select the residence from the floor plate to view detailed floor plan.</p>
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
