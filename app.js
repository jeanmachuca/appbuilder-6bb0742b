document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
  a.addEventListener('click', () => console.log('CTA clicked:', a.textContent));
});
