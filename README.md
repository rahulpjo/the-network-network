<!-- CODENAME: BANANA -->

# Project Overview

## Project Name

The Network Network

## Project Description

The Network Network (or TNN) is an app that allows people to get rid of their anxiety that comes with networking by posting templates of their messages and having people review/give notes on it!

## Wireframes

#### Home Page

![TNN Home Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948854/TheNetworkNetwork/the-network-network-01_vhnfty.png)

#### Post Page

![TNN Post Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948853/TheNetworkNetwork/the-network-network-03_wsoijf.png)

#### Form Page

![TNN Form Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948853/TheNetworkNetwork/the-network-network-02_innmzk.png)

#### Mobile Home Page

![TNN Mobile Home Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948854/TheNetworkNetwork/the-network-network-04_nugfq7.png)

#### Mobile Post Page

![TNN Mobile Post Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948854/TheNetworkNetwork/the-network-network-06_sjk5zy.png)

#### Mobile Form Page

![TNN Mobile Form Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948854/TheNetworkNetwork/the-network-network-05_jwkv7d.png)

## Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/dszox5xnw/image/upload/v1624923627/TheNetworkNetwork/TNN_xpl4dr.png)

## API and Data Sample

### Example Link:

https://api.airtable.com/v0/AIRTABLE_BASE_ID/posts?api_key=YOUR_API_KEY

### Example Data:

```json
{
  "records": [
    {
      "id": "rec30YpXrxvXPHxrd",
      "fields": {
        "text": "I'm pleased to meet you! My name is AmbitiousAnt, I'm a recent graduate from {College/University}; I noticed you're also a fellow {SchoolMascot} and was wondering if you were open to speaking about your experience at {Company}!",
        "postedBy": "AmbitiousAnt",
        "votes": 7,
        "comments": [
          "recRnrj0QvnWwfsyc",
          "rechUuhsm1P5nAmdg",
          "recsr77OJYmDffzJO"
        ]
      },
      "createdTime": "2021-06-28T20:17:42.000Z"
    },
    {
      "id": "recc2dXqPJwJA6eRB",
      "fields": {
        "text": "What's up, how are you doing?",
        "postedBy": "CoolKid",
        "votes": -3,
        "comments": ["recEhiL5BFaRPfdJX", "rec7I0slt2y2KlamU"]
      },
      "createdTime": "2021-06-28T20:17:42.000Z"
    },
    {
      "id": "reck5iaBlJEc3uLtg",
      "fields": {
        "comments": [
          "recg1OnOCQfjza7JV",
          "rec63nTLCjFhIOrmB",
          "recJ9YUB9pXH1h5x1"
        ],
        "votes": 2,
        "text": "Hello my name is JumpingJellyfish, it's nice to meet you!",
        "postedBy": "JumpingJellyfish"
      },
      "createdTime": "2021-06-28T20:17:42.000Z"
    }
  ]
}
```

### MVP/Post MVP

#### MVP

- Create structure of site entirely in React (including React Router)
- Create an Airtable base and handle GET, POST, and PUT axios requests
- Render posts from base onto page
- Create/render forms to let users add and edit posts
- Style components using CSS and create page structure using flexbox
- Make site responsive on at least two screen sizes
- Deploy site and use environment variables to hide API keys

#### Post MVP

- Add votes/comment functionality
- Use local storage to save username and restrict deleting/editing
- Add Favorites page to show user in local storage's most recent upvotes
- Implement sorting to show posts by recency or by votes
- Animate buttons/forms for enhanced user experience

## Project Schedule

| Day        | Deliverable                                   | Status     |
| ---------- | --------------------------------------------- | ---------- |
| June 28-29 | Prompt / Wireframes / Timeframes              | Complete   |
| June 29    | Project Approval                              | Complete   |
| June 30    | Core Application Structure (React, CSS, etc.) | Incomplete |
| July 1     | Axios Requests/Form Handling/Rendering        | Incomplete |
| July 2     | MVP/Deployment                                | Incomplete |
| July 6     | Post-MVP                                      | Incomplete |
| July 7     | Presentations                                 | Incomplete |

## Timeframes

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Prep/Planning                 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Wireframes/Logo Design        |    H     |     2.5hrs     |     2hrs      |    2hrs     |
| Initial React Structure       |    H     |     2.5hrs     |     2hrs      |             |
| Page Styling                  |    M     |      2hrs      |     2hrs      |             |
| Component Styling             |    M     |     2.5hrs     |     3hrs      |             |
| Routing Setup                 |    H     |     1.5hrs     |      1hr      |             |
| Airtable Setup                |    H     |      2hrs      |               |             |
| Axios Requests                |    H     |      3hrs      |               |             |
| Responsiveness                |    M     |      2hrs      |               |             |
| Posts Rendering               |    H     |     2.5hrs     |               |             |
| Auxiliary Component Rendering |    H     |      3hrs      |               |             |
| Form Setup                    |    M     |     2.5hrs     |               |             |
| Form Handling                 |    H     |      3hrs      |               |             |
| Favorites Page Setup          |    L     |      3hrs      |               |             |
| Debugging                     |    M     |      3hrs      |               |             |
| Animation                     |    L     |      2hrs      |               |             |
| Deployment                    |    H     |      2hrs      |               |             |
| Total                         |          |     42hrs      |     13hrs     |    5hrs     |

## SWOT Analysis

### Strengths:

I have a comfort with React that I've developed over the weeks that I think will really come in handy when doing things like my initial construction and making things components. I also have a pretty solid idea of the order in which I want to attack everything so I think my foresight will really be my biggest strength.

### Weaknesses:

I am most worried about working with local storage in the Post MVP because I haven't really used it before. I think it might prove to be a bit of a learning curve so I'm going to save that for towards the end. I also think the comment functionality will take a while, especially when thinking about how I want to allow users to input comments.

### Opportunities:

I have the opportunity to work with an easier version of a back-end database with the Airtable API, so I'm really excited to have my fundamentals of that down. I also have to get a peek into new opportunities and more advanced functionalities with everything I've learned in React so far.

### Threats:

I definitely have the tendency of overthinking things or trying to accomplish so much that it actually detracts from the overall quality of the project. To remedy this, I want to make sure not to start the post MVP or less important aspects of the app before I have everything in the MVP completely done and working.
