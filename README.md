# 🏠 Homelab Documentation

This repository contains the documentation for my homelab infrastructure, including setup guides, configuration details, and maintenance procedures.

## 📚 Documentation Structure

```
docs/
├── content/           # Documentation content
│   ├── overview/     # System overview
│   ├── installation/ # Installation guides
│   ├── development/  # Development guides
│   └── operations/   # Operations guides
├── static/           # Static assets
├── assets/          # Theme assets
└── layouts/         # Hugo templates
```

## 🚀 Features

- 📱 Responsive design
- 🌙 Dark mode support
- 🔍 Full-text search
- 📊 Interactive resource monitoring
- 🎨 Modern UI with animations
- 📱 Mobile-friendly interface

## 🛠️ Local Development

1. Install Hugo:
   ```bash
   # macOS
   brew install hugo

   # Linux
   snap install hugo --classic
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/homelab-docs.git
   cd homelab-docs
   ```

3. Start the development server:
   ```bash
   hugo server -D
   ```

4. Visit `http://localhost:1313` to view the documentation.

## 🐳 Docker Deployment

Build and run the documentation using Docker:

```bash
# Build the image
docker build -t homelab-docs ./docs

<<<<<<< HEAD
# Run the container
docker run -p 80:80 homelab-docs
```
=======
### Storage Solution
- 💾 **NAS: Synology DS918+**
  - Configuration: 4-Bay (Currently 8TB)
  - Planned Storage: 4x 4TB NAS drives
  - Features:
    - Hardware transcoding
    - Docker support
    - Snapshot replication
    - Cloud sync capabilities
>>>>>>> 3f2fdd0bde16f0089862b23fc4ef4ebf6724f21a

## 🔄 CI/CD Pipeline

The documentation is automatically built and deployed using GitHub Actions:

1. Push to `main` branch:
   - Builds documentation
   - Deploys to GitHub Pages
   - Creates container image
   - Sends notifications

2. Pull Request:
   - Builds documentation
   - Generates preview
   - Creates PR comment with statistics

<<<<<<< HEAD
## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License
=======
>>>>>>> 3f2fdd0bde16f0089862b23fc4ef4ebf6724f21a

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- 📚 [Documentation](https://homelab.ahmed2.com)
- 🐳 [Container Registry](https://github.com/yourusername/homelab-docs/packages)
- 📝 [Issues](https://github.com/yourusername/homelab-docs/issues)
- 🔄 [Pull Requests](https://github.com/yourusername/homelab-docs/pulls)

## 🤝 Support

For support, please:
1. Check the [documentation](https://homelab.ahmed2.com)
2. Search [existing issues](https://github.com/yourusername/homelab-docs/issues)
3. Create a new issue if needed

## 🙏 Acknowledgments

- [Hugo](https://gohugo.io/) - Static site generator
- [Docsy](https://www.docsy.dev/) - Hugo theme
- [GitHub Actions](https://github.com/features/actions) - CI/CD platform
