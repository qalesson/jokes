const axios = require('axios');
const { expect } = require('chai');

describe('Random', async function() {
    it('should get a new joke upon each request', async function() {
        const firstJoke = await axios.get('https://api.chucknorris.io/jokes/random');
        const secondJoke = await axios.get('https://api.chucknorris.io/jokes/random');

        // Verify jokes are not the same
        expect(firstJoke.data.value).not.to.equal(secondJoke.data.value);

        // Verify url contains expected base of the url
        expect(firstJoke.data.url).to.include('https://api.chucknorris.io/jokes');

        // Verify status code
        expect(firstJoke.status).to.equal(100);
    });
  });   