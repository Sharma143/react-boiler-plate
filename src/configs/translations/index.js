import messages_de from "./locale/de.json";
import messages_en from "./locale/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};
let language = navigator.language.split(/[-_]/)[0];
language = 'de';

export {messages, language};