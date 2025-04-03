# Beyond the Turing Test

A podcast exploring the philosophical side of artificial intelligence and computer science.

## Website Setup

This is a simple static website hosted on GitHub Pages. The site uses semantic HTML and minimal CSS for optimal performance and accessibility.

### File Structure

- `index.html` - Main page template
- `episode.html` - Episode page template
- `styles.css` - Site styles
- `episodes.json` - Episode metadata
- `build.js` - Build script
- `episodes/` - Generated episode pages

### Local Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the build script:
   ```bash
   npm run build
   ```
4. Open `index.html` in your browser

### Adding New Episodes

1. Add a new entry to `episodes.json` with:

   - `id`: Unique identifier (e.g., "episode-2")
   - `title`: Episode title
   - `guest`: Guest name
   - `date`: Release date (YYYY-MM-DD)
   - `descriptId`: Descript embed ID
   - `description`: Episode description

2. Run the build script:
   ```bash
   npm run build
   ```

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Technology Stack

- HTML5
- CSS3
- Node.js (for build process)
- GitHub Pages
- Descript (for episode hosting)
