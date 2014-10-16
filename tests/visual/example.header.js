// Take a screenshot of the main header and check if it still matches the baseline

casper.start('output/index.html')
.then(function() {
  phantomcss.screenshot('#home', 'Main header');
});
/*
.then(function() {
  casper.fill('form.todo-form', {
    todo: 'Item1'
  }, true);

  phantomcss.screenshot('#todo-app', 'Item added');
})
.then(function() {
  casper.click('.todo-done');

  phantomcss.screenshot('#todo-app', 'Item checked off');
});
*/