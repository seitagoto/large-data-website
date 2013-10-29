// Get a reference to the top nav using its class
var nav = document.querySelector('.nav-list');

// Wait for the user to click on the nav button
document.querySelector('.nav-btn').addEventListener('click', function (e) {
  // Javascript passes an event object for event listeners
  // It's being captured in the `e` argument above

  // Since .nav-btn is a link, by default it navigate somewhere
  // `e.preventDefault()` will stop the link from doing what it normally does
  e.preventDefault();

  // Will toggle @data-state on .nav-top and .nav-btn
  // @data-state is being used in CSS to style what the nav elements will look like
  if (nav.getAttribute('data-state') == 'expanded') {
    nav.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
  } else {
    nav.setAttribute('data-state', 'expanded');
    this.setAttribute('data-state', 'active');
  }
});
