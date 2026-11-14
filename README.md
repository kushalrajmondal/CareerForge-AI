# CareerForge AI 

**An AI-powered Resume Builder that helps users create, customize, and manage professional resumes with ease.**

CareerForge AI is a full-stack web application designed to simplify the resume-building process, especially for students and freshers. It provides an intuitive editor, real-time resume preview, and AI-powered content suggestions to help users create professional resumes.

##  Features

- **User Authentication:** Secure sign-in and user authentication using Clerk.
- **AI-Powered Content Generation:** Generate professional resume summaries and experience descriptions using Groq AI.
- **Multiple Resumes:** Create and manage multiple resumes.
- **Resume Editor:** Add and edit personal details, education, experience, skills, and professional summaries.
- **Live Preview:** Preview resume changes in real time.
- **Resume Management:** View, update, and delete saved resumes.
- **Responsive UI:** Clean and user-friendly interface.

##  Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript
- Axios

### Backend
- Strapi 5
- Node.js
- MySQL
- REST API

### Authentication & AI
- Clerk – Authentication
- Groq API – AI-powered content generation

### Database & Hosting
- MySQL
- Aiven Cloud Database

##  Project Structure

```text
CareerForge-AI/
│
├── ai-resume-builder/       # React frontend
│   ├── src/
│   ├── service/
│   ├── public/
│   └── package.json
│
├── strapi_backend/          # Strapi backend
│   ├── config/
│   ├── src/
│   ├── types/
│   └── package.json
│
├── .gitignore
└── README.md
```

##  Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kushalrajmondal/CareerForge-AI.git
```

```bash
cd CareerForge-AI
```

### 2. Setup the Backend

```bash
cd strapi_backend
npm install
```

Configure the required database credentials and environment variables in your local `.env` file according to the Strapi configuration.

Start the Strapi development server:

```bash
npm run develop
```

### 3. Setup the Frontend

Open another terminal:

```bash
cd ai-resume-builder
npm install
```

Configure the required frontend environment variables in `.env.local`, including the API base URL and credentials required by the application.

Start the frontend:

```bash
npm run dev
```

The frontend development server will provide a local URL in the terminal.

##  AI Integration

CareerForge AI integrates Groq AI to assist users in generating:

- Professional resume summaries.
- Experience descriptions and bullet points.
- AI-generated content tailored to different experience levels.

##  Database

The application uses MySQL for storing resume information, with Strapi managing the backend content and REST API operations.

##  Security Note

- Never commit `.env` or `.env.local` files.
- Never expose private API keys or production credentials in frontend code.
- For production deployment, sensitive API operations should be handled securely on the backend.

##  Future Improvements

- Additional professional resume templates.
- PDF customization and formatting options.
- Improved AI-generated content.
- Resume scoring and optimization.
- Enhanced security and backend authorization.

##  Author

**Kushal Raj Mondal**

MCA Student | AI & IoT

GitHub: [@kushalrajmondal](https://github.com/kushalrajmondal)

---

⭐ If you find this project useful, consider giving it a star!