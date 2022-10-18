import { computed, ref } from "vue";

// Breakpoints Object
export default function appBreakpoints($q) {
  return ref({
    breakpoint: computed(() => {
      return $q.screen.width < 775;
    }),
    breakpointr: computed(() => {
      return $q.screen.width > 775;
    }),
    ContactBreakpoint: computed(() => {
      return $q.screen.width < 1316;
    }),
  });
}
