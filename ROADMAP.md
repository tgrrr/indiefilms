# Roadmap

### Currently doing

- [ ] Tests add/remove Watchlist buttons on SearchResults Page
  - BDD tests
  - Unit tests for add/remove Watchlist buttons

### Next Up

- [ ] Search Box

### Waiting

- [ ] Sync to API (Waiting on user authentication/login)

### Epics:

- Watchlist page with title, year, description
- Authentication / login page
- Deploy

### Testing

- Unit tests
- Eslint
- CSS tests
- Mocha and jUnit tests
- Move test search term into constants/examples

### Design

- Responsive images
- Cards for results
- Hide searchResults header for mobile view

---

### Done

- [x] Global state
- [x] Sticky searchResults header
- [x] Add to watchList from SearchResults Page
  - [x] Add/remove UI buttons
  - [x] Save to local storage
- [x] redux
  - [x] create actions/reducer files
  - [x] useReducer/useEffect file
  - [x] cancel async requests
    - [x] set axios cancel token

---

## Later

- thunks - Call api with thunks
- Loading placeholder
  - with react-loading-skeleton, react-loading or alternative

- Side-effects
  - API edge cases
  - API request failures
  - API request codes
  - set request loading state
    - check: https://www.npmjs.com/package/use-async-effect
    - check: https://www.npmjs.com/package/@use-hooks/axios
    - check:     "@cypress/webpack-preprocessor": "^4.1.0",

- Error notifications
- Continous Integration
- Convert into Chrome plugin
- Homepage
- Show api with [Swagger UI](https://www.npmjs.com/package/swagger-ui-react)
