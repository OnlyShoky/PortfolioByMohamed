$filePath = "src\app\shared\services\profile-data.service.ts"
$content = Get-Content $filePath -Raw

# Replace the technologies array
$newArray = @"
  technologies = [
    // Backend
    { name: 'Python', category: 'backend', iconClass: 'fab fa-python', color: '#9EDF9C', lightModeColor: '#3D8B40', backgroundColor: 'rgba(194, 255, 199, 0.2)', lightModeBackgroundColor: 'rgba(61, 139, 64, 0.1)' },
    { name: 'Node.js', category: 'backend', iconClass: 'fab fa-node-js', color: '#68A063', lightModeColor: '#3C6E3C', backgroundColor: 'rgba(104, 160, 99, 0.2)', lightModeBackgroundColor: 'rgba(60, 110, 60, 0.1)' },
    { name: 'Express', category: 'backend', iconClass: 'fas fa-server', color: '#FFFFFF', lightModeColor: '#000000', backgroundColor: 'rgba(255, 255, 255, 0.2)', lightModeBackgroundColor: 'rgba(0, 0, 0, 0.1)' },
    { name: 'Django', category: 'backend', iconClass: 'fab fa-python', color: '#00D383', lightModeColor: '#0A4A2A', backgroundColor: 'rgba(0, 211, 131, 0.2)', lightModeBackgroundColor: 'rgba(10, 74, 42, 0.1)' },
    { name: 'Flask', category: 'backend', iconClass: 'fas fa-flask', color: '#CCCCCC', lightModeColor: '#3A3A3A', backgroundColor: 'rgba(204, 204, 204, 0.2)', lightModeBackgroundColor: 'rgba(58, 58, 58, 0.1)' },
    { name: 'FastAPI', category: 'backend', iconClass: 'fa-solid fa-bolt', color: '#009688', backgroundColor: 'rgba(0, 150, 136, 0.2)' },
    { name: 'HTTP', category: 'backend', iconClass: 'fa-solid fa-globe', color: '#005C99', backgroundColor: 'rgba(0, 92, 153, 0.2)' },

    // Frontend
    { name: 'Angular', category: 'frontend', iconClass: 'fab fa-angular', color: '#FF2929', backgroundColor: 'rgba(255, 207, 179, 0.2)' },
    { name: 'React', category: 'frontend', iconClass: 'fab fa-react', color: '#61DAFB', lightModeColor: '#00B4D8', backgroundColor: 'rgba(97, 218, 251, 0.2)',  lightModeBackgroundColor: 'rgba(0, 180, 216, 0.1)' },
    { name: 'JavaScript', category: 'frontend', iconClass: 'fab fa-js-square', color: '#FEEC37', lightModeColor: '#D4B106', backgroundColor: 'rgba(252, 245, 150, 0.2)', lightModeBackgroundColor: 'rgba(212, 177, 6, 0.1)' },
    { name: 'TypeScript', category: 'frontend', iconClass: 'fab fa-js-square', color: '#4A90E2', backgroundColor: 'rgba(180, 210, 255, 0.2)' },
    { name: 'HTML', category: 'frontend', iconClass: 'fab fa-html5', color: '#E34F26', backgroundColor: 'rgba(243, 133, 105, 0.2)' },
    { name: 'CSS', category: 'frontend', iconClass: 'fab fa-css3-alt', color: '#264DE4', backgroundColor: 'rgba(38, 77, 228, 0.2)' },
    { name: 'SCSS', category: 'frontend', iconClass: 'fab fa-sass', color: '#CC6699', backgroundColor: 'rgba(247, 185, 222, 0.2)' },
    { name: 'TailwindCSS', category: 'frontend', iconClass: 'fas fa-wind', color: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.2)' },
    { name: 'Prism.js', category: 'frontend', iconClass: 'fas fa-lightbulb', color: '#9B59B6', backgroundColor: 'rgba(201, 155, 225, 0.2)' },
    { name: 'Chart.js', category: 'frontend', iconClass: 'fas fa-chart-bar', color: '#FF6384', backgroundColor: 'rgba(255, 182, 193, 0.2)' },

    // AI & ML
    { name: 'PyTorch', category: 'aiml', iconClass: 'fa-solid fa-fire-flame-curved', color: '#EE4C2C', backgroundColor: 'rgba(238, 76, 44, 0.2)' },
    { name: 'Detectron2', category: 'aiml', iconClass: 'fa-solid fa-robot', color: '#FFC107', lightModeColor: '#C79100', backgroundColor: 'rgba(255, 193, 7, 0.2)', lightModeBackgroundColor: 'rgba(199, 145, 0, 0.1)' },
    { name: 'OpenCV', category: 'aiml', iconClass: 'fas fa-eye', color: '#7D5CE8', lightModeColor: '#5A3EB8', backgroundColor: 'rgba(125, 92, 232, 0.2)', lightModeBackgroundColor:  'rgba(90, 62, 184, 0.1)' },
    { name: 'Gemini AI', category: 'aiml', iconClass: 'fab fa-google', color: '#B589FF', lightModeColor: '#7C3FD3', backgroundColor: 'rgba(181, 137, 255, 0.2)', lightModeBackgroundColor: 'rgba(124, 63, 211, 0.1)' },
    { name: 'ROS', category: 'aiml', iconClass: 'fa-solid fa-robot', color: '#69D4E5', lightModeColor: '#1E88A8', backgroundColor: 'rgba(105, 212, 229, 0.2)', lightModeBackgroundColor: 'rgba(30, 136, 168, 0.1)' },

    // Database
    { name: 'SQL', category: 'database', iconClass: 'fas fa-database', color: '#00BFFF', lightModeColor: '#0080CC', backgroundColor: 'rgba(0, 191, 255, 0.2)', lightModeBackgroundColor: 'rgba(0, 128, 204, 0.1)' },
    { name: 'MongoDB', category: 'database', iconClass: 'fas fa-leaf', color: '#00ED64', lightModeColor: '#00A344', backgroundColor: 'rgba(0, 237, 100, 0.2)', lightModeBackgroundColor: 'rgba(0, 163, 68, 0.1)' },

    // DevOps & Cloud
    { name: 'Docker', category: 'devops', iconClass: 'fab fa-docker', color: '#2496ED', backgroundColor: 'rgba(36, 150, 237, 0.2)' },
    { name: 'Google Cloud', category: 'devops', iconClass: 'fab fa-google', color: '#4285F4', backgroundColor: 'rgba(66, 133, 244, 0.2)' },
    { name: 'Linux', category: 'devops', iconClass: 'fab fa-linux', color: '#FCC624', lightModeColor: '#C79100', backgroundColor: 'rgba(252, 198, 36, 0.2)', lightModeBackgroundColor: 'rgba(199, 145, 0, 0.1)' },
    { name: 'Systemd', category: 'devops', iconClass: 'fas fa-cogs', color: '#0E4EF0', backgroundColor: 'rgba(14, 78, 240, 0.2)' },
    { name: 'Chrome Extension', category: 'devops', iconClass: 'fab fa-chrome', color: '#4285F4', backgroundColor: 'rgba(66, 133, 244, 0.2)' },
    { name: 'Firefox Extension', category: 'devops', iconClass: 'fab fa-firefox', color: '#FF9500', lightModeColor: '#D87000', backgroundColor: 'rgba(255, 149, 0, 0.2)', lightModeBackgroundColor: 'rgba(214, 115, 0, 0.1)' },

    // Embedded & IoT
    { name: 'C++', category: 'embedded', iconClass: 'fab fa-cuttlefish', color: '#4A90E2', backgroundColor: 'rgba(180, 210, 255, 0.2)' },
    { name: 'Raspberry Pi', category: 'embedded', iconClass: 'fas fa-raspberry-pi', color: '#C51A4A', backgroundColor: 'rgba(197, 26, 74, 0.2)' },
    { name: 'PyAudio', category: 'embedded', iconClass: 'fas fa-microphone', color: '#1DB954', backgroundColor: 'rgba(29, 185, 84, 0.2)' },

    // Game Development
    { name: 'C#', category: 'gamedev', iconClass: 'fab fa-microsoft', color: '#9B4F96', backgroundColor: 'rgba(155, 79, 150, 0.2)' },
    { name: 'Unity', category: 'gamedev', iconClass: 'fa-solid fa-gamepad', color: '#9E9E9E', lightModeColor: '#222222', backgroundColor: 'rgba(158, 158, 158, 0.2)', lightModeBackgroundColor: 'rgba(34, 34, 34, 0.1)' },

    // Tools & Media  
    { name: 'FFmpeg', category: 'tools', iconClass: 'fas fa-video', color: '#007808', backgroundColor: 'rgba(0, 120, 8, 0.2)' },
    { name: 'N8N', category: 'tools', iconClass: 'fa-solid fa-arrows-spin', color: '#E34F26', backgroundColor: 'rgba(243, 133, 105, 0.2)' },
    { name: 'ADAS', category: 'tools', iconClass: 'fa-solid fa-car', color: '#FF6B35', backgroundColor: 'rgba(255, 107, 53, 0.2)' }
  ];
"@

# Match the pattern from start of technologies to end of array
$pattern = '(?s)(technologies = \[).*?(\];)'
$content = $content -replace $pattern, $newArray

# Add helper methods before constructor
$helperMethods = @"

  getTechnologiesByCategory(category: string) {
    return this.technologies.filter((tech: any) => tech.category === category);
  }

  getAllCategories() {
    const categories = new Set(this.technologies.map((tech: any) => tech.category));
    return Array.from(categories);
  }

  constructor() { }
"@

$content = $content -replace '(?s)(getTechDetails.*?\r\n  \})\r\n\r\n  constructor\(\)', "`$1$helperMethods"

Set-Content $filePath $content
Write-Host "File updated successfully!"
