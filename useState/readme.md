### Exercise: Mastering `useState` in React

In this exercise, you’ll learn how to use the `useState` hook for managing state in various scenarios, including basic usage, arrays, objects, and arrays of objects.

#### Step 1: Basic Usage of `useState`

1. Create a new file called `Counter.jsx`.
2. Inside this file, create a functional component called `Counter`.
3. Use `useState` to manage a simple counter state.
   - Initialize the state with a value of `0`.
   - Create a button to increment the counter by `1` when clicked.
   - Display the current value of the counter.

#### Step 2: `useState` with an Array of Data

1. Create a new file called `TodoList.jsx`.
2. Inside this file, create a functional component called `TodoList`.
3. Use `useState` to manage an array of todo items.
   - Initialize the state with an empty array.
   - Create a form to add new todo items to the list.
   - Display the list of todo items.

#### Step 3: `useState` with an Object of Data

1. Create a new file called `Profile.jsx`.
2. Inside this file, create a functional component called `Profile`.
3. Use `useState` to manage an object with user profile information.
   - Initialize the state with an object containing `name` and `age`.
   - Provide input fields to update the `name` and `age`.
   - Display the updated profile information.

#### Step 4: `useState` with an Array of Objects

1. Create a new file called `ShoppingList.jsx`.
2. Inside this file, create a functional component called `ShoppingList`.
3. Use `useState` to manage an array of objects, where each object represents a shopping item with `name` and `quantity`.
   - Initialize the state with an empty array.
   - Create a form to add new items to the list.
   - Display the list of shopping items.

#### Step 5: `useState` Toggling a Feature

1. Create a new file called `ToggleFeature.jsx`.
2. Inside this file, create a functional component called `ToggleFeature`.
3. Use `useState` to manage a boolean value, starting with false.
   - Add a button that toggles the feature on and off.
   - Display a message like "Feature is ON" or "Feature is OFF" based on the state.

#### Step 6: `useState` with Multiple Counters

1. Create a new file called `MultiCounter.jsx`.
2. Inside this file, create a functional component called `MultiCounter`.
3. Use `useState` to manage two different counters.
   - Display both counters.
   - Add two separate buttons, one for incrementing the first counter and another for incrementing the second counter.

#### Step 7: `useState` with Conditional Rendering

1. Create a new file called `ShowHideComponent.jsx`.
2. Inside this file, create a functional component called `ShowHideComponent`.
3. Use `useState` to manage a boolean state (`true` or `false`).
   - Add a button that toggles the visibility of a text paragraph.
   - When the state is `true`, the paragraph should be visible. When `false`, it should be hidden.

#### Step 8: `useState` to Handle Form Data

1. Create a new file called `UserForm.jsx`.
2. Inside this file, create a functional component called `UserForm`.
3. Use `useState` to manage form input data (e.g., `name`, `email`, `password`).
   - Create input fields for each data point (name, email, password).
   - Display the submitted values in a summary section below the form when a `"Submit"` button is clicked.

#### Step 9: `useState` with Dynamic Lists

1. Create a new file called `FavoriteMovies.jsx`.
2. Inside this file, create a functional component called `FavoriteMovies`.
3. Use `useState` to manage an array of favorite movies.
   - Create an input field and a button that adds a new movie to the list.
   - Display the list of movies dynamically as they are added.
   - Add a button to remove a specific movie from the list.

#### Step 10: `useState` with a Timer

1. Create a new file called `Timer.jsx`.
2. Inside this file, create a functional component called `Timer`.
3. Use `useState` to manage a `seconds` state that starts from `0`.
   - Add buttons to `"Start"`, `"Pause"`, and `"Reset"` the timer.
   - Display the timer’s value (in seconds) and ensure that it increments by `1` every second when started.

#### Step 11: `useState` for Theme Switching

1. Create a new file called `ThemeSwitcher.jsx`.
2. Inside this file, create a functional component called `ThemeSwitcher`.
3. Use `useState` to manage the current theme (e.g., `light` or `dark`).
   - Add a button to toggle between `"Light"` and `"Dark"` themes.
   - Change the background color and text style based on the selected theme.

#### Step 5: Render All Components in `App.jsx`

1. In your `App.jsx` file, import the `Counter`, `TodoList`, `Profile`, `ShoppingList`, `ToggleFeature` ,`MultiCounter`, `ShowHideComponent`, `UserForm` , `FavoriteMovies` , `Timer` and `ThemeSwitcher` components:

   ```jsx
   import Counter from "./Counter";
   import TodoList from "./TodoList";
   import Profile from "./Profile";
   import ShoppingList from "./ShoppingList";
   import ToggleFeature from "./ToggleFeature";
   import MultiCounter from "./MultiCounter";
   import ShowHideComponent from "./ShowHideComponent";
   import UserForm from "./UserForm";
   import FavoriteMovies from "./FavoriteMovies";
   import Timer from "./Timer";
   import ThemeSwitcher from "./ThemeSwitcher";
   ```

2. Inside the `App` component, render all four components:

   ```jsx
   function App() {
     return (
       <div>
         <h1>React useState Examples</h1>
         <Counter />
         <TodoList />
         <Profile />
         <ShoppingList />
         <ToggleFeature />
         <MultiCounter />
         <ShowHideComponent />
         <UserForm />
         <FavoriteMovies />
         <Timer />
         <ThemeSwitcher />
       </div>
     );
   }

   export default App;
   ```
