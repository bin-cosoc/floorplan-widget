<template>
  <div class="floorplan">
    <Aside></Aside>
    <Suspense>
      <Viewer></Viewer>
    </Suspense>
  </div>
</template>
<script>
import Aside from './components/Aside.vue';
import Viewer from './components/Viewer.vue';

export default {
  components: {
    Aside,
    Viewer
  },
}
</script>