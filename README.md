# File Metadata Microservice

This project provides a simple "File Analyzer" API using Node.js, Express, and Multer for file uploads. It allows users to upload a file and receive information about its name, type, and size.

**Key Features:**

- File upload support using Multer middleware.
- Analyzes uploaded file name, type (MIME type), and size.
- Returns JSON response with file information.
- CORS-enabled for cross-origin requests.

**Getting Started:**

1. **Prerequisites:** Node.js and npm or yarn installed on your system.
2. **Clone this repository:** `git clone git@github.com:karimAoulallay/fcc-file-metadata-microservice.git`
3. **Install dependencies:** `npm install` or `yarn install`
4. **Run the project:** `npm start` or `yarn start`

**API Endpoint:**

- **`POST /api/fileanalyse`:**
  - Accepts file uploads using the `upfile` field in the multipart form data.
  - **Supported file types:** No explicit restrictions, but server limitations may apply.
  - **Response:** JSON object containing:
    - `name`: Original filename of the uploaded file.
    - `type`: MIME type of the uploaded file.
    - `size`: Size of the uploaded file in bytes.
