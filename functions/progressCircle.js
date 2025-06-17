function progressCircle({
  targetPercent = 0,
  size = 120,
  containerId
}) {
  // Color interpolation for >50%
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const num = parseInt(hex, 16);
    return [num >> 16, (num >> 8) & 255, num & 255];
  }
  function lerp(a, b, t) {
    return Math.round(a + (b - a) * t);
  }
  function percentToColor(percent) {
    if (percent <= 50) {
      return '#ed122d'; // Red for 0-50%
    } else {
      // Transition from yellow (#ffe600) at 51% to green (#27db24) at 100%
      const rgbStart = hexToRgb('#eeab11'); // yellow
      const rgbEnd = hexToRgb('#47b856');   // green
      // Normalize t: 51% => 0, 100% => 1
      const t = (percent - 51) / (100 - 51);
      const r = lerp(rgbStart[0], rgbEnd[0], t);
      const g = lerp(rgbStart[1], rgbEnd[1], t);
      const b = lerp(rgbStart[2], rgbEnd[2], t);
      return `rgb(${r},${g},${b})`;
    }
  }

  const strokeWidth = Math.max(2, size * 0.15);
  const radius = (size / 2) - 6;
  const circumference = 2 * Math.PI * radius;
  const fontSize = Math.round(size * 0.4);

  // SVG markup
  const wrapper = document.createElement('div');
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "center";
  wrapper.style.alignItems = "center";
  wrapper.innerHTML = `
    <svg class="progress-circle" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle class="bg" cx="${size/2}" cy="${size/2}" r="${radius}" stroke="#e0e0e0" stroke-width="${strokeWidth}" fill="none"/>
      <circle class="progress" cx="${size/2}" cy="${size/2}" r="${radius}" stroke="${percentToColor(0)}" stroke-width="${strokeWidth}" fill="none"
        style="stroke-dasharray:${circumference};stroke-dashoffset:${circumference};transition: stroke-dashoffset 1s, stroke 0.5s;"/>
      <text 
        x="50%" 
        y="50%" 
        text-anchor="middle" 
        font-size="${fontSize}" 
        fill="#333" 
        font-weight="bold" 
        class="percent-label" 
        dominant-baseline="middle"
        alignment-baseline="middle"
      >0</text>
    </svg>
  `;

  // Insert into container
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous content
  container.appendChild(wrapper);

  // Animation logic
  const svg = wrapper.querySelector('svg');
  const circle = svg.querySelector('.progress');
  const label = svg.querySelector('.percent-label');
  let current = 0;

  function animate() {
    if (current <= targetPercent) {
      const offset = circumference - (current / 100) * circumference;
      circle.style.strokeDashoffset = offset;
      circle.setAttribute('stroke', percentToColor(current));
      label.textContent = `${current}`;
      current++;
      requestAnimationFrame(animate);
    }
  }
  animate();
}
