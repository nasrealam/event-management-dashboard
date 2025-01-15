# Event Management Dashboard (Frontend)

This project is an event management dashboard designed to manage events and display analytics using a responsive and interactive user interface. Below are the details of the technologies used and features implemented.

## Technologies Used

- **Angular**: Version 19, used as the primary framework for building a dynamic and modular frontend.
- **Angular Material**: Version 19, utilized for designing responsive and consistent UI components.
- **SweetAlert2**: A lightweight library used for displaying success, delete, and other messages with beautiful alerts.
- **swimlane/ngx-charts**: Version 21.0.0, used to create visually appealing charts for displaying analytics on the dashboard.
- **JSON-Server**: A simple library used as a mock backend to save and fetch event data for the application.

## Features

1. **Event Management**:

   - Users can create, view, edit, and delete events.
   - Event attributes include:
     - Event Name
     - Date & Time
     - Location
     - Status (Upcoming, Ongoing, Completed)

2. **Analytics Dashboard**:

   - Displays the total number of events.
   - Categorizes events based on their status (Upcoming, Ongoing, Completed).
   - Highlights the next upcoming event.

3. **Paginated Event List**:

   - Lists all events in a paginated table.
   - Sorting by date, name, or status.

4. **Search and Filters**:

   - Search for events by name or location.
   - Filter events by status.

5. **Responsive Design**:
   - Fully responsive for both desktop and mobile devices.

## How to Run Locally

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally.

### Steps to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/nasrealam/event-management-dashboard.git

   ```

2. Navigate to the project directory:
   cd <project-directory>

3. Open vs code terminal & Install dependencies:
   run npm install,
   After npm install run ng serve or ng s

4. Start another terminal without killing the existing one.
   Run json-server --watch db.json --port 3100
