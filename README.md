# Moving Out Sale - React App

A simple, mobile-optimized React page for displaying items for sale.

## How to Add Your Photos

### Step 1: Add Your Images

1. Copy your mobile photos to the `public/images/` folder
2. Use descriptive names like:
   - `coffee-table-1.jpg`
   - `coffee-table-2.jpg`
   - `bookshelf-1.jpg`
   - etc.

### Step 2: Update Items in src/App.js

Replace the sample items with your own items:

```javascript
const items = [
  {
    id: 1,
    title: "Your Item Name",
    description: "Description of your item",
    price: "$100",
    images: [
      "/images/your-item-1.jpg",
      "/images/your-item-2.jpg",
      "/images/your-item-3.jpg",
    ],
  },
  // Add more items...
];
```

### Step 3: Update Contact Information

In `src/App.js`, update the header and footer with your contact info.

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Optimize for web (max 1MB per image)
- **Orientation**: Portrait photos work best (the layout is optimized for this)
- **Naming**: Use descriptive names with numbers for multiple photos

## Running the App

```bash
npm start
```

The app will run at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates a `build` folder with your optimized website ready to deploy.
