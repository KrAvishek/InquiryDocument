<a name="readme-top"></a>
# InquiryDoc - The SaaS for Users

![InquiryDoc - The SaaS for Students](./ReadME%20Assests/Screenshot%202024-06-26%20164140.png "InquiryDoc - The SaaS for Students")

InquiryDoc is a cutting-edge chatbot platform that transforms how users interact with PDF documents. Utilizing the advanced OpenAI GPT-3 model and Langchain, InquiryDoc provides a streamlined multi-user experience for efficient document management and intelligent query resolution.

## Key Features

- **Multi-User Platform with Kinde Authentication:** The platform uses Kinde authentication to offer a secure and smooth multi-user experience. Users can easily create accounts, log in securely, and access all the platform's features.

- **Dashboard for File Management:** The intuitive dashboard allows users to upload, manage, and delete PDF files. These files are securely stored in a cloud database for easy access and reliability.

- **Interactive Chat Box:** The platform's main feature is its interactive chat box, where users can ask questions about their uploaded PDF documents and receive accurate responses in real time.

- **Chat History:** All interactions between users and the chatbot are saved, allowing users to review past conversations. This feature enhances the user experience by providing continuity and context.

- **User-Friendly Interface:** InquiryDoc boasts an easy-to-navigate interface designed to improve user experience. The design is intuitive, with smooth transitions and clear navigation between sections.

- **Feedback Page:** To continuously improve the platform, a feedback page is available for users to share their suggestions and thoughts. This helps the development team adapt and enhance the platform according to user needs.

- **Next.js and TypeScript with TRPC:** The project is built using Next.js and TypeScript for fast and efficient rendering on both client and server sides. TRPC ensures type safety and reliability throughout the application.

## Methodology: GenAI

The "GenAI" methodology combines the strengths of LangChain's Large Language Models (LLM), OpenAI's GPT-3 model, and PineCone cloud vector database to create an advanced and efficient document interaction platform. Here's an overview of the methodology:

1. **LangChain LLM and OpenAI Embeddings:** Each page of the PDF is converted into vector representations using LangChain's LLM and OpenAI embeddings. These vectors capture the semantic meaning and context of the pages for efficient querying and matching.

2. **Storage in PineCone Cloud Vector Database:** These vector representations are stored in the PineCone cloud vector database, which allows for fast and scalable retrieval, ensuring efficient query processing.

3. **Query Processing:** When a user submits a query, it is converted into a vector representation using LangChain LLM and OpenAI embeddings. This query vector is then used to find the best matching pages from the PDF stored in the PineCone database.

4. **Matching with PineCone:** PineCone is used to quickly search and retrieve the six most relevant vector pages from the PDF document based on the query vector, ensuring accurate and effective responses.

5. **Query History for Improved Accuracy:** The platform stores the last five queries and their results to refine future responses. This history helps understand user preferences and improve the matching process.

6. **Formatting Prompt for GPT-3:** The six most relevant vector pages, along with the query vector and the last ten messages' vectors, are formatted into a prompt. This prompt is structured to meet OpenAI's GPT-3 requirements for generating responses.

7. **Utilizing GPT-3 for Response Generation:** The formatted prompt is sent to OpenAI's GPT-3 model via an API call. GPT-3 generates a response based on the prompt, leveraging its advanced language generation capabilities.

8. **Real-time Response Streaming:** The GPT-3 generated response is saved in the database and streamed to the client in real-time, ensuring a smooth and immediate user experience.

In summary, the GenAI methodology leverages the power of LangChain LLM, OpenAI's GPT-3, and PineCone cloud vector database to create a sophisticated and efficient document interaction platform. By using advanced natural language processing and vector representation techniques, InquiryDoc delivers personalized and insightful responses to user queries in real-time.

## Frontend Specifications

### Tailwind CSS for Responsive Design
- **Responsive Design with Tailwind CSS:** Leveraged Tailwind CSS to apply modern and responsive design principles throughout the project. Tailwind CSS allows for the creation of responsive layouts and components with minimal CSS, enhancing both aesthetics and usability.

### ShadCn UI Library
- **UI Components with ShadCn:** Integrated ShadCn UI Library to simplify the development of fundamental UI components such as buttons, dialogue boxes, inputs, and text areas. This library reduces development overhead and ensures consistent UI components, resulting in a smoother user experience.

### React - PdfRender for PDF Document Rendering
- **PDF Rendering with react-PdfRender:** Implemented react-PdfRender to enable in-app rendering of PDF documents. This feature allows users to upload and view PDF files seamlessly within the application, enhancing document accessibility and usability.

### Chat Box Functionality
- **Interactive Chat Box:** Developed a chat box feature that allows users to interact with the chatbot for querying and receiving responses from the API. The chat box provides an intuitive interface for communication, facilitating user interaction and enhancing the overall user experience.

### Navigation and Page Design
- **Comprehensive Navigation and Pages:** Designed and implemented various pages including a navigation bar, dashboard, landing page, pricing page, and support page. The navigation bar ensures easy access to different sections, while the dashboard acts as a central hub for managing files and accessing features. The landing, pricing, and support pages provide relevant information and support to users, improving engagement and satisfaction.

### Next.js App Router
- **Efficient Client-Side Routing:** Utilized the Next.js app router for efficient client-side routing. This enhances navigation by providing fast and seamless transitions between pages, resulting in a smoother user experience.

By incorporating these frontend specifications, the project ensures a visually appealing, user-friendly, and responsive interface, enhancing usability and engagement for users.


### User Authentication
- **Secure User Authentication:** Implemented secure user authentication using Kinde Auth, ensuring that user accounts are protected and login processes are streamlined.

### Database Management
- **Efficient Data Storage with Neon Cloud PostgreSQL:** Utilized Neon Cloud PostgreSQL database for efficient and reliable data storage. Integrated PRISMA (ORM) to facilitate seamless interaction with the database. Maintained distinct tables for:
  - **User Information:** Storing user data.
  - **File Information:** Including userID, fileID, URL, and upload date.
  - **Message Information:** Related to uploaded files.

### File Hosting
- **Secure File Hosting with UploadThing:** Employed the UploadThing library built on Amazon AWS S3 service for secure hosting of PDF files, ensuring data security and reliability.

### Vector Database
- **Storing Vector Data with PineCone:** Leveraged PineCone Cloud Vector Database to store vector representations of PDFs and messages. Utilized OpenAI Embeddings and LangChain to generate these vector representations.

### Type Safety
- **TypeScript for Type Safety:** Ensured type safety throughout the front-end development process by using TypeScript, enhancing code reliability and maintainability.

### API Endpoint
- **Type-Safe API Interaction:** Created a TPRC (Thin Library built over React Query) endpoint for interacting with the backend API, ensuring that API responses are type-safe and reliable.

By implementing these backend specifications, the project achieves a secure, efficient, and scalable infrastructure, ensuring reliable performance and data management.


## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# kinde keys and urls
KINDE_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXX
KINDE_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
KINDE_ISSUER_URL=https://example.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<hostname>:<port>/InquiryDoc?sslmode=require"

# uploadthing api key and app id
UPLOADTHING_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=xxxxxxxxxxx

# app base url
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# pinecone api key
PINECONE_API_KEY=xxxxxxxxxx-xxxxx-xxxx-xxxxxx-xxxxxxxxxxx

# openai api key
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# stripe secret key, price id and webhook secret
STRIPE_SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_PRICE_ID=XXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


```

### 5. Next.js Telemetry

- **Environment Variable**: `NEXT_TELEMETRY_DISABLED=1`
- **Instructions**:
  - Open your Next.js project.
  - Locate the `.env` file.
  - Add or update the line `NEXT_TELEMETRY_DISABLED=1` to disable Next.js telemetry.

### 6. Kinde

- **Environment Variables**:
  - `KINDE_CLIENT_ID`
  - `KINDE_CLIENT_SECRET`
  - `KINDE_ISSUER_URL`
  - `KINDE_SITE_URL`
  - `KINDE_POST_LOGOUT_REDIRECT_URL`
  - `KINDE_POST_LOGIN_REDIRECT_URL`
- **Instructions**:
  - Visit [Kinde's website](https://example.kinde.com) and sign in to your account.
  - Navigate to your account settings or developer dashboard to find the API credentials.
  - Retrieve the following:
    - `KINDE_CLIENT_ID`
    - `KINDE_CLIENT_SECRET`
    - `KINDE_ISSUER_URL`
  - For redirect URLs:
    - `KINDE_SITE_URL`
    - `KINDE_POST_LOGOUT_REDIRECT_URL`
    - `KINDE_POST_LOGIN_REDIRECT_URL`

### 7. Neon Database URI

- **Environment Variable**: `DATABASE_URL="postgresql://<user>:<password>@<hostname>:<port>/InquiryDoc?sslmode=require"`
- **Instructions**:
  - Access your PostgreSQL database management interface.
  - Locate the database connection details.
  - Construct the URI following the provided template and replace the placeholders with your actual database credentials.

### 8. Uploadthing

- **Environment Variables**:
  - `UPLOADTHING_SECRET`
  - `UPLOADTHING_APP_ID`
- **Instructions**:
  - Visit the Uploadthing developer dashboard or website.
  - Log in to your account and navigate to the API or application settings.
  - Retrieve `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID`.

### 9. App Base URL

- **Environment Variable**: `NEXT_PUBLIC_BASE_URL=http://localhost:3000`
- **Instructions**:
  - Simply set `NEXT_PUBLIC_BASE_URL=http://localhost:3000` in your `.env` file.

### 10. Pinecone API Key

- **Environment Variable**: `PINECONE_API_KEY=xxxxxxxxxx-xxxxx-xxxx-xxxxxx-xxxxxxxxxxx`
- **Instructions**:
  - Visit Pinecone's official website and log in to your account.
  - Navigate to the API or developer section to find your API key.
  - Retrieve `PINECONE_API_KEY`.

### 11. OpenAI API Key

- **Environment Variable**: `OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Instructions**:
  - Log in to your OpenAI account on the official website.
  - Navigate to the API or developer dashboard.
  - Retrieve your API key.

### 12. Stripe

- **Environment Variables**:
  - `STRIPE_SECRET_KEY`
  - `STRIPE_PRICE_ID`
  - `STRIPE_WEBHOOK_SECRET`
- **Instructions**:
  - Log in to your Stripe account.
  - Navigate to the API or developer section.
  - Retrieve the following:
    - `STRIPE_SECRET_KEY`
    - `STRIPE_PRICE_ID`
    - `STRIPE_WEBHOOK_SECRET`

13. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.


## :camera: Screenshots
- **Home Page**:
![Screenshot](https://raw.githubusercontent.com/KrAvishek/InquiryDocument/main/ReadME%20Assests/Screenshot%202024-06-26%20164140.png)

- **Dashboard Page**:
![Screenshot](https://raw.githubusercontent.com/KrAvishek/InquiryDocument/main/ReadME%20Assests/Screenshot%202024-06-26%20163103.png)
- **ChatBot**:
![Screenshot](https://raw.githubusercontent.com/KrAvishek/InquiryDocument/main/ReadME%20Assests/Screenshot%202024-06-26%20163245.png)
- **Pricing Page**:
![Screenshot](https://raw.githubusercontent.com/KrAvishek/InquiryDocument/main/ReadME%20Assests/Screenshot%202024-06-26%20164058.png)
- **Support Page**:
![Screenshot](https://raw.githubusercontent.com/KrAvishek/InquiryDocument/main/ReadME%20Assests/Screenshot%202024-06-26%20164030.png)







## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Postgresql](https://skillicons.dev/icons?i=postgres "Postgresql")](https://www.postgresql.org/ "Postgresql")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.
