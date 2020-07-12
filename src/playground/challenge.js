// ^ Challenge:
//#region challenge Section-3
const user = {
  middleName: "Y",
  lastName: "Harsoor",
  age: 25,
};
const userName = "Punitkumar";
const userLocation = "Bangalore";

// React-component-functions
const getLocation = (userLocation) => {
  if (userLocation) {
    return userLocation;
  } else {
    return "Unknown";
  }
};

const getAge = (userAge) => {
  if (userAge) {
    return <p>Age: {userAge}</p>;
  }
};

const templateEleOne = (
  <div>
    <h3>
      {userName.toUpperCase() +
        " " +
        user.middleName +
        " " +
        user.lastName.toUpperCase()}
    </h3>
    {getAge(user.age)}
    {/* Using `&&` operator */}
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    <p>Location: {getLocation(userLocation)}</p>
  </div>
);

const appRootOne = document.getElementById("app-challenge");
ReactDOM.render(templateEleOne, appRootOne);
//#endregion
