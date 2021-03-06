export default function template(helmet, content = "", sheetsRegistry) {
  const scripts = `<script src="/client.js"></script>`;
  const css = sheetsRegistry.toString()
  const page = `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">

              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                <style id="jss-server-side">${css}</style>
                ${scripts}
              </body>`;

  return page;
}
