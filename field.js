const figure = document.querySelector('.folio');
const descriptions = {
  both: 'The same release U raises two questions. What does it reveal about an individual, and how does its distribution vary across groups?',
  privacy: 'For each release u, compare the observer’s posterior belief about private X with the prior. A point-wise constraint bounds that change for every u.',
  fairness: 'For demographic parity, compare the distribution of U across groups S. Perfect parity requires the same distribution for every group.'
};
figure.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const view = button.dataset.view;
    figure.dataset.view = view;
    figure.querySelectorAll('button').forEach(option => {
      option.setAttribute('aria-pressed', String(option === button));
    });
    document.querySelector('#field-note').textContent = descriptions[view];
  });
});
