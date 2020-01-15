  
const sphere = document.querySelector('a-sphere');
const plane = document.querySelector('a-plane');

const shiftDegrees = (value) => (value + 0.5) % 360;

let degrees = 0;

const animate = () => {
  degrees = shiftDegrees(degrees);
  const color = `hsl(${degrees + 0.5}, 100%, 50%)`;
  const variation = Math.sin(Date.now() / 1000);
  const position = `0 ${1.5 + variation} -2`;
  const rotation = `-90 0 ${degrees}`;

  sphere.setAttribute('color', color);
  sphere.setAttribute('position', position);

  // plane.setAttribute('color', color);
  plane.setAttribute('rotation', rotation);

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
