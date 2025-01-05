link :- https://natours-rdu8.onrender.com
![2](https://github.com/user-attachments/assets/6f7e8073-b799-41f9-a523-8c23de067f74)
I built a full-stack $${\color{red}Tour Management}$$ System using $${\color{red}Node.js, Express.js, MongoDB,}$$ and $${\color{red}Pug}$$. The application allows users to explore, book, and manage tours efficiently. The backend handles tour data and user interactions through secure and $${\color{red}well-structured APIs}$$, while the frontend, built with Pug, provides a dynamic and user-friendly interface. The home page displays ongoing tours with real-time updates and a section featuring reviews and highlights for past tours. This project showcases robust backend development and a visually appealing and functional frontend.

Features for Authentication and User Management:
$${\color{red}JWT Authentication}$$:

Tokens are generated upon successful login or signup.
Secure routes like profile updates, viewing previous bookings, and bookings management are protected using middleware to validate tokens.
"Me" Section:

Users can $${\color{red}update}$$ their $${\color{red}password}$$ securely by providing the current password for validation.
Users can edit personal details, such as name, email, and profile picture.
View Previous Bookings:


Users can access a dedicated section showing a history of their bookings.
Each booking entry includes the tour name, dates, and payment status, retrieved efficiently from MongoDB.
$${\color{red}MongoDB}$$ Schema Enhancements:
$${\color{red}User Schema}$$: Includes fields for name, email, password, role (admin or user), and bookings (referencing tour data).
$${\color{red}Tour Schema}$$: Linked with bookings, containing name, location, dates, and associated user IDs.

<img width="1440" alt="Screenshot 2025-01-04 at 7 08 08 PM" src="https://github.com/user-attachments/assets/02a7ad9b-b5d6-4ec3-9003-7366990aba25" />
<img width="1440" alt="Screenshot 2025-01-04 at 7 08 32 PM" src="https://github.com/user-attachments/assets/49bcfde1-fa4b-4ef6-8228-051c91dbc93f" />

The Tour Management System includes comprehensive details for each tour, such as the tour day, difficulty level, duration (days to complete the tour), start date, location, tour guide, ratings, and an average rating to help users make informed decisions. Each tour is also accompanied by a descriptive paragraph highlighting its unique features and experiences.

<img width="1440" alt="Screenshot 2025-01-04 at 7 09 26 PM" src="https://github.com/user-attachments/assets/05143f82-dc14-4d82-9c0e-5584f26c2d53" />




I designed a well-structured MongoDB schema using Mongoose to ensure efficient data handling. The schema captures essential tour attributes, such as:

Basic Details: Name, difficulty, duration, and location.
Ratings: An array of individual ratings, automatically calculating the average.
Relationships: References to a User collection for tour guides, enabling efficient lookups.
Date and Time Management: Start date and timestamps for created and updated records.
The schema design ensures data consistency and scalability, allowing for easy integration of advanced features like filtering, sorting, and aggregation. This approach balances performance and flexibility in managing complex tour data.
<img width="1440" alt="Screenshot 2025-01-04 at 7 08 44 PM" src="https://github.com/user-attachments/assets/8d54ee63-9dce-4004-bc1e-ee963294160f" />

I incorporated $${\color{red}Mapbox}$$ into the Tour Management System to provide an interactive and visually appealing map for each tour's location. Users can view the tour's exact starting point and essential landmarks on a dynamic map, enhancing the overall experience and helping them plan their trips better.

The MongoDB schema was designed to integrate seamlessly with Mapbox by including geospatial data fields, such as:

$${\color{red}Location Coordinates}$$: Stored as $${\color{red}GeoJSON}$$ objects (type and coordinates) representing the tour's exact location.
Start Location: Includes coordinates, address, and description of the starting point.
Stops: An array of coordinates for significant points or waypoints during the tour.
This structured schema allowed efficient use of Mapbox's geospatial features, such as displaying markers, routes, and region highlights, providing users with a real-world visualization of their selected tours.

<img width="1440" alt="Screenshot 2025-01-04 at 7 08 51 PM" src="https://github.com/user-attachments/assets/2ebb241d-be66-461d-8c7d-ed4cf2b15408" />

<img width="1440" alt="Screenshot 2025-01-04 at 7 08 59 PM" src="https://github.com/user-attachments/assets/d05069d6-544c-4580-b570-3d00f74a2cf3" />

Users can book tours directly through the platform using $${\color{red}Stripe's}$$ payment gateway, ensuring secure transactions with multiple payment options. After selecting a tour, users are guided to a checkout page where they can enter payment details and confirm their booking.

To support this feature, the backend was designed to handle:

$${\color{red}Booking Management}$$: Storing booking details in MongoDB, including user information, selected tour, payment status, and transaction ID.
Stripe Integration: APIs were implemented to create payment sessions, process payments, and verify successful transactions.
Real-time Updates: Tour availability and user booking history are updated dynamically upon successful payment.
This implementation simplifies the booking process and ensures high security and scalability for handling multiple transactions efficiently.

<img width="1440" alt="Screenshot 2025-01-04 at 7 09 05 PM" src="https://github.com/user-attachments/assets/9df3685b-3025-4457-a401-8e9a662041cd" />








