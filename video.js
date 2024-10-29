    function addIframe() {
        const container = document.getElementById('iframeContainer');
        const iframe = document.createElement('iframe');
        
        iframe.src = "https://streama2z.xyz/embed-t0l4rt4piknp.html";
        iframe.width = '700';
        iframe.height = '430';
        iframe.scrolling = 'no';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.webkitAllowFullscreen = true;
        iframe.mozAllowFullscreen = true;

        container.appendChild(iframe);
    }

    // Call the function to add the iframe
    addIframe();
