document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('main');
    
    if (content) {
        setTimeout(() => {
            document.body.classList.add('content-visible');
            content.style.opacity = '1';
        }, 50);
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            if (link.hostname === window.location.hostname && 
                link.href && 
                !link.getAttribute('target') && 
                !link.hash) {
                
                e.preventDefault();
                const target = link.href;

                if (content) {
                    content.style.opacity = '0';
                }
                
                setTimeout(() => {
                    window.location.href = target;
                }, 300);
            }
        });
    });
});

window.onpageshow = function(event) {
    if (event.persisted) {
        const content = document.querySelector('main');
        if (content) content.style.opacity = '1';
    }
};