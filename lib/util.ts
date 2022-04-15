export function sanitizeFilename(filename: string): string {
    return filename
        .replaceAll(":", "")
        .replaceAll("-", "")
        .replaceAll(".", "");
}
