export const getDayName = (dateStr: string, lang: string) => {
    var date = new Date(dateStr.split(":")[0]);
    return date.toLocaleDateString(lang, { weekday: "long" });
};
