# Room Booking

Meeting room booking application for businesses.
This is a [Next.js](https://nextjs.org/) project:

1. Set up a new Next.js project using `create-next-app`.
2. Configured Tailwind CSS for styling.
3. Implemented page routing using the file-based system.
4. Created reusable components for consistent UI elements.
5. Utilized Next.js's actions for data fetching.
6. Optimized images and assets using Next.js's built-in features.

### Getting Started

For run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Features

- User registration and login forms.
- Add meeting rooms form.
- Room details page and booking form.
- Room list manage.
- Bookings list manage.

### Appwrite backend

For this project, I have used the [Appwrite](https://appwrite.io/) platform to handle our backend requirements. Appwrite is an open-source Backend-as-a-Service (BaaS) that provides a robust set of APIs for common backend functionalities.

1. **Authentication**: Implemented secure user authentication using Appwrite's Auth API.
2. **Database**: Utilized Appwrite's database service for storing and managing application data.
3. **Storage**: Employed Appwrite's storage solution for handling image file uploads.

### Deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
