document.addEventListener("DOMContentLoaded", function(event) {
    fetch('/assets/js/scratchblocks-3.6.4/nl.json')
        .then(response => response.json())
        .then(json => {

            window.scratchblocks.loadLanguages({
                nl: json
            });

            scratchblocks.renderMatching('code.language-scratch-nl', {
                style:     'scratch3',
                languages: ['nl'],
                scale: 1,
            });

            scratchblocks.renderMatching('code.language-scratch-en', {
                style:     'scratch3',
                languages: ['en'], 
                scale: 1,
            });
        });
});S
