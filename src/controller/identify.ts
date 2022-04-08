
export function identify(url: string, width: number, height: number): Promise<string> {
    if (url.endsWith(".jpg") || url.endsWith(".png") ) {
        console.log('Found image so just showing it');
        return new Promise<string>((resolve, reject) => {
            resolve(url);
        });
    } else {
        // Assume it JSON and retrieve
    }
}
