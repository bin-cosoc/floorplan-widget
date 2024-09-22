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
        <div class="residence-info-container">
            <div id="residenceInfo">
                <h2 class="title">{{ store.selected.title }}</h2>
                <h4 class="level">{{ store.selected.level }}</h4>
                <p class="rooms">{{ store.selected.rooms }}</p>
                <p><b>Interior:</b> {{ store.selected.interior }}</p>
                <p><b>Exterior:</b> {{ store.selected.exterior }}</p>
                <p><b>Total:</b> {{ store.selected.total }}</p>
            </div>
            <a v-if="pdfUrl" id="downloadButton" :href="pdfUrl" :download="pdfName">
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
        },
        pdfName() {
            return `FloorPlan_${this.store.selected.id}.pdf`;
        }
    }
}
</script>