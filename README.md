# Product Listing Page

This is a Next.js application for displaying a product listing page. The application allows users to view, filter, and sort products and view detailed information about each product. The project is designed to be responsive and user-friendly.

## Features

- **Product Listing**: Displays a list of products with the following details:
  - Product name
  - Product image
  - Product price
- **Filtering**: Filter products by category or price range.
- **Sorting**: Sort products by price (low to high and high to low).
- **Product Details**: View detailed information about a product, including a larger image, description, and price.
- **Search Bar**: Search for products by name.
- **Next.js Routing**: Navigate to a separate page for product details.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Bonus Features**:
  - Pagination for large product lists.
  - State management with Redux or React Context.
  - Unit tests for filtering and sorting components.

## Technologies Used

- **Next.js**: For building the application, routing, and server-side rendering.
- **React.js**: For building the UI components.
- **CSS**: For styling the application.
- **Optional: CSS Framework**: (e.g., Bulma, Tailwind CSS) for faster styling.
- **Redux or React Context**: For managing application state (optional).

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm** or **yarn**: A package manager to install dependencies.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or if you're using yarn
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

### Running the Application

To start the development server, run:

```bash
npm run dev
# or if you're using yarn
yarn dev
```

This will start the Next.js development server, and you can access the app at `http://localhost:3000`.

### Building the Application

To build the application for production, run:

```bash
npm run build
# or if you're using yarn
yarn build
```

To start the production server after building:

```bash
npm run start
# or if you're using yarn
yarn start
```

### Testing

To run unit tests, use the following command:

```bash
npm test
# or if you're using yarn
yarn test
```

### Linting and Formatting

To check the code with ESLint, use:

```bash
npm run lint
# or if you're using yarn
yarn lint
```

To automatically fix linting issues, run:

```bash
npm run lint:fix
# or if you're using yarn
yarn lint:fix
```

## Folder Structure

```plaintext
src/
├── components/      # Reusable UI components
├── pages/           # Pages for Next.js routing
├── hooks/           # Custom React hooks
├── redux/           # Redux-related files (optional)
├── services/        # API calls and data fetching
└── app/             # Main application logic
```

## How the Application Works

1. **Product Listing**:

   - Products are fetched from a static JSON file or mock API.
   - Each product displays its name, image, and price.

2. **Filtering**:

   - Users can filter products by category or price range using dropdowns or sliders.

3. **Sorting**:

   - Products can be sorted by price in ascending or descending order.

4. **Product Details**:

   - Clicking on a product displays detailed information on a new page using Next.js routing.

5. **Search Bar**:

   - Users can search for products by name, with results updating in real-time.

6. **Pagination** (Optional):
   - Large product lists are paginated to improve performance and user experience.

## Environment Variables

The application requires environment variables, defined in a `.env.local` file in the root directory. Example:

```env
NEXT_PUBLIC_API_BASE_URL=<your-api-base-url>
```

## Additional Notes

- **Responsive Design**: The application is styled to look good on both desktop and mobile devices.
- **Extensibility**: The architecture allows for easy addition of new features like more filters or additional pages.

## Conclusion

This application demonstrates the ability to build a feature-rich product listing page using Next.js. It incorporates best practices for component design, state management, and responsive UI development. Bonus features like search, pagination, and unit tests further enhance the functionality and maintainability of the app.
