// Aviso de cookies (LGPD) — compartilhado entre todas as páginas do site.
// Procura os elementos #cookieBanner / #cookieAccept / #cookieDecline no DOM;
// cada página define seu próprio HTML/CSS do banner, este script só cuida do comportamento.
(function () {
    function initCookieConsent() {
        const banner = document.getElementById('cookieBanner');
        if (!banner) return;

        const CONSENT_KEY = 'cookieConsent';
        const acceptBtn = document.getElementById('cookieAccept');
        const declineBtn = document.getElementById('cookieDecline');

        if (!localStorage.getItem(CONSENT_KEY)) {
            setTimeout(() => banner.classList.add('show'), 800);
        } else {
            banner.hidden = true;
        }

        const hideBanner = () => {
            banner.classList.remove('show');
            setTimeout(() => { banner.hidden = true; }, 500);
        };

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem(CONSENT_KEY, 'accepted');
                hideBanner();
            });
        }

        if (declineBtn) {
            declineBtn.addEventListener('click', () => {
                localStorage.setItem(CONSENT_KEY, 'declined');
                hideBanner();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieConsent);
    } else {
        initCookieConsent();
    }
})();
