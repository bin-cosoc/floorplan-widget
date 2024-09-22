<template>
    <details :id="id" @click="onClick">
        <summary>{{ title }}</summary>
        <div class="accordion-content" v-html="svgData"></div>
    </details>
</template>
<script>
import useStore from '@/store.js';

async function getSVG(url) {
    const SVGS = import.meta.glob(`@/**/*.svg`, { query: 'raw', import: 'default' });
    return await SVGS[url]();
}

export default {
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    async setup(props) {
        return {
            store: useStore(),
            svgData: await getSVG(props.url),
        }
    },
    mounted() {
        document.querySelectorAll(`#${this.id} *[data-id]`).forEach(item => {
            this.setClickEvent(item);
        });
    },
    methods: {
        resetAllSelectedClass() {
            const elements = document.querySelectorAll(`#${this.id} .floor`);
            
            elements.forEach(element => {
                element.classList.remove('active');
            });
        },
        setClickEvent(item) {
            const residence = this.store.residences[item.dataset.id];
            
            if (!residence) {
                item.classList.add('disabled');
                return;
            }

            item.onclick = () => {
                this.store.selected = residence;
                this.resetAllSelectedClass();
                item.classList.add('active');
            }

            if (this.store.selected == residence) {
                item.classList.add('active');
            }       
        },
        onClick() {
            const details = document.querySelectorAll(".floorplan details");
            
            details.forEach(element => {
                if (this.$el != element && element.open) {
                    element.open = false;
                }
            })
        }
    },
    
}
</script>
