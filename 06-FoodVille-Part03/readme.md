# Agenda

- micro-services architecture
- micro-services Vs monolithic services
  - swiggy.com : 3000 -> /
  - swiggy.com : 4000 -> /dapi
  - swiggy.com : 5000 -> /contact
- Best place to call an API in REACT
  - page-loads => API call (300ms)=> render-Page (200ms) ==> 500ms
  - loads => render()[show some data](200 ms) => API call(300ms) => update the data on the page ==> 500ms // good way
- useEffect() : perform side-effects (API calls)
- Two times where components re-renders in React -
  - 1. When State of variables changes
  - 2. Props changes
- CORS policy
- Shimmer Effect
- Conditional rendering
- Login / Login Out using conditional rendering
