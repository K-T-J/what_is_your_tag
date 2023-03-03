<template>
  <div>
    <input
      type="text"
      class="addTag"
      placeholder="what is your tag?"
      spellcheck="false"
      @keyup.enter="inputEnter"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: "inputText",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    inputEnter(e) {
      this.$emit("inputTextVal", e.target.value);
      this.inputValue = "";
    },
  },
};
</script>
