# 🛒 E-Commerce Platform - QuickCart

A modern, full-stack e-commerce application built with Next.js 15, featuring user authentication, product management, shopping cart functionality, and integrated payment processing with Inngest workflows.

## ✨ Features

### 🛍️ Customer Features
- **Product Catalog**: Browse and search through a wide range of products across multiple categories
- **Product Search**: Advanced search functionality to find products quickly
- **Product Details**: Detailed product pages with multiple images and descriptions
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Order Management**: View order history and track current orders
- **User Authentication**: Secure sign-up and login with Clerk authentication
- **Address Management**: Save and manage multiple shipping addresses

### 👨‍💼 Seller Features
- **Seller Dashboard**: Dedicated dashboard for sellers to manage their products
- **Product Management**: Add, edit, and delete products
- **Product Analytics**: Track product performance and sales

### 🔧 Technical Features
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Real-time Updates**: Hot toast notifications for user actions
- **Workflow Automation**: Inngest integration for background jobs and workflows
- **MongoDB Atlas**: Scalable cloud database for data persistence
- **Image Management**: Multiple product images support with Cloudinary integration (optional)

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **React**: 19.0.0
- **Styling**: Tailwind CSS 3.4.1
- **Notifications**: React Hot Toast 2.5.1

### Backend
- **Authentication**: [Clerk](https://clerk.com) 6.31.6
- **Database**: MongoDB Atlas with [Mongoose](https://mongoosejs.com) 8.18.0
- **Workflow Engine**: [Inngest](https://www.inngest.com) 3.40.2

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **CSS Processing**: PostCSS 8

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)
- **MongoDB Atlas Account**: For database ([Sign up here](https://www.mongodb.com/cloud/atlas))
- **Clerk Account**: For authentication ([Sign up here](https://clerk.com))
- **Inngest Account**: For workflow management ([Sign up here](https://www.inngest.com))

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd E-commernce-main
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add the following environment variables:

```env
# Public Environment Variables
NEXT_PUBLIC_CURRENCY=$
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Private Environment Variables
CLERK_SECRET_KEY=your_clerk_secret_key
MONGODB_URI=your_mongodb_connection_string
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key

# Cloudinary (Optional - for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### 🔑 How to Get API Keys:

**Clerk Authentication:**
1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Copy the Publishable Key and Secret Key from the API Keys section

**MongoDB Atlas:**
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a database user
4. Get your connection string and replace `<password>` with your database user password

**Inngest:**
1. Sign up at [inngest.com](https://www.inngest.com)
2. Create a new project
3. Get your Signing Key and Event Key from the settings

**Cloudinary (Optional):**
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your Cloud Name, API Key, and API Secret from the dashboard

### 4. Insert Sample Data (Optional)

To populate your database with sample products for testing:

```bash
node insert-sample-data.js
```

This will add 5 sample products to your MongoDB database.

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The app will auto-reload when you make changes to the code.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
E-commerce-main/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── product/          # Product-related APIs
│   │   └── ...
│   ├── all-products/         # All products page
│   ├── cart/                 # Shopping cart page
│   ├── product/              # Product detail pages
│   ├── seller/               # Seller dashboard
│   ├── my-orders/            # Order history page
│   ├── add-address/          # Address management
│   └── order-placed/         # Order confirmation
├── components/               # Reusable React components
│   ├── config/               # Configuration files (DB connection)
│   └── ...                   # UI components
├── context/                  # React Context providers
├── assets/                   # Static assets (images, icons)
├── lib/                      # Utility functions
├── public/                   # Public static files
├── .env                      # Environment variables (not in repo)
├── package.json              # Project dependencies
├── tailwind.config.mjs       # Tailwind CSS configuration
├── next.config.mjs           # Next.js configuration
└── README.md                 # This file
```

## 🔌 API Routes

The application includes the following API endpoints:

- **`/api/product/all`** - Get all products
- **`/api/product/[id]`** - Get specific product details
- **Additional endpoints** - Check the `app/api` directory for more

## 🎨 Customization

### Changing Currency
Update the `NEXT_PUBLIC_CURRENCY` in your `.env` file:
```env
NEXT_PUBLIC_CURRENCY=₹  # For Indian Rupee
NEXT_PUBLIC_CURRENCY=$  # For US Dollar
NEXT_PUBLIC_CURRENCY=€  # For Euro
```

### Styling
The project uses Tailwind CSS. Modify `tailwind.config.mjs` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

### Database Schema
Product schema is defined in MongoDB with the following fields:
- `userId`: Seller ID
- `name`: Product name
- `description`: Product description
- `price`: Original price
- `offerPrice`: Discounted price
- `image`: Array of image URLs
- `category`: Product category
- `date`: Timestamp

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add all environment variables in Vercel project settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Deploy on Other Platforms
- **Railway**: [railway.app](https://railway.app)
- **Render**: [render.com](https://render.com)
- **Netlify**: [netlify.com](https://www.netlify.com)

Make sure to set all environment variables on your deployment platform.

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - contribute to Next.js

### Other Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Clerk Documentation](https://clerk.com/docs)
- [Inngest Documentation](https://www.inngest.com/docs)

## 🐛 Troubleshooting

### Common Issues

**Issue**: MongoDB connection error
```
Solution: Verify your MONGODB_URI is correct and your IP is whitelisted in MongoDB Atlas
```

**Issue**: Clerk authentication not working
```
Solution: Check if you've added both public and secret keys correctly
```

**Issue**: Port 3000 already in use
```
Solution: Run on a different port: npm run dev -- -p 3001
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- All open-source contributors

---

**Happy Coding! 🚀**
