import { defineStore } from 'pinia';
import { getCurrentInstance } from 'vue';

export default defineStore('FloorplanStore', {
  state() {
    const { appContext } = getCurrentInstance();
    const floorplan = appContext.config.globalProperties.$floorplan;

    return {
        selected: floorplan.residences[0],
        residences: Object.fromEntries(
            floorplan.residences.map(o=>[o.id, o])
        )
    }
  }
})