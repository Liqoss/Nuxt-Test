import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Default from "../layouts/default.vue";
import { defineComponent } from "vue";
import ProductPage from "../components/ProductPage.vue";

describe("Header Footer", () => {
    it("renders the header and the footer properly", () => {
        const wrapper = shallowMount(Default);
        expect(wrapper.text()).toContain("Home");
        expect(wrapper.vm.data).toContain("data");
    });
});


describe('Products', () => {
    let AsyncComponent = defineComponent({
        components: {ProductPage}, 
        template: '<Suspense><ProductPage /></Suspense>',
    });
  
    const wrapper = shallowMount(AsyncComponent);    
  
    it('is mounted', () => {
      expect(wrapper.vm.three).toEqual(3);
    })
});