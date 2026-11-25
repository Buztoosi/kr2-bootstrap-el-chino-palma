(function () {
    'use strict';
    var STORAGE_KEY = 'ecp-theme';
    var root = document.documentElement;

    function applyTheme(theme) {
        root.setAttribute('data-bs-theme', theme);
        updateToggle(theme);
    }

    function updateToggle(theme) {
        var isDark = theme === 'dark';
        document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(isDark));
            btn.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
            btn.title = isDark ? 'Светлая тема' : 'Тёмная тема';
            var icon = btn.querySelector('.theme-icon');
            var label = btn.querySelector('.theme-label');
            if (icon) icon.textContent = isDark ? '\u2600\ufe0f' : '\ud83c\udf19';
            if (label) label.textContent = isDark ? 'Светлая' : 'Тёмная';
        });
    }

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-theme-toggle]');
        if (!btn) return;
        var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        updateToggle(root.getAttribute('data-bs-theme') || 'light');
    });
})();
