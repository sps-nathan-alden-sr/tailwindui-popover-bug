<template>
  <div style="color: white;">
    <PopoverGroup>
      <Popover>
        <PopoverButton>Popover</PopoverButton>
        <PopoverPanel style="margin-left: 10px;">
          <PopoverButton as="template">
            <router-link :to="{ name: 'Home' }" @keydown="k">Home</router-link>
          </PopoverButton>
          <br />
          <PopoverButton as="template">
            <router-link :to="{ name: 'About' }" @keydown="k">About</router-link>
          </PopoverButton>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";

// eslint-disable-next-line space-before-function-paren
function k(e: KeyboardEvent) {
  if (e.key === "Enter") {
    console.log(e.target);
  }
}
</script>
