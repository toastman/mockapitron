## Mockapitron

**Read more on [http://toastman.github.io/mockapitron/](http://toastman.github.io/mockapitron/)**

This is the tool for generating random api response based on [dream.js](https://github.com/adleroliveira/dreamjs)

## What do you need to get started ?

Send **GET** request to [http://api-mockapitron.rhcloud.com/](http://api-mockapitron.rhcloud.com/) with **size** and all other data that you expect in response

Usage example:

```javascript
fetch('http://api-mockapitron.rhcloud.com/?size=3&name=name&address=address')
.then(function(res){ return res.json() })
.then(function(data){ console.log(data) })
```

Result:

```javascript
[
  {
    name: "Johanna Yates",
    address: "562 Nadleh Manor"
  },
  {
    name: "Minnie Lewis",
    address: "1197 Janaw Junction"
  },
  {
    name: "Travis Burke",
    address: "998 Jihiz Drive"
  }
]
```

Send **POST** request to [http://api-mockapitron.rhcloud.com/](http://api-mockapitron.rhcloud.com/) with **schema** and **size** parameters
> Default values for parameters { schema:{}, size:0 }

Usage example:

```javascript
fetch('http://api-mockapitron.rhcloud.com/', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: "cors",
  body: JSON.stringify({
    schema: {
      name: "name",
      address: "address"
    },
    size: 3
  })
})
.then(function(res){ return res.json() })
.then(function(data){ console.log(data) })
```

Result:

```javascript
[
  {
    name: "Johanna Yates",
    address: "562 Nadleh Manor"
  },
  {
    name: "Minnie Lewis",
    address: "1197 Janaw Junction"
  },
  {
    name: "Travis Burke",
    address: "998 Jihiz Drive"
  }
]
```

## Standard schema property types:
* String
* Number
* Date
* Boolean
* Array

## Few custom schema property types:
* Name
* Age
* Address
* Gender
* (RGB) color

Full list of available schema property types are available [here](http://chancejs.com/)
