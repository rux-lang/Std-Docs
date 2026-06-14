"use strict";
(() => {
    // ── ToC smooth scroll ──────────────────────────────────────────────
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.md-nav--secondary .md-nav__link[href^="#"]');
        if (!link)
            return;
        const id = link.getAttribute('href').slice(1);
        const heading = document.getElementById(id);
        if (!heading)
            return;
        e.preventDefault();
        const top = heading.getBoundingClientRect().top + window.scrollY - 48;
        window.scrollTo({ top, behavior: 'smooth' });
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document
                    .querySelectorAll('.md-nav--secondary .md-nav__link--active')
                    .forEach(el => el.classList.remove('md-nav__link--active'));
                link.classList.add('md-nav__link--active');
            });
        });
    });
    // ── Back-to-top smooth scroll ───────────────────────────────────
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.md-top');
        if (!btn)
            return;
        e.stopPropagation();
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, true);

    // ── Pattern card carousel ──────────────────────────────────────────
    const track = document.getElementById('patterns-track');
    if (track) {
        let interval;
        const el = track;
        function startRotation() {
            interval = setInterval(() => {
                const card = el.querySelector('.home-pattern');
                if (!card)
                    return;
                const cardWidth = card.offsetWidth + 1;
                const maxScroll = el.scrollWidth - el.clientWidth;
                if (el.scrollLeft >= maxScroll - 4) {
                    el.scrollTo({ left: 0, behavior: 'smooth' });
                }
                else {
                    el.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }, 3000);
        }
        function stopRotation() {
            if (interval !== undefined) {
                clearInterval(interval);
            }
        }
        track.addEventListener('mouseenter', stopRotation);
        track.addEventListener('mouseleave', startRotation);
        startRotation();
    }
    function highlightRux(code) {
        var _a;
        const rules = [
            { pattern: /\/\/.*/g, cls: 'c1' },
            { pattern: /c8"[^"]*"/g, cls: 's2' },
            { pattern: /"[^"]*"/g, cls: 's2' },
            {
                pattern: /\b(import|func|let|var|return|if|else|while|for|true|false|null|extend|struct|interface)\b/g,
                cls: 'k',
            },
            {
                pattern: /\b(int8|int16|int32|int64|uint8|uint16|uint32|uint64|float32|float64|bool8|bool16|bool32|char8|char16|char32|uint|int|bool|char|String|void|opaque)\b/g,
                cls: 'kt',
            },
            {
                pattern: /\b(PrintLine|Print|ReadLine|Format|Alloc|Realloc|Free|Zero|Set|Compare|Copy|Assert|Fatal|Exit|SleepMs|SleepSeconds|SleepMinutes|TickMs|LocalTime|UtcTime|ToString|IsEmpty|Clone|Append|Capacity|Reserve|Shrink|Clear|IntoString|RandomInt|RandomInt8|RandomInt16|RandomInt32|RandomInt64|RandomUInt|RandomUInt8|RandomUInt16|RandomUInt32|RandomUInt64|RandomFloat32|RandomFloat64|RandomBool|IsNan|IsInfinite|Main|UuidV4|UuidNil|IsValidUuid|UuidParse|UuidToString|UuidV4Bytes|Hash|EncodeBase64|DecodeBase64|Init|Get|Contains|Insert|Remove|Keys|Values|Len|Sort|Quadsort|Piposort|Crumsort|QuadsortUint64|PiposortUint64|CrumsortUint64|SortUint64)\b/g,
                cls: 'nf',
            },
            {
                pattern: /\b(StringBuilder|StringArray|String|SystemTime|Display|Sha256|Sha1|Sha0|Sha512|Md5|Blake2|Blake3|Base64|Hex|UUID|HashMap|HashSet)\b/g,
                cls: 'nc',
            },
            { pattern: /\b\d+[uif]?(?:8|16|32|64)?\b/g, cls: 'm' },
            { pattern: /[{}()\[\],;]/g, cls: 'p' },
            { pattern: /(::|\.)/g, cls: 'o' },
        ];
        const text = (_a = code.textContent) !== null && _a !== void 0 ? _a : '';
        const tokens = [];
        let i = 0;
        while (i < text.length) {
            let matched = false;
            for (const rule of rules) {
                rule.pattern.lastIndex = 0;
                const m = rule.pattern.exec(text.slice(i));
                if (m && m.index === 0) {
                    tokens.push({ text: m[0], cls: rule.cls });
                    i += m[0].length;
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                tokens.push({ text: text[i], cls: null });
                i++;
            }
        }
        code.innerHTML = tokens
            .map(t => {
            const escaped = t.text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            return t.cls ? `<span class="${t.cls}">${escaped}</span>` : escaped;
        })
            .join('');
    }
    document.querySelectorAll('.home-pattern code').forEach(el => {
        highlightRux(el);
    });

    // ── Theme toggle ────────────────────────────────────────────────
    const toggle = document.querySelector('[data-rux-theme-toggle]');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const body = document.body;
            const current = body.getAttribute('data-md-color-scheme');
            const next = current === 'slate' ? 'default' : 'slate';
            const primary = body.getAttribute('data-md-color-primary') || 'custom';
            const accent = body.getAttribute('data-md-color-accent') || 'custom';
            body.setAttribute('data-md-color-scheme', next);
            body.setAttribute('data-md-color-primary', primary);
            body.setAttribute('data-md-color-accent', accent);
            const dark = document.getElementById('__palette_2');
            const light = document.getElementById('__palette_1');
            if (light && dark) {
                if (next === 'default') {
                    light.checked = true;
                } else {
                    dark.checked = true;
                }
            }
            if (typeof __md_set === 'function') {
                __md_set('__palette', {
                    color: { scheme: next, primary: primary, accent: accent }
                });
            } else {
                try {
                    localStorage.setItem('__palette', JSON.stringify({
                        color: { scheme: next, primary: primary, accent: accent }
                    }));
                } catch (e) {}
            }
        });
    }
})();
