### Trackr- Project Manager 
(Inspired by Jira)

![1738799164033](image/README/1738799164033.png)
![1738799234322](image/README/1738799234322.png)


1. Developed a full-stack project management application with user authentication, task tracking, and real-time collaboration.
2. Implemented secure authentication using Clerk, ensuring seamless user onboarding and access control.
3. Designed and optimized PostgreSQL database schema with Prisma ORM for efficient data handling and scalability.
4. Integrated real-time updates to keep team members synchronized on project progress.
5.Leveraged Next.js 14 for server-side rendering and optimized performance, improving page load speeds.
6. Styled with Tailwind CSS, ensuring a modern and responsive UI across all devices.
7. Deployed on Vercel, ensuring high availability and minimal downtime.

Technologies Employed:
Frontend: Next.js 14, React
Authentication: Clerk
Database: Prisma ORM, PostgreSQL
Styling: Tailwind CSS
Deployment: Vercel


### Make sure to create a `.env` file with following variables -

DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
