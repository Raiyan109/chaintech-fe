# To-Do List Application

This To-Do List application allows users to manage their tasks efficiently. Users can create, view, edit, mark as complete, and delete tasks. The application is built with simplicity and ease of use in mind, providing a seamless task management experience.

[Live Link](https://mellow-paprenjak-a90c80.netlify.app/)

## Features
- Task Management: Users can create tasks with a title and description, view a list of all tasks, mark tasks as completed, edit task details, and delete tasks.
- Persistence: Tasks are stored and retrieved from MongoDB using Mongoose, ensuring data persistence across sessions.
- Validation: Validation mechanisms ensure that task titles are not empty, prevent users from marking a task as complete if it's already marked as such, and handle errors gracefully with meaningful error messages.
- Documentation: The README.md file provides clear instructions on how to use the To-Do List application, along with explanations of the code structure and key decisions made during development.

## Installation
1. Clone the repository:

```bash
git clone https://github.com/Raiyan109/chaintech-fe 
```
```bash
git clone https://github.com/Raiyan109/chaintech-be 
```

2. Install dependencies:
```bash
npm install
```

3. Run the project:
```bash
npm run dev
```

4. Once the application is running, navigate to the provided URL in your web browser to access the To-Do List interface. From there, you can create, view, edit, mark as complete, and delete tasks as needed.

## Key Decisions

- Database Choice: MongoDB is chosen as the database for its flexibility, scalability, and ease of integration with Node.js applications.
- Error Handling: The application implements robust error handling mechanisms to provide users with meaningful error messages and enhance user experience with SweatAlert2.
- User Authentication: Although not included in the base requirements, future iterations of the application may incorporate user authentication for secure task management.

## Bonus Features
- Due Dates for Tasks: Optionally, users can set due dates for tasks to prioritize and manage deadlines effectively.
- Task Categorization: Users have the ability to categorize tasks based on project names, priority levels, or custom tags to streamline task organization. (Pending)
- Unit Tests: The application may include unit tests to ensure code reliability, maintainability, and adherence to specifications. (Pending)

## Author

This To-Do List application is authored by [Raiyan Kabir]. For inquiries or assistance, please contact [kraiyan109@email.com].