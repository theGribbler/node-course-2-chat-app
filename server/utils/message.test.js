var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'jen';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', ()=> {
  it('should generate correct location object', () => {
  var from = 'Deebz';
  var latitude = 45;
  var longitude = 1;
  var url = 'https://www.google.com/maps?q=45,1'  ;
  var message = generateLocationMessage(from, latitude, longitude);

  expect(message.createdAt).toBeA('number');
  expect(message).toInclude({from, url});

  });
});
