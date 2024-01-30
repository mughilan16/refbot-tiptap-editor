
const safeHtmlFormatter = ({ value, format }: { value: string, format: 'SafeToNormal' | "NormalToSafe" }) => {
    if (format == 'NormalToSafe') {
        return value.replaceAll('<', '‹').replaceAll('>', '›');
    } else {
        return value.replaceAll('‹', '<').replaceAll('›', '>');
    }
}

export default safeHtmlFormatter