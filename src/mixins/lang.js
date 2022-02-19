import { currentLocale } from "../i18n";
import { setPageLocale } from "../util-frontend";
import arLang from "../langauges/ar";
import enLang from "../langauges/en";
export default {
    data() {
        return {
            language: currentLocale(),
        };
    },

    async created() {
        if (this.language !== "en") {
            await this.changeLang(this.language);
        }
    },

    watch: {
        async language(lang) {
            await this.changeLang(lang);
        },
    },

    methods: {
        changeLang(lang) {
            // let message = (await langModules["../languages/" + lang + ".js"]()).default;            
            if (lang === "ar")
                var message = arLang;
            else
                var message = enLang;
            this.$i18n.setLocaleMessage(lang, message);
            this.$i18n.locale = lang;
            localStorage.locale = lang;
            setPageLocale();
        }
    }
};
