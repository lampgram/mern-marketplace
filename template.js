export default ({ markup, css }) => {
  return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Online Exchange</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none
              }
          </style>
        </head>
        <body style="margin:0">
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js" async></script>
          <script type="text/javascript" src="/dist/bundle.js"></script>
          <!-- Customerly Integration Code -->
          <script>
              window.customerlySettings = {
                  app_id: "06261566"
              };
              !function(){function e(){var e=t.createElement("script");
              e.type="text/javascript",e.async=!0,
              e.src="https://widget.customerly.io/widget/06261566";
              var r=t.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)}
              var r=window,t=document,n=function(){n.c(arguments)};
              r.customerly_queue=[],n.c=function(e){r.customerly_queue.push(e)},
              r.customerly=n,r.attachEvent?r.attachEvent("onload",e):r.addEventListener("load",e,!1)}();
          </script>
        </body>
      </html>`
}
