## React front-end bootstrap for enterprise version

### feature

- Dockerfile
- nginx
- profile seperation (local, alpha, beta, real)
- bash script for CI/CD

### TODO

- nginx access, error log not writing

### How to use

- ./dockerw build alpha
- docker run -p80:80 -d localhost:5000/react-bootstrap:latest