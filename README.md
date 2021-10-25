# RE Aerial Media

---

- This full stack application for RE Aerial Media is designed to assist in showcasing work to potential clients as well as providing them with testimonials and a contact page to inquire about products and services.
- Users have the ability to email RE Aerial Media directly from the contact page.
- Users have the ability of posting their own testimonials for everyone to see. Non users will not be able to post.

---

## Languages & Dependencies

---

- ReactJS
- Axios
- Dotenv
- Framer-motion
- Jwt-decode
- Nodemailer
- React-dom
- React-scripts
- Styled-components

---

## Other programs used

---

- Adobe Photoshop (to create Logos)
- SVG converter tool

---

## Code snippets I am proud of:

---

This code Gives the User a new token to allow users to view their updated profile info. without this code, the User must log out and log back in to view any changes.

```js
const updateUser = (e) => {
  axios
    .get(`${REACT_APP_SERVER_URL}/users/token`)
    .then((response) => {
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
    })
    .catch((error) => {
      console.log("===> Error on login", error);
    });
};
```

After creating the function, it was called inside of the Update container within the handleSubmit function.

```js
const handleSubmit = (e) => {
  e.preventDefault();
  const userData = { name, email };

  axios
    .put(`${REACT_APP_SERVER_URL}/users/update/${props.id}`, userData)
    .then((response) => {
      console.log(response);
      props.updateUser();
    })
    .catch((error) => {
      console.log("===> Error on login", error);
    });
};
```

---

## To install this app:

---

### Front-end:

- Please for and clone here https://github.com/rest2437/re-aerial-media-front
- Once cloned, open in your favorite editor.
- In your main file directory, create a .env file and input the following: "REACT_APP_SERVER_URL=https://localhost:8000"
- In your terminal, run "npm install" to install all dependencies
- next, run "npm start"

---

### Back-end:

- Please for and clone here https://github.com/rest2437/re-aerial-media-backend
- Once cloned, open in your favorite editor.
- In your main file directory, create a .env file and input the following: "MONGO_URI=mongodb://localhost:27017/reaerialmedia". on the second line, input the following: "JWT_SECRET=putwhateveryoudesirehere"
- In your terminal, run "npm install" to install all dependencies
- next, run "npm run start"
