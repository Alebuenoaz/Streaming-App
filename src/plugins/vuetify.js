import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  customVariables: ["~/assets/variables.scss"],
  theme: {
    themes: {
      light: {
        primary: "#009EA0",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#A00404",
        info: "#0413B8",
        success: "#05B804",
        warning: "#FFC802",
        charcoal0: "#181818",
      },
    },
  },
});

export default vuetify;
