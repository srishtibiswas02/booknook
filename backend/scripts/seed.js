const { exec } = require('child_process');
const path = require('path');

console.log('Starting database seeding...');

// Run seedBooks.js
exec('node scripts/seedBooks.js', (error, stdout, stderr) => {
  if (error) {
    console.error('Error seeding books:', error);
    return;
  }
  console.log(stdout);

  // Run seedBlogs.js after books are seeded
  exec('node scripts/seedBlogs.js', (error, stdout, stderr) => {
    if (error) {
      console.error('Error seeding blogs:', error);
      return;
    }
    console.log(stdout);
    console.log('Database seeding completed!');
  });
}); 