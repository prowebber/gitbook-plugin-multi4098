module.exports = {
    blocks: {
        collapse:{
            process: function (block) {
                // Get arguments passed via the {}
                let title = block.kwargs.title || '';
                let open = block.kwargs.loadopen || 'no';

                // Generate the final HTML
                function generateHtml(title, data, open){
                    open = (open == 'yes') ? 'open': '';

                    let  html = "<details " + open + ">";
                    html += "<summary>" + title + "</summary>";
                    html += data;
                    html += "</details>";

                    return html;
                }

                // Convert the markdown to HTML
                let config = this.renderBlock('markdown', block.body).then(function(data){
                    return generateHtml(title, data, open);
                });

                return config;
            }
        }
    }
};