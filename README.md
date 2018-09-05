# Vue Exercise

Please submit a pull request to this repo implementing the following feature:

Create a Vuex module and component(s) to display blog post data from the following web service:

<https://jsonplaceholder.typicode.com/posts>

- Display the posts for the current user in the left column, and posts for all other users in the right column. For the purposes of this exercise, you can hard-code the “current user ID” to 1.
- Handle both loading and error states.
- Unit test both the Vuex module and component(s). Cover all the important behavior of the code with tests, and get 100% test coverage for all metrics shown in the unit test output. For the purposes of this exercise, don't worry about doing any end-to-end testing.
- Add enough CSS to get the left/right column layout and make it look clean, but don’t worry about too fancy styling.

Feel free to reach out to <jjustice@bignerdranch.com> with questions!

## Approach taken

The project is publicly available at https://vigorous-easley-50e857.netlify.com

The approach to complete the excercise can be described by the steps below:

1. Desing a simple interface.
2. Build the components as needed.
3. Create the Vuex store, modules, actions, getters, etc.
4. Connect the components to the store (mapState, mapGetters, etc).
5. Write a bunch of tests.
6. Refactor if needed.

I did not took a TDD approach because I wanted to first learn about the Vue's best practices and common guidelines. I come from a ReactJS background so it was important for me to learn those first and then the testing styles and conventions such as using `@vue/test-utils` and how to test Vuex modules as well as components connected to them.

Vue is an awesome technology and a lot of fun to work with. I enjoyed this very much and would like to build more stuff using it.

## TO-DO

I would like to add some things to this project such as:

- Typescript support.
- Routing (using [vue-router](https://router.vuejs.org/)).
- Post page (so users can click each post and see the comments, and info about who created it).
- NewPost page (so users can create new Posts).
- Integration tests (to make sure things are working fine together).

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit:watch
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
