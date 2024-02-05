
const safeHtmlFormatter = ({ value, format }: { value: string, format: 'SafeToNormal' | "NormalToSafe" }) => {
    if (format == 'NormalToSafe') {
        return value.replaceAll('<', '‹').replaceAll('>', '›');
    } else if (format == 'SafeToNormal') {
        return value.replaceAll('‹', '<').replaceAll('›', '>');
    }
    return "";
}

export default safeHtmlFormatter