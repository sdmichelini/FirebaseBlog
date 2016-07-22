import { test } from 'qunit';
import moduleForAcceptance from 'blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list posts');

test('visiting /list-posts', function(assert) {
  visit('/list-posts');

  andThen(function() {
    assert.equal(currentURL(), '/list-posts');
  });
});
