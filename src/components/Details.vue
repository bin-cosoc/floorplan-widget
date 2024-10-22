<template>
    <div class="residence-info-container">
        <div id="residenceInfo">
            <h2 class="title">{{ store.selected.title }}</h2>

            <h4 class="level">{{ store.selected.level }}</h4>

            <p class="rooms">{{ store.selected.rooms }}</p>

            <p class="interior"><b>Interior:</b> {{ store.selected.interior }}</p>

            <p class="exterior" v-if="store.selected.exterior">
                <b>Exterior:</b> {{ store.selected.exterior }}
            </p>

            <p class="total"><b>Total:</b> {{ store.selected.total }}</p>
            <a v-if="pdfUrl" id="downloadButton" :href="pdfUrl" :download="pdfName">
                DOWNLOAD FLOOR PLAN →
            </a>
        </div>

    </div>
</template>

<script>
import useStore from '@/store.js';

export default {
    setup() {
        return {
            store: useStore()
        }
    },
    data() {
        return {
            baseUrl: "",
        }
    },
    computed: {
        pdfUrl() {
            return this.baseUrl + this.store.selected.brochureUrl;
        },
        pdfName() {
            return `FloorPlan_${this.store.selected.id}.pdf`;
        }
    },
    mounted() {
        window.addEventListener('load', () => {
            this.baseUrl = window.wpApiSettings?.root?.replace('/wp-json/', '') || '';
        })
    }
}
</script>