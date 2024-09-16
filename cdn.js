function onJsFile(file, baseUrl) {
    file.code = file.code.replace(/"(\.\/|\/)assets\//gm, `"${baseUrl}/assets/`);
}
 
function onHtmlFile(file, baseUrl) {
    file.source = file.source.replace(/(src|href)="([^"]+)"/gm, `$1="${baseUrl}$2"`);
}
  
export function useCDN(baseUrl) {    
    return {
        name: 'vite-plugin-cnd',
        enforce: 'post',
        generateBundle(_, bundle) {
            console.log(bundle)
            for (const path in bundle) {
                const file = bundle[path];

                if (!/\.(js|html)$/.test(path)) continue;
                if (file.code) onJsFile(file, baseUrl);
                if (file.source) onHtmlFile(file, baseUrl);
                
            }
        }
    }
  }
  
  