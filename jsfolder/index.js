const app = Vue.createApp({
  data() {
    return { 
      word: "",
      words: [],
    };
  },
   
  methods: {
    save(word) { 
      this.words.push(word);
    },
    
    clear() {
      this.words = [];

    },

    show() {
      if(this.words.length >0)
        this.message = this.words.toString()
    }
  },

  computed: {
    result() {
      return this.words.join(', ');
    }
  }
});

app.mount('#app');
