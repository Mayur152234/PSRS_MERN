import React from 'react';

// Example 1: Greeting Component
function Greeting() {
  return <Welcome name='Mayur' age={23} />;
}

const Welcome = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your age is {props.age}</p>
    </div>
  );
};

// Example 2: Product Display
function ProductDisplay() {
  return <Product name='Laptop' price={50000} />;
}

const Product = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
    </div>
  );
};

// Example 3: User Profile
function UserProfile() {
  return <User username='Menur' city='Pune' />;
}

const User = (props) => {
  return (
    <div>
      <h2>User: {props.username}</h2>
      <p>Location: {props.city}</p>
    </div>
  );
};

// Example 4: Student Details
function StudentDetails() {
  return <Student name='Sanket' grade='A+' />;
}

const Student = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Grade: {props.grade}</p>
    </div>
  );
};

// Example 5: Car Component
function CarInfo() {
  return <Car brand='Maruti' model='Swift' />;
}

const Car = (props) => {
  return (
    <div>
      <h2>{props.brand}</h2>
      <p>Model: {props.model}</p>
    </div>
  );
};

// Example 6: Job Posting
function JobInfo() {
  return <Job title='Developer' company='Google' />;
}

const Job = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Company: {props.company}</p>
    </div>
  );
};

// Example 7: Simple Bio
function Bio() {
  return <Person name='Sakshi' hobby='Cooking' />;
}

const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
};

// Example 8: Task Component
function TaskDetails() {
  return <Task name='Shopping' status='Pending' />;
}

const Task = (props) => {
  return (
    <div>
      <h3>Task: {props.name}</h3>
      <p>Status: {props.status}</p>
    </div>
  );
};

// Main App Component
function Probs() {
  return (
    <div>
      <Greeting />
      <ProductDisplay />
      <UserProfile />
      <StudentDetails />
      <CarInfo />
      <JobInfo />
      <Bio />
      <TaskDetails />
    </div>
  );
}

export default Probs;
