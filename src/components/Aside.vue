<template>
    <aside>
        <div class="floorplan-container">
            <h1>FLOOR PLANS</h1>
            <Suspense>
                <Floor 
                    :id="data.id"
                    :title="data.title"
                    :url="data.svgUrl"
                    v-for="data in $floorplan.floors"
                />
            </Suspense>
        </div>
        <div class="residence-info-container">
            
            <div id="residenceInfo">
                <h2 class="title">{{ store.selected.title }}</h2>
                <h4 class="level">{{ store.selected.level }}</h4>
                <p class="rooms">{{ store.selected.rooms }}</p>
                <p>
                    <b>Interior:</b>
                    <span class="interior">{{ store.selected.interior }}</span>
                </p>
                <p>
                    <b>Exterior:</b>
                    <span class="exterior">{{ store.selected.exterior }}</span>
                </p>
                <p>
                    <b>Total:</b>
                    <span class="total">{{ store.selected.total }}</span>
                </p>
            </div>
            <a v-if="pdfUrl" id="downloadButton" :href="pdfUrl" download="FloorPlan.pdf">
                DOWNLOAD FLOOR PLAN
            </a>
        </div>
    </aside>
    
</template>
<script>
import useStore from '@/store.js';
import Floor from './Floor.vue';

export default {
    components: {Floor},
    setup() {
        return {
            store: useStore()
        }
    },
    computed: {
        pdfUrl() {
            return this.store.selected.brochureUrl;
        }
    }
}
</script>