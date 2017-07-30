# speedrunapi [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[downloads-image]: https://img.shields.io/npm/dm/speedrunapi.svg
[downloads-url]: https://npmjs.org/package/speedrunapi
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com
[srcom-github]: https://github.com/speedruncom/api

## install

`yarn add speedrunapi` or `npm install --save speedrunapi`

## usage

This package makes use of `Promises`. No external library is being used, just the native one.

**NOTE: This package does NOT throttle your requests, that is up to you.**

Using some of the examples from the [Speedrun.com docs][srcom-github] page.

```js
const SpeedrunAPI = require('speedrunapi')
const sr = new SpeedrunAPI()

sr.games()
  .exec()
    .then(response => {
      response.items.forEach(function (el) {
        console.info(el.names.international)
      })
    })
```

The object will always respond with two elements, `items` and `pagination`. Items can be either an array of items or a single object. Pagination can be `null` depending on the request.

# building requests

The way this package works is by treating anything after the `{id}` in a docs page as a "method" and will have its own function to use. Any method that has a hyphen in it, like `derived-games` reverts to camelCase: `derivedGames`.

Use `param()` to add a parameter to the request. If you'd prefer to add many at once, feel free to use `params()`, which takes an array of objects of key=>value pairs.

To make an example, let's recreate this API request and build a request:

```
/api/v1/games?region=mol4z19n&released=1999
```
```js
sr.games()
  .param({region: 'mol4z19n'})
  .param({released: '1999'})
  .exec()
    .then(response => {
      console.info(response)
    })
```

To get a single `Game`:
```
/api/v1/games/v1pxjz68 // retrieves Super Mario Sunshine.
```
```js
sr.games('v1pxjz68')
  .exec()
    .then(response => {
      console.info(response)
    })
```

Embeds are supported too! Let's get the leaderboards for GTASA 100% and embed the game data too. `yo1yv1q5` is the id for GTASA and `wz27gz20` for the category of 100%.

Note the `[]` around the embed parameter. `embed` expects an array of embeds since it should only be called once.

```
/api/v1/leaderboards/yo1yv1q5/category/wz27gz20?embed=game
```
```js
sr.leaderboards('yo1yv1q5', 'wz27gz20')
  .embed(['game'])
  .exec()
    .then(response => {
      console.info(response)
    })
```

## authenticated requests

Allowing authenticated requests is simple.

1. See [Authentication on SpeedrunCom](https://github.com/speedruncom/api/blob/master/authentication.md) on how to get your API key.

2. Copy and paste your API Key a file named `.env` after the `APIKEY=`, so `APIKEY=yourapikey` in a file called `.env`.

Now you can feel free to make authenticated requests. As of writing, the only endpoints that are authenticated are `profile` and `notifications`. If your API key is invalid or unset, your request will throw an error.
