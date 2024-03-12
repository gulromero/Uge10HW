const app = Vue.createApp({
  data() {
    return { 
      word: "",
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
      if(this.words.length > 0) {
        this.showOutput = true; 
      } else {
        this.showOutput = false; 
      }
    }
  },

  computed: {
    result() {
      return this.words.join(', ');
    }
  }
});

app.mount('#app');
