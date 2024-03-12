const app = Vue.createApp({
  data() {
    return { 
      word: null,
      words: [],
      showOutput: false
    };
  },
   
  methods: {
    save(word) { 
      this.words.push(word);
      this.showOutput = false;
    },
    
    clear() {
      this.words = [];
      this.showOutput = false;
    },

    show() {
      this.showOutput = true;
    }
  },

  computed: {
    result() {
      return this.words.join(', ');
    }
  }
});

app.mount('#app');
