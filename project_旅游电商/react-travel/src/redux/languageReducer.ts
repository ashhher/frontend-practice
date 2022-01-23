import i18n from "i18next";

export interface LanguageState {
    language: "en" | "zh";
    languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" }
    ],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "change_language":
            i18n.changeLanguage(action.payload); // 不标准 纯函数中不应该有修改操作
            return { ...state, language: action.payload };
        case "add_language":
            return { ...state, languageList: [...state.languageList, action.payload] };
        default:
            return state;
    }
}