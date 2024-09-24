<template>
  <div class="floorplan">
    <Aside></Aside>
    <Suspense>
      <Viewer></Viewer>
    </Suspense>
    <Details class="mobile-only" />
  </div>
</template>
<script>
import Aside from './components/Aside.vue';
import Viewer from './components/Viewer.vue';
import Details from './components/Details.vue';

export default {
  components: {
    Details,
    Aside,
    Viewer
  }
}
</script>