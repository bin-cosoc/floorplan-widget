<template>
    
    <div class="viewer">
        <Details class="not-in-mobile" /> 
        
        <div class="container">
            <img v-if="pngUrl" id="floorplan-image" :src="pngUrl" alt="">
        </div>
    </div>
</template>
<script>
import useStore from '@/store';

async function getPNGs() {
    const PNGS = import.meta.glob('@/**/*.png', { import: 'default' });
    const promises = Object.entries(PNGS).map(async ([k,v])=>{
        return [k, await v()];
    });
    
    const data = await Promise.all(promises);
    
    return Object.fromEntries(data);
}

import Details from './Details.vue';

export default {
    components: {Details},
    async setup() {
        return {
            store: useStore(),
        }
    },
    data() {
        return {
            pngs: {}
        }
    },
    computed: {
        pngUrl() {
            return this.pngs[this.store.selected.imgUrl];
        }
    },
    async mounted() {
        this.pngs = await getPNGs();
    }
}
</script>