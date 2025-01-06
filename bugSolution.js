```javascript
// Ensure your tailwind.config.js is correctly configured to include your content files
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//In your main app.js file
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex items-center space-x-4">
        <div className="bg-red-500 w-10 h-10 rounded-full"></div>
        <div className="text-xl font-bold">My App</div>
      </div>
    </div>
  );
}
export default App;
```