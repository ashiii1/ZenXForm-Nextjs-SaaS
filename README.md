# NeuroForms: AI-Powered Form Builder SaaS

Welcome to NeuroForms, an innovative SaaS application designed to simplify the process of form creation through the power of AI. NeuroForms combines the flexibility of React and Next.js with the style of TailwindCSS, and uses the Gemini API to create dynamic, intelligent forms tailored to your needs.


https://github.com/user-attachments/assets/7a826770-ae15-4acf-8baa-0850a055f71d




## 🚀 Features

- **AI-Driven Form Generation**: Generate intelligent forms using Google Gemini API.
- **Customizable Themes**: Choose from over 20 pre-designed themes using TailwindCSS and Daisy UI.
- **Secure Authentication**: Utilize Clerk for social and email/password authentication.
- **Dynamic Form Management**: Easily edit and customize form fields.
- **Real-Time Live Previews**: See changes as you make them with live form previews.
- **User Response Management**: Record, save, and export user responses.
- **Neon PostgreSQL**: Manage your database with the scalability and flexibility of Neon PostgreSQL.

## 📦 Installation

To get started with NeuroForms, follow these steps:

1. Clone the repository:
   ```bash
   https://github.com/Tereshaa/NeuroForms.git
   cd neuroforms
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables: Create a .env.local file and add the necessary environment variables.
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=
   NEXT_PUBLIC_DATABASE_URL_CONFIG=
   NEXT_PUBLIC_GEMINI_API_KEY=
   NEXT_PUBLIC_BASE_URL=
4. Run the development server:
   ```bash
   npm run dev
5. Open http://localhost:3000 in your browser to view the app.
 
