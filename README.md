Role-Based Authentication System 🚀
A secure and scalable authentication system with role-based access control (RBAC) using Node.js, Express.js, MongoDB, and JWT. This system allows users to sign up, log in, and access different routes based on their assigned roles (Admin, User, Manager).

🛠 Features
✅ User Authentication – Signup & Login with password hashing.
✅ Role-Based Access Control – Different roles with restricted access.
✅ JWT Authentication – Secure login system with token-based authentication.
✅ MongoDB Integration – Stores user data efficiently.
✅ Protected Routes – Middleware to restrict unauthorized access.
✅ Password Hashing – Uses bcrypt.js for secure storage.
✅ Environment Variables – Uses .env for secure configurations.

📌 Technologies Used
Technology	Description
Node.js	        Backend runtime environment
Express.js	Web framework for Node.js
MongoDB	        NoSQL database to store users
JWT	        Secure authentication
bcrypt.js	Password hashing
dotenv	        Environment variable management
Mongoose	ODM for MongoDB

📂 Project Structure
📦 role-based-auth
 ┣ 📂 config
 ┃ ┣ 📜 db.js                # MongoDB connection setup
 ┣ 📂 middleware
 ┃ ┣ 📜 authMiddleware.js    # Role-based access control
 ┣ 📂 models
 ┃ ┣ 📜 User.js              # User schema/model
 ┣ 📂 routes
 ┃ ┣ 📜 authRoutes.js        # Authentication routes
 ┃ ┣ 📜 userRoutes.js        # Protected routes for different roles
 ┣ 📜 .env                   # Environment variables
 ┣ 📜 server.js              # Main server file
 ┣ 📜 package.json           # Dependencies & scripts
 ┣ 📜 README.md              # Project documentation

⚡ Installation & Setup
1️⃣ Clone the repository
        git clone https://github.com/yourusername/your-repository.git
        cd your-repository

2️⃣ Install dependencies
        npm install

3️⃣ Configure environment variables
Create a .env file in the root directory and add the following:
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_secret_key

4️⃣ Start the server
        npm start
The server will start at http://localhost:5000 🚀

📡 API Endpoints
Method	 Endpoint	Description	                Protected?
------   -------        -----------                     ---------
POST	 /signup	Register a new user	        ❌ No
POST	 /login	        Login and receive JWT token	❌ No
GET	 /admin	        Access Admin Dashboard	        ✅ Yes (Admin)
GET	 /user	        Access User Dashboard	        ✅ Yes (User)
GET	 /manager	Access Manager Dashboard	✅ Yes (Manager)

🛡 Middleware & Authentication Flow
1️⃣ User Signs Up → Enters details → Password is hashed and stored in MongoDB.
2️⃣ User Logs In → JWT token is generated → Sent in response.
3️⃣ Protected Routes → Middleware checks token and verifies the user's role.

👨‍💻 Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (feature-branch)
3. Commit changes (git commit -m "Added a new feature")
4. Push to the branch (git push origin feature-branch)
5. Open a Pull Request

📧 Contact
GitHub: abdullah-hub17
Email: abdullaharshed7@gmail.com
