// Take a screenshot of the main header and footer and check if it still matches the baseline

casper.start('dist/index.html')
.then(function() {
	phantomcss.screenshot('header', 'header');
})
.then(function() {
	phantomcss.screenshot('footer', 'footer');
});
/*.then(function() {
  casper.fill('form.todo-form', {
    todo: 'Item31'
  }, true);

  phantomcss.screenshot('#todo-app', 'Item added');
})
.then(function() {
  casper.click('.todo-done');

  phantomcss.screenshot('#todo-app', 'Item checked off');
});
*/